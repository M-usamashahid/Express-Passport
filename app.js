/**
 * Created by M.UsamaShahid on 11-Mar-15.
 */

/* Files Requires Section Start----------------------------------------*/
var config              = require('./userConfig');
var mongoose = require("mongoose");
var express             = require('express'),
    bodyParser          = require('body-parser'),
    cookieParser        = require('cookie-parser'),
    session             = require('express-session'),
    passport            = require('passport');

var IndexController     = require("./controllers/Index/indexController").Quiz.Controllers.index;
var requiresLogin       = require('./passport').config.passport.isLoggedIn;


/* Files Requires Section End----------------------------------------*/


var app = express();    // calling express


app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

var MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());    // persistent login sessions

app.use(express.static(__dirname +'./static'));

app.set('views',__dirname + '/views'); // set Views Folder
app.set('view engine', 'ejs');         // Set View Engine ejs


/*================== Passport Config Function===================*/
 require("./passport").config.passport.passportConfigFuncForSignUpAndLogin(passport); // pass passport for configuration
/*================== Passport Config Function===================*/


/* ROUTES FUNCTIONS Start 17-march-2015--------------------------------------------------*/


/*================== Index ROUTES===================*/
require("./routes/Index/indexRoutes").Quiz.Routes.index.initIndexRoutes(app, {requiresLogin : requiresLogin },passport);
/*================== Index ROUTES===================*/


app.get("*",requiresLogin ,IndexController.redirectIndex );
/* ROUTES FUNCTIONS End------------------------------------------------------------------*/





var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Listening on " + port);
});

console.log('server is running now');