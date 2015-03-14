/**
 * Created by M.UsamaShahid on 11-Mar-15.
 */
var config = require('./UserConfig');

var express         = require('express'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session');

var app = express();


var port = 3000;
app.listen(port);
console.log('server is running now');