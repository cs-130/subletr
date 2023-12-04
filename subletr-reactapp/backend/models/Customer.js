const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  provider: { type: String },
  profilePicture: { type: String, default: "" },
  stripeCustomerId: { type: String, default: "" },
  conversationIds: { type: Array, default: [] }
});

module.exports = mongoose.model("customer", customerSchema);
