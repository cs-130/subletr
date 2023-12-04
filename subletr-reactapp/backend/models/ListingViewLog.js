const mongoose = require("mongoose");

const viewLogSchema = new mongoose.Schema({
  listingId: { type: String, default: "" },
  userId: { type: String, default: "" },
  viewedDate: {type: Date, default: ""}
});

module.exports = mongoose.model("listingViewLog", viewLogSchema);
