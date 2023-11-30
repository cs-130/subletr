const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BASE_PROMPT = "The following is a user provided description of a house or apartment. Make it more descriptive and appealing to potential subletters.\n\nDescription: ";

const chatCompletion = async (prompt) => {
    console.log("prompt", prompt);
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: BASE_PROMPT + prompt }],
      model: "gpt-3.5-turbo",
    });
    return response;
};

// Controller function to access the OpenAI API
const openaiController = async (req, res) => {
  try {
    const text = req.body.prompt;
    // console.log(req.body.prompt);

    const response = await chatCompletion(text);
    console.log(response);

    res.json(response.choices[0].message.content);
  } catch (error) {
    // console.error("Error accessing OpenAI API:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = openaiController;
