const config = require("../config/variables");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);

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
    }
    return res.sendStatus(200);
  } catch (err) {}
};
