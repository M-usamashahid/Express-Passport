/**
 * Created by M.UsamaShahid on 12-Mar-15.
 */

var IndexController = require("../../controllers/Index/indexController").Quiz.Controllers.index;

exports.Quiz                = exports.Quiz || {};
exports.Quiz.Routes         = exports.Quiz.Routes || {};
exports.Quiz.Routes.index = exports.Quiz.Routes.index || {};


exports.Quiz.Routes.index.initIndexRoutes = function(app){

   app.get("/home",IndexController.renderIndex )

};