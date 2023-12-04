const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  address: { type: String, default: "" },
  rent: { type: Number, default: 0 },
  availSpots: { type: Number, default: 0 },
  listingType: { type: String, default: "Shared Accomodation" },
  listingPictures: { type: Array, default: [] },
  userId: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  amenities: { type: Array, default: [] },
  bio: { type: String, default: [] },
  description: { type: String, default: "" },
  startDate: { type: Date, default: "" },
  endDate: { type: Date, default: "" },
  userId: { type: String, default: "" },
  // false for when someone has leased this place.
  // true for when the property is available for subleasing
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("listing", listingSchema);
