require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

mongoose.set('strictQuery',false);
// mongoose.set('strictQuery',true);
// app.get("/", (req, res) => {
//   res.send("Hi, I am live ");
// });

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    // console.log();
    console.log(error);
  }
};

start();
