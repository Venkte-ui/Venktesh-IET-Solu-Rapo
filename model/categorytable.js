const mongoose=require('mongoose');
const categoerSchema=new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,ref:ProductList
    },
    catogryName:{
        type:String,
        required:true
    }

})
const cateogry=mongoose.model('Catogry',categoerSchema);
module.exports=cateogry;