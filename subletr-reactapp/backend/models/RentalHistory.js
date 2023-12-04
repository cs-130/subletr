const mongoose = require("mongoose");

const rentalHistorySchema = new mongoose.Schema({
  listingId: { type: String, default: "" },
  hostId: { type: String, default: "" },
  customerId: { type: String, default: "" },
  price: { type: Number, default: 1000 },
});

module.exports = mongoose.model("rentalHistory", rentalHistorySchema);
