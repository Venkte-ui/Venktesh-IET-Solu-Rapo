const express=require('express');
const app=express();
const mongoose=require('./config/mongoose');
const port=8000;
app.use(express.json());
const routerimp=require('./routes/product');
app.get('/',function(req,res)
{
    res.send("At home page")
});
app.use('/api/create-model',routerimp);
app.listen(port,function(err)
{ 
    if(err)
    {
    console.log('Error');
    }
    else{
        console.log("Error is not present");
    }
})