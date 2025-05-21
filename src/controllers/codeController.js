const CodeSubmission = require("../models/CodeSubmission");
const eslint = require("eslint");

//Calculate the code quality based on errors & warnings
const calculateScore = (results) =>{
    let totalErrors = 0;
    let totalWarnings = 0;

    results.forEach((result) => {
        totalErrors += result.errorCount;
        totalWarnings += result.warningCount;
    });

    let score = 10 - (totalErrors * 0.7 + totalWarnings * 0.3);
    if(score < 0) score = 0;

    return Math.round(score * 10) / 10;
}

const analyzeCode = async (req, res) => {
    const {code} = req.body;
    
    if(!code) return res.status(400).json({message:"No code provided"});
    try {
        const linter = new eslint.ESLint();
        const results = await linter.lintText(code);
        const qualityScore = calculateScore(results);
        const newSubmission = await CodeSubmission.create({
            user: req.user_id,
            code,
            analysisResult: results,
            qualityScore,
            status: "completed"
        });

        res.status(200).json({
            message:"Code analyzed successfully",
            qualityScore,
            results
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Code analysis failed"});
    }
}

module.exports = {analyzeCode};