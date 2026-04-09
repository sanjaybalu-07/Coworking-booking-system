// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/coworking")
  .then(() => console.log("DB Connected"));

app.use("/api/bookings", require("./routes/bookingRoutes"));

app.listen(5000, () => console.log("Server running"));