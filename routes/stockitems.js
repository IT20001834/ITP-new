const express =require('express');

const Stockitems=require('../models/stockitems');

const stockrouter = express.Router();

//save items

stockrouter.post('/stockitem/save',(req,res)=>{
    let newStockitem =new Stockitems(req.body);

    newStockitem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Item saved successfully"
        });
    });
});


//get items

stockrouter.get('/stockitems',(req,res)=>{
    Stockitems.find().exec((err,stockitems)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStockitems:stockitems
        });
    });
});

//get s specific item

stockrouter.get('/stockitem/:id',(req,res)=>{
    let stockId = req.params.id;

    Stockitems.findById(stockId,(err,stockitem)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            stockitem
        });
    });
});
//update
stockrouter.put('/stockitem/update/:id',(req,res)=>{
    Stockitems.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,stockitem)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
        
});

//delette item
stockrouter.delete('/stockitem/delete/:id',(req,res)=>{
    Stockitems.findByIdAndRemove(req.params.id).exec((err,deletedStockitem)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccssfull",err
        });
        return res.json({
            message:"Delete Successfull", deletedStockitem
        });
    });
});
module.exports=stockrouter;