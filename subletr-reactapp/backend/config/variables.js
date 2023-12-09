const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const CLIENT_URL =
  process.env.SERVER_ENV == "production"
    ? "https://subletr.vercel.app"
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
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SK: process.env.STRIPE_WEBHOOK_SK,
  STRIPE_CONNECTED_ACCOUNT_ID: process.env.STRIPE_CONNECTED_ACCOUNT_ID,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
};

module.exports = config;
