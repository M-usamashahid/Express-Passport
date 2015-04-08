/**
 * Created by M.UsamaShahid on 12-Mar-15.
 */

var IndexController = require("../../controllers/Index/indexController").Quiz.Controllers.index;

exports.Quiz                  = exports.Quiz || {};
exports.Quiz.Routes           = exports.Quiz.Routes || {};
exports.Quiz.Routes.index     = exports.Quiz.Routes.index || {};


exports.Quiz.Routes.index.initIndexRoutes = function(app, middlewares,passport){

   app.get("/", middlewares.requiresLogin ,IndexController.renderIndex );
   app.get("/login",IndexController.renderLogin );
   app.get("/signUp",IndexController.renderSignUp );
   app.get("/profile", middlewares.requiresLogin ,IndexController.renderProfile );

   app.post('/saveUser', passport.authenticate('local-signup', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/signUp' // redirect back to the signup page if there is an error

   }));

};