const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


app.listen(9002,function check(error)
{
    if(error)
    console.log("Error....!!!!");
    else
    console.log("Started....!!!!");
});

mongoose.connect("mongodb://localhost:27017/Shop-kade",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});