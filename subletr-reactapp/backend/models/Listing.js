const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  address: { type: String, default: "" },
  letterId: { type: String, default: "" },
  rent: { type: Number, default: 0 },
  currentOccupancy: { type: Number, default: 0 },
  listingType: { type: String, default: "Shared Accomodation" },
  listingPictures: { type: Array, default: [] },
});

module.exports = mongoose.model("listing", listingSchema);
