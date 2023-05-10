const express = require('express')
const app = express()
const mongoose = require('mongoose');
var routes = require('./route/routes');
mongoose.set('strictQuery', false);
const cors=require('cors');

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));


app.listen(9002,function check(error)
{
    if(error)
    console.log("Error....!!!!");
    else
    console.log("Started....!!!!");
});

mongoose.connect("mongodb://127.0.0.1:27017/Shop-kade",{useNewUrlParser: true,  useUnifiedTopology: true },
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
app.use(express.json());
app.use(routes);