/**
 * Created by M.UsamaShahid on 11-Mar-15.
 */

    /*--------------------- Files Requires Section Start----------------------------------------*/

var express             = require('express'),
    bodyParser          = require('body-parser'),
    cookieParser        = require('cookie-parser'),
    session             = require('express-session');

var config              = require('./userConfig');
var IndexController     = require("./controllers/Index/indexController").Quiz.Controllers.index;


/*--------------------- Files Requires Section End----------------------------------------*/




var app = express();    // calling express


app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: "_My_Secret_Celebrity_"
}));

app.use(express.static(__dirname +'./static'));

app.set('views',__dirname + '/views'); // set Views Folder
app.set('view engine', 'ejs');         // Set View Engine ejs





/*---------------------------------------------------------------- ROUTES FUNCTIONS Start 17-march-2015--------------------------------------------------------------------*/

/*================== Index ROUTES===================*/
require("./routes/Index/indexRoutes").Quiz.Routes.index.initIndexRoutes(app);
/*================== Index ROUTES===================*/


app.get("*",IndexController.redirectIndex );
/*---------------------------------------------------------------- ROUTES FUNCTIONS End--------------------------------------------------------------------*/





var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Listening on " + port);
});

console.log('server is running now');