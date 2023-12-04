const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  text: { type: Array, default: [] },
  conversationId: { type: String, default: "" },
  name: { type: String, default: 0 },
  time: { type: Date, default: Date() },
});

module.exports = mongoose.model("messages", listingSchema);