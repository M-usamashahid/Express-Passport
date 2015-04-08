/**
 * Created by M.UsamaShahid on 14-Mar-15.
 */

exports.Quiz                        = exports.Quiz || {};
exports.Quiz.Controllers            = exports.Quiz.Controllers || {};
exports.Quiz.Controllers.index      = exports.Quiz.Controllers.index || {};


exports.Quiz.Controllers.index.renderIndex = function(req, res){

    res.render('index/index',{layout : false});
};

exports.Quiz.Controllers.index.renderLogin = function(req, res){

    res.render('index/login',{layout : false});
};

exports.Quiz.Controllers.index.renderSignUp = function(req, res){

    res.render('index/signUp',{layout : false});
};

exports.Quiz.Controllers.index.renderProfile = function(req, res){

    res.render('index/profile',{layout : false});
};

exports.Quiz.Controllers.index.redirectIndex = function(req, res){

    res.redirect("/");
};

