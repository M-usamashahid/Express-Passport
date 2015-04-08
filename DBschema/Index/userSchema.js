/**
 * Created by M.UsamaShahid on 14-Mar-15.
 */

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
var config   = require('../../UserConfig');

exports.Model = exports.Model || {};
exports.Model.Passport = exports.Model.Passport || {};



var UserSchema = new Schema ({
    email        : String,
    password     : {type: String, required: true}

});




// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};



var UserModel                                 = mongoose.model('user', UserSchema);

exports.Model.Passport.UserModel              = UserModel;