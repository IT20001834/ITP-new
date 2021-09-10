const express =require('express');

//Stockitems == invSuppliers
const invSuppliers=require('../models/inventorysuppliers');

//stockrouter == order_router
const isupplier_router = express.Router();

//save items

isupplier_router.post('/inssupplier/save',(req,res)=>{
    let newisupplier =new invSuppliers(req.body);

    newisupplier.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Supplier saved successfully"
        });
    });
});


//get items

isupplier_router.get('/inssuppliers',(req,res)=>{
    invSuppliers.find().exec((err,invsuppliers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInvSuppliers:invsuppliers
        });
    });
});

//get s specific item

isupplier_router.get('/inssupplier/:id',(req,res)=>{
    let invsupplierId = req.params.id;

    invSuppliers.findById(invsupplierId,(err,invsupplier)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            invsupplier
        });
    });
});
//update
isupplier_router.put('/inssupplier/update/:id',(req,res)=>{
    invSuppliers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,invsupplier)=>{
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
isupplier_router.delete('/inssupplier/delete/:id',(req,res)=>{
    invSuppliers.findByIdAndRemove(req.params.id).exec((err,deletedinvsupplier)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccssfull",err
        });
        return res.json({
            message:"Delete Successfull", deletedinvsupplier
        });
    });
});
module.exports=isupplier_router;