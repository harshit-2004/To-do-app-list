const mongoose = require('mongoose');

const listitem = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    cate:{
        type:String,
        required:false
    },
    date:{
        type:String,
        required:true
    }
})

const list = mongoose.model('list',listitem);

module.exports = list;