const list = require('../models/list');
module.exports.home = async function(req,res){

    try{
        const listcomplete = await list.find({});
        return res.render('home.ejs',
        {
            title:"TO Do List",
            arr : listcomplete
        })
    }catch(err)
    {
        console.log("error is found in getting data from database ",err);
    }
}


module.exports.homepost = async function(req,res){
    try{
        const newItem = await list.create({
            desc:req.body.desc,
            date:req.body.date,
            cate:req.body.cate
        })
        console.log('*********', newItem);
        return res.redirect('back');
    }catch(err){
        console.log("Error got in creating to do item "+err);
    }
}