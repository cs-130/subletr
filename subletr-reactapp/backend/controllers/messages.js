const Customer = require("../models/Customer");
const Messages = require("../models/Messages");

/**
 * Retrieves all conversations for a particular user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getConversations = async (req, res) => {
  try {
    console.log("entered get all messages");
    const allConversations = await Customer.find({userId: req.params.userId}).lean();
    return res.json(allConversations);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching all messages: ${err}` });
  }
};

/**
 * Retrieves all messages for a particular conversation.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getMessages = async (req, res) => {
    try {
      console.log("entered get all messages");
      const allMessages = await Messages.find({conversationId: req.params.conversationId}).lean();
      return res.json(allMessages);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in fetching all messages: ${err}` });
    }
  };
  
  /**
 * Sends a message for a particular conversation.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
  const sendMessage = async (req, res) => {
    try {
      console.log("entered send message", req.body);
      let newMessage = new Message({
        text: req.body.text,
        conversationId: req.body.conversationId,
        name: req.body.name,
        time: req.body.time
      })
      await newMessage.save();
      return res.json({ message: "success" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in sending message: ${err}` });
    }
  };
  
  module.exports = { getMessages, getConversations, sendMessage };