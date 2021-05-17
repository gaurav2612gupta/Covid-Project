var Post = require('../models/post');

exports.getHome = function (req, res, next) {
  
    res.render("../view/home");
  
};
exports.getSearch = function (req, res, next) {
  
    res.render("../view/search");
  
};
exports.getRegister = function (req, res, next) {
  
    res.render("../view/register");
  
};
exports.postRegister = function (req, res, next) {
    
    var post = new Post({
        User:req.body.user,
        Mobile:req.body.mobile,
        Email:req.body.email,
        State:req.body.state,
        Pin:req.body.pin,
        BloodGr:req.body.blood_groups});
        console.log(req.body);
        
        post.save(function (err) {
            if (!err) {
              res.redirect("/");
            }
          });
    //res.render("../view/register");
  
};