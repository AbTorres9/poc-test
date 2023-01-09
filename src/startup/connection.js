exports.init = () => {
  const dotenv = require("dotenv");
  const mongoose = require("mongoose");
  console.log("Trying for DB connection ...");
  let mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    authSource: "admin",
    dbName: "shippigo_test",
    autoIndex: false,
  };
  let dbLink = process.env.MONGO;
  mongoose
    .connect(dbLink, mongoOptions)
    .then(console.log("DB connected successfully"))
    .catch((err) => {
      console.log("DB connection failed", err);
    });

  mongoose.connection.once("open", function (ref) {
    console.log(new Date(), __filename, "open connection to mongo server.");
  });

  mongoose.connection.on("connected", function (ref) {
    console.log(new Date(), __filename, "connected to mongo server.");
  });
};
