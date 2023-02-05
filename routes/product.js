const express=require('express');
const router=express.Router();
const {createcatmodel,createpromodel}=require('../controller/product');
router.route('/create-catogry').post(createcatmodel);
router.route('/create-product').post(createpromodel);
module.exports=router;