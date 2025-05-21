const express = require("express");
const {analyzeCode} = require("../controllers/codeController");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/analyze", protect, analyzeCode);

module.exports = router;