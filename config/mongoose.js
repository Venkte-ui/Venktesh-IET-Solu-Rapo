const  mongoose  = require("mongoose");
mongoose.connect('mongodb://localhost:27017/product_model_list');
const db=mongoose.connection;
db.on('error',function(err)
{
    console.log("Error");
})
db.once('open',function()
{
    console.log("DB Connected");
})