const mongoose=require('mongoose');

const inventorySupplier =new mongoose.Schema({

    inv_supplierID:{
        type:String,
        required:true
    },
    inv_supplierName:{
        type:String,
        required:true,
    },
    inv_supplierTel:{
        type:Number,
        required:false,
    },
    
    inv_supplierAddress:{
        type:String,
        required:true,
    }
   
});

//invsuppliers
module.exports=mongoose.model('InvSuppliers',inventorySupplier);