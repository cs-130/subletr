const express = require("express");
const router = express.Router();

const MessagesController = require("../controllers/messages");
const { ensureAuth } = require("../middlewares/auth");

router.get("/get-messages", ensureAuth, MessagesController.getMessage);

router.post("/send-message", ensureAuth, MessagesController.sendMessage);

module.exports = router;
