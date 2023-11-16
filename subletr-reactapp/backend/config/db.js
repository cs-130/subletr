const mongoose = require("mongoose");
const variables = require("./variables");

// Connect to MongoDB
const ConnectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(variables.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB is connected"))
    .catch((err) => console.error(err));
};

module.exports = ConnectToMongo;
