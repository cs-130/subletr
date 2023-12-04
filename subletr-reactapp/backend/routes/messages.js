const express = require("express");
const router = express.Router();

const MessagesController = require("../controllers/messages");
const { ensureAuth } = require("../middlewares/auth");

router.get("/:userId/get-conversations", ensureAuth, MessagesController.getConversations);

router.get("/:conversationId/get-messages", ensureAuth, MessagesController.getMessages);

router.post("/send-message", ensureAuth, MessagesController.sendMessage);

module.exports = router;
