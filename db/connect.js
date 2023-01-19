const mongoose = require("mongoose");

// uri="mongodb+srv://Gautam:gautam@cluster0.rmcyodn.mongodb.net/Cluster0?retryWrites=true&w=majority"

// const dotenv=require("dotenv");
// dotenv.config(options:{path:""})
const connectDB = (uri) => {
  console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
