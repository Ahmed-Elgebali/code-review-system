const express = require("express");
const passport = require("passport");
const {registerUser, loginUser, googleAuth, googleAuthCallback} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleAuthCallback, (req, res)=>{
    res.json({message: "Google login Successful", user: req.user})
})
router.get("/logout/google", (req, res)=>{
    req.logout(function(err) {
        if(err) return next(err);
        req.session.destroy(()=> {
            res.redirect("/");
        })
    })
})


module.exports = router;