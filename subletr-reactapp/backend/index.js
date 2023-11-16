const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);

// Configurations
const variables = require("./config/variables");
const ConnectToMongo = require("./config/db");
const { application } = require("express");

const app = express();
dotenv.config();

require("./config/passport")(passport);

app.use(
  cors({
    // Replace with the frontend port and put that in the .env file.
    origin: ["https://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

ConnectToMongo();

app.use(
  session({
    secret: variables.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      httpOnly: true,
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth.js"));

app.listen(variables.BACKEND_PORT, () => {
  console.log(`Server is running on port ${variables.BACKEND_PORT}`);
});
