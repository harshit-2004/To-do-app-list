const express = require('express');

const mongoose = require('mongoose');

const db = require('./config/mongoose');

const list = require('./models/list');

const path = require('path');

const port = "8800";

const app = express();

app.use(express.urlencoded());

app.use('/',require('./routes'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views/"));


app.listen(port,function(err){
    if(err)
    console.log(`error is found ${err}`);
    console.log("port run successfully ",port);
})