const Customer = require("../models/Customer");
const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);

const createRentSubscription = async (req, res) => {
  try {
    const connectedAccountId = config.STRIPE_CONNECTED_ACCOUNT_ID;
    const customer = await Customer.findById(req.customer._id);
    // TODO: retrieve listings

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
            unit_amount: 5000,
            recurring: {
              interval: "month",
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
