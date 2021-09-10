const mongoose=require('mongoose');

const stockitemSchema =new mongoose.Schema({

    stockitemId:{
        type:String,
        required:true
    },
    stockitemName:{
        type:String,
        required:true
    },
    stockitemQty:{
        type:String,
        required:true
    },
    stockitemType:{
        type:String,
        required:true
    },
    stockitemunitPrice:{
        type:Number,
        required:true
    },
    itemaddedDate:{
        type:Date,
        required:true,
    },
    sisupplierId:{
        type:String,
        required:true
    },
    siorderNo:{
        type:String,
        required:true
    }
    
});

module.exports=mongoose.model('Stockitems',stockitemSchema);