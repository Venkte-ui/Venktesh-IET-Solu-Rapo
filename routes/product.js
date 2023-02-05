const express=require('express');
const router=express.Router();
const {createcatmodel,createpromodel}=require('../controller/product');
router.route('/create-catogry').post(createcatmodel.createcactemodel);
router.route('/create-product').post(createpromodel.createpromodel);
router.route('/getalldatat').get(createpromodel.getalldata);
module.exports=router;