

var mongoose    = require("mongoose");


var dburl = 'mongodb://localhost/testingApp';
exports.dbcon = exports.dbcon || mongoose.connect(dburl, function(err, db){
    if(err){
        console.log("Can not connect to DB");
        console.log(err);
    }
    else
    {
        console.log("Connected to DB");

    }
});