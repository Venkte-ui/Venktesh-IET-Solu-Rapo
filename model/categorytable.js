const mongoose=require('mongoose');
const categoerSchema=new mongoose.Schema({
    catogryName:{
        type:String,
        required:true
    }

});
const cateogry=mongoose.model('Catogry',categoerSchema);
module.exports=cateogry;