const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  MONGO_URI: process.env.MONGO_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  BACKEND_PORT: process.env.BACKEND_PORT,
  SESSION_DURATION: 1000,
};

module.exports = config;
