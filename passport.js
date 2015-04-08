/**
 * Created by M.UsamaShahid on 20-Mar-15.
 */


var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User            = require('./DBschema/Index/userSchema').Model.Passport.UserModel;

exports.config                  = exports.config || {};
exports.config.passport           = exports.config.passport || {};

exports.config.passport.passportConfigFuncForSignUpAndLogin = function(passport) {

    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    console.log("passportConfigFuncForSignUpAndLogin Called!");
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("user");
        console.log(user);
        done(null, user.email);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("id");
        console.log(id);
        User.find({email : id}, function(err, user) {
            done(err, user);
        });
    });

    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            //console.log('req');
            //console.log(req);
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if already a user with that email
                    if (user) {
                        return done(null, false, message('signup Message', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        console.log("Going to Save User")
                        var newUser            = new User();

                        // set the user's local credentials
                        newUser.email    = email;
                        newUser.password = newUser.generateHash(password);
                        req.session.uid = 123456;
                        req.session.name = "Munna Bhai";
                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));
};


// route middleware to make sure a user is logged in
exports.config.passport.isLoggedIn = function (req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    console.log("User is not Authenticated");
    console.log(req.url);
    res.redirect('/login');
};

