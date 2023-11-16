const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const CLIENT_URL =
  process.env.NODE_ENV == "production"
    ? process.env.REACT_APP_CLIENT_URL
    : "http://localhost:3000";
const config = {
  CLIENT_URL: CLIENT_URL,
  MONGO_URI: process.env.MONGO_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  BACKEND_PORT: process.env.BACKEND_PORT,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_OAUTH_API_KEY: process.env.GOOGLE_OAUTH_API_KEY,
  SESSION_DURATION: process.env.SESSION_DURATION,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;
