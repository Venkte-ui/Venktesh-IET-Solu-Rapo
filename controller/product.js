const productSchema=require('../model/productsch');
const category=require('../model/categorytable');
module.exprts.createcatemodel=async(req,res)=>
{
 const catogryName=req.body;
 const catnmae= await category.create({
  catogryName
 })
 return res.send(catnmae);
};

module.exports.createpromodel=async(req,res)=>
{
 const productlist=await  productSchema.create({
    categoryId:req.body.categoryId,
    productName:req.body.productName,
    qtyPerUnit:req.body.qtyPerUnit,
    unitPrice:req.body.qtyPerUnit,
    unitInStock:req.body.unitInStock,
    discontuned:req.body.discontuned
 })
 const prodata=await productlist.save();
 res.send(prodata);
};
