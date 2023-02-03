const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    qtyPerUnit:{
        type:Number,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    unitInStock:{
        type:Number,
        required:true
    },
    discontuned:{
        type:Boolean,
        required:true
    }
})
const productmodel=mongoose.model('ProductList',productSchema);
module.exports=productmodel;