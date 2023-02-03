const express=require('express');
const app=express();
const mongoose=require('./config/mongoose');
const port=8000;
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