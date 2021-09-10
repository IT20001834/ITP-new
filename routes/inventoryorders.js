const express =require('express');

//Stockitems == iOrders
const iOrders=require('../models/inventoryorders');

//stockrouter == order_router
const order_router = express.Router();

//save items

order_router.post('/iorder/save',(req,res)=>{
    let newiorder =new iOrders(req.body);

    newiorder.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Order saved successfully"
        });
    });
});


//get items

order_router.get('/iorders',(req,res)=>{
    iOrders.find().exec((err,iorders)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingIOrders:iorders
        });
    });
});

//get s specific item

order_router.get('/iorder/:id',(req,res)=>{
    let iorderId = req.params.id;

    iOrders.findById(iorderId,(err,iorder)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            iorder
        });
    });
});
//update
order_router.put('/iorder/update/:id',(req,res)=>{
    iOrders.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,iorder)=>{
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
order_router.delete('/iorder/delete/:id',(req,res)=>{
    iOrders.findByIdAndRemove(req.params.id).exec((err,deletediorder)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccssfull",err
        });
        return res.json({
            message:"Delete Successfull", deletediorder
        });
    });
});
module.exports=order_router;