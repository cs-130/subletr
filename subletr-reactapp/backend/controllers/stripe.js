const Customer = require("../models/Customer");
const Listing = require("../models/Listing");
const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);

// accepts listingId as req.body.listingId
const createRentSubscription = async (req, res) => {
  try {
    const connectedAccountId = config.STRIPE_CONNECTED_ACCOUNT_ID;
    const customer = await Customer.findById(req.customer._id);
    const listing = await Listing.findById(req.body.listingId);
    const owner = await Customer.findById(listing.userId);

    let stripeCustomer;
    if (!customer.stripeCustomerId || customer.stripeCustomerId === "") {
      stripeCustomer = await stripe.customers.create({
        email: customer.email,
        description: customer.fullName,
      });
      customer.stripeCustomerId = stripeCustomer.id;
      await customer.save();
    } else {
      stripeCustomer = await stripe.customers.retrieve(
        customer.stripeCustomerId
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: stripeCustomer.id,
      line_items: [
        {
          price_data: {
            currency: "USD",
            unit_amount: listing.rent * 100,
            recurring: {
              interval: "month",
            },
            product_data: {
              name: listing.address,
              description: `Upon completion of the checkout process, a monthly charge of $${listing.rent} USD will be applied for the duration of your subleasing agreement. This agreement is made with the owner, ${owner.fullName}, and pertains to the property located at ${listing.address}. For any inquiries or communication needs, please contact the owner at ${listing.phoneNumber}. It is important to note that this financial commitment extends through the entirety of the subscription cycle. Should there be any payment failures, additional charges will be incurred. The monthly payment must be made consistently each month for the entire term of the sublease.`,
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        application_fee_percent: 0,
        transfer_data: {
          destination: connectedAccountId,
        },
        metadata: {
          connectedAccountId: connectedAccountId,
          // pass any listing information needed
        },
      },
      success_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/`,
    });

    return res.json({ url: session.url });
  } catch (err) {
    return res.status(500).json({
      message: "Error in creating a rent subscription in stripe: ",
      err,
    });
  }
};

module.exports = { createRentSubscription };
