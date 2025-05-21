const User = require("../models/User");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"30d" });
}

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body);
    try {
        const userExists = await User.findOne({email});
        if(userExists) return res.status(400).json({message:"User Already exists"});

        const user = await User.create({name,email,password});
        res.status(201).json({
            _id:user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"ServerError"});
    }
}

const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user.id),
            })
        } else {
            res.status(401).json({message:"Invalid email or password"})
        }
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}

const googleAuth = passport.authenticate("google", {scope:["profile", "email"]});

const googleAuthCallback = passport.authenticate("google", { failureRedirect: "/"});

module.exports = {registerUser, loginUser, googleAuth, googleAuthCallback};