const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: { type: String, default: "" },
  from: { type: String, default: "" },
  to: { type: String, default: "" },
  time: { type: Date, default: Date() },
});

module.exports = mongoose.model("message", messageSchema);