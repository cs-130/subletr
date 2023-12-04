const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);
const ActiveLeases = require("../models/ActiveLeases");
const Listing = require("../models/Listing");

const { default: mongoose } = require("mongoose");

const createWebhook = async (req, res) => {
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

        const listing = await Listing.findById(listingId);
        listing.isAvailable = false;
        await listing.save();

        const newLease = new ActiveLeases({
          renterId: renterId,
          ownerId: ownerId,
          listingId: listingId,
          startDate: new Date(),
        });
        await newLease.save();

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
