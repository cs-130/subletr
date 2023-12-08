const Customer = require("../models/Customer");
const Message = require("../models/Message");

/**
 * Retrieves all conversations for a particular user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getConversations = async (req, res) => {
  try {
    console.log("entered get conversations");
    const allMessagesIds = await Message.find({$or: [{from: req.params.userId}, {to: req.params.userId}]}, {from: 1, to: 1}).lean();
    const allConversations = new Set();
    for (let i = 0; i < Object.keys(allMessagesIds).length; i++) {
      if (allMessagesIds[i].from !== req.params.userId) {
        allConversations.add(allMessagesIds[i].from);
      }
      if (allMessagesIds[i].to !== req.params.userId) {
        allConversations.add(allMessagesIds[i].to);
      }
    }
    return res.json(allConversations);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching conversations: ${err}` });
  }
};

/**
 * Retrieves all messages for a particular user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getMessages = async (req, res) => {
    try {
      console.log("entered get messages");
      const allMessages = await Message.find({$or: [{from: req.params.userId}, {to: req.params.userId}]}).lean();
      return res.json(allMessages);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in fetching all messages: ${err}` });
    }
  };
  
  /**
 * Saves a message for a particular conversation.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
  const saveMessage = async (req, res) => {
    try {
      console.log("entered save message", req.body);
      let newMessage = new Message({
        text: req.body.text,
        from: req.body.from,
        to: req.body.to,
        time: req.body.time
      })
      await newMessage.save();
      return res.json({ message: "success" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in saving message: ${err}` });
    }
  };
  
  module.exports = { saveMessage, getConversations, getMessages };