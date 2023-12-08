const express = require("express");
const openaiController = require("../controllers/openai");

const router = express.Router();

// Route to access the OpenAI API
router.post("/generate", openaiController);

module.exports = router;
