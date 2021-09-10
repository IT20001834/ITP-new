const mongoose=require('mongoose');

const iorderSchema =new mongoose.Schema({

    iOrderId:{
        type:String,
        required:true
    },
    iOrderedDate:{
        type:Date,
        required:true
        
    },
    iOrderRecevedDate:{
        type:Date,
        required:false
        
    },
    iOrderPrice:{
        type:Number,
        required:true
    },
    
    iOrderDescription:{
        type:String,
        required:true,
    },
    iOrdersupplierId:{
        type:String,
        required:true
    }
   
    
});

//Stockitems
module.exports=mongoose.model('IOrders',iorderSchema);