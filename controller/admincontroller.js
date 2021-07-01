"use strict";
let alert=require('alert');
var Post = require('../models/post');

exports.getHome = function (req, res, next) {
     Post.find({},function(err,result){
          
            res.render("../view/home",{post:result});
         
     })
    
  
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
        BloodGr:req.body.blood_groups,
        State:req.body.state,
        Pin:req.body.pin
        });
        console.log(req.body);
        //Post.find({User:req.body.user})
        post.save(function (err) {
            if (!err) {
                alert("Registered successfully");
              res.redirect("/");
            }
          });
    //res.render("../view/register");
  
};

exports.postDetail = function (req, res, next) {
    var n=req.body.UserName;
    console.log(req.body);
    Post.find({User:n}, function(err, result){
        if(!err)
        {   console.log(result)
            res.render("../view/detail",{name:result});
        }
    })
   
  
};

exports.postSearch = function (req, res, next) {
    //var state=req.body.state;
    //var dist=req.body.dist;
    console.log(req.body);
    var state=req.body.states;
    var dist=req.body.districts;
    var bg=req.body.blood
    console.log(state);
    console.log(dist);
    console.log(bg);
    Post.find({BloodGr: bg},function(err,result){
          if(!err)
        res.render("../view/searched",{post:result});
     
 })
    //res.render("../view/detail",{name:result});
};