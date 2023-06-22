const list = require('../models/list');
module.exports.home = async function(req,res){
    try{
        const listcomplete = await list.find({});
        return res.render('home.ejs',
        {
            title:"TO Do List App",
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
        return res.redirect('back');
    }catch(err){
        console.log("fill all items");
        console.log("Error got in creating to do item "+err);
    }
} 

module.exports.homedelete = async function(req,res){
    try{
        const arraylist = req.body.list;
        for(var item of arraylist){
            listdelete = await list.findByIdAndDelete(item);
            // console.log("delted item id ",item);
        }
        if(req.xhr){
            return res.status(200).json({
                message:req.body.list
            });
        }
        return res.redirect('back');
    }catch(err){
        console.log("Error in deleting element ",err);
    }
}