const mongoose = require("mongoose");

const activeLeasesSchema = new mongoose.Schema({
  renterId: { type: String, default: "" },
  ownerId: { type: String, default: "" },
  listingId: { type: String, default: "" },
  startDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("activeLeases", activeLeasesSchema);
