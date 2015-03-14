/**
 * Created by M.UsamaShahid on 11-Mar-15.
 */
var config = require('./userConfig');

var express         = require('express'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session');

var app = express();

if (process.env.NODE_ENV === 'development') {
    //app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    //app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

var port = 3000;
app.listen(port);
console.log('server is running now');