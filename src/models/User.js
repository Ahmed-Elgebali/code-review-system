const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    googleId: {type:String, required: false},
    name: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {
        type: String,
        required: function() {return this.authMethod === "local";},
        authMethod: { type: String, enum: ["google", "local"], default:"local"}
    }
}, {timestamps: true});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);
module.exports = User;