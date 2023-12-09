const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);
const { sendAwsEmail } = require("../utils/notifications");
const ActiveLeases = require("../models/ActiveLeases");
const Listing = require("../models/Listing");

const Customer = require("../models/Customer");

/**
 * Creates a webhook endpoint to process Stripe events.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
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
        console.log("invoice paid webhook entered");
        const { renterId, ownerId, listingId, connectedAccountId } =
          data.subscription_details.metadata;

        const renter = await Customer.findById(renterId).lean();
        const owner = await Customer.findById(ownerId).lean();
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

        sendAwsEmail(
          "hritik1402@g.ucla.edu",
          renter.email,
          "Subletr: You accepted a listing",
          `Dear ${renter.fullName}, <br/> <br/>
            
            You have accepted and paid for a listing of ${owner.fullName} at ${listing.address}. <br/>
            
            Congratulations! Your card will be charged ${listing.rent} USD subsequently every month.<br/><br/>
      
            Warm Regards, <br/>
            The Subletr Team <br/>
            `
        );

        sendAwsEmail(
          "hritik1402@g.ucla.edu",
          owner.email,
          "Subletr: Your listing was accepted",
          `Dear ${owner.fullName}, <br/> <br/>
            
            Your listing at ${listing.address} was accepted by ${owner.fullName}. <br/>
            
            You will receive monthly payments of ${listing.rent} USD moving forward.<br/><br/>
      
            Warm Regards, <br/>
            The Subletr Team <br/>
            `
        );

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
