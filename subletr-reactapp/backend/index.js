const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
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
  bodyParser.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      // Can change to:
      // if (req.originalUrl === "/webhook")
      req.rawBody = buf;
    },
  })
);

app.use(
  cors({
    // Replace with the frontend port and put that in the .env file.
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json({limit: '10mb'}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 }));
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
app.use("/openai", require("./routes/openai.js"));
app.use("/listings", require("./routes/listings"));
app.use("/stripe", require("./routes/stripe"));
app.use("/webhook", require("./routes/webhook"));

app.listen(variables.BACKEND_PORT, () => {
  console.log(`Server is running on port ${variables.BACKEND_PORT}`);
});
