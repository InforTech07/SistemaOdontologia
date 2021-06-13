const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local.signup', new LocalStrategy({
    campoUsuario:'usuario',
    campoContrasena:'contrasena',
    passReqToCallback: true
}, async (req, usuario,contrasena,done)=>{
    console.log(req.body)
}));


