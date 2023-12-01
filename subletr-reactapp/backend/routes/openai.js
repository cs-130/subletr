const express = require("express");
const openaiController = require("../controllers/openai");

const router = express.Router();

// Route to access the OpenAI API
router.post("/generate", openaiController);

// // POST request endpoint
// router.post("/ask", async (req, res) => {
//   // getting prompt question from request
//   const prompt = req.body.prompt;

//   try {
//     if (prompt == null) {
//       throw new Error("Uh oh, no prompt was provided");
//     }
//     // return the result
//     return res.status(200).json({
//       success: true,
//       message: prompt,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

module.exports = router;
