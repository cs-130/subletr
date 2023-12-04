const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);

const { default: mongoose } = require("mongoose");

const createWebhook = async (req, res) => {
  console.log("reached crate ");
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      config.STRIPE_WEBHOOK_SK
    );
    const data = event.data.object;
    switch (event.type) {
      case "customer.created": {
        // data.id has the customer id
        console.log("Reached webhook - created customer");
        break;
      }
      case "customer.subscription.updated": {
        break;
      }
      case "customer.subscription.deleted": {
        break;
      }
      case "invoice.paid": {
        const { renterId, ownerId, listingId, connectedAccountId } =
          data.subscription_details.metadata;
        console.log(renterId, ownerId, listingId, connectedAccountId);

        
        break;
      }
      case "test_helpers.test_clock.advancing": {
        console.log("Clock is advancing...");
        break;
      }
      case "test_helpers.test_clock.ready": {
        console.log("Clock has advanced to the specified time...");
        break;
      }
    }
    return res.sendStatus(200);
  } catch (err) {
    console.log("error in webhook:", err);
    return res.sendStatus(400);
  }
};

module.exports = { createWebhook };
