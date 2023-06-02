const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_list_db');

const db = mongoose.connection;

db.on('eror',function(err){
    console.log(`Error is found ${err}`);
})

db.once('open',function(){
    console.log("Successfull connected to data base");
})