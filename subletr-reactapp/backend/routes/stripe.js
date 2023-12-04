const express = require("express");
const router = express.Router();
const StripeController = require("../controllers/stripe");

const { ensureAuth } = require("../middlewares/auth");

router.post(
  "/create-rent-subscription",
  StripeController.createRentSubscription
);

module.exports = router;
