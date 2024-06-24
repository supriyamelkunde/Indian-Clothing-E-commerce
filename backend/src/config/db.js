const mongoose = require("mongoose");

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'

const mongoDbUrl =
  "mongodb+srv://yogeshoza33333:xgMYHTyzNEggqxYC@cluster0.pwjc7nq.mongodb.net/yogeshecommarce?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  console.log("connecting to MongoDB");
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
