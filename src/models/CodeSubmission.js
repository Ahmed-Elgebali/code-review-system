const mongoose = require("mongoose");

const codeSubmissionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    code:{
        type: String,
        required: true,
    },
    analysisResult: {
        type: Object
    },
    qualityScore: {
        type: Number,
        default: 10
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, {timestamps:true});

const CodeSubmission = mongoose.model("CodeSubmission", codeSubmissionSchema);

module.exports = CodeSubmission;