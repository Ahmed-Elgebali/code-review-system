require("dotenv").config();
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback",
            passReqToCallback: true
        },
        async (request, accessToken, refreshToken, profile, done) =>{
            try{
                let user = await User.findOne({googleId: profile.id});
                if(!user) {
                    user = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        authMethod: "google"
                    })
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
)

passport.serializeUser((user, done)=>{
    done(null, user.id);
})

passport.deserializeUser(async (id, done)=>{
    const user = await User.findById(id);
    done(null, user);
})