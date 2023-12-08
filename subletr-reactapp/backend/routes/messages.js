const express = require("express");
const router = express.Router();

const MessagesController = require("../controllers/messages");
const { ensureAuth } = require("../middlewares/auth");

router.get("/:userId/get-conversations", ensureAuth, MessagesController.getConversations);

router.get("/:userId/get-messages", ensureAuth, MessagesController.getMessages);

router.post("/save-message", ensureAuth, MessagesController.saveMessage);

module.exports = router;
