const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
});

module.exports = mongoose.model("customer", customerSchema);
