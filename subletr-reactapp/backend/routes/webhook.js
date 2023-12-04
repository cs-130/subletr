const express = require("express");
const router = express.Router();

const WebhookController = require("../controllers/webhook");
const { ensureAuth } = require("../middlewares/auth");

router.post("/", WebhookController.createWebhook);

module.exports = router;
