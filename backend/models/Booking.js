// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: String,
  memberId: String,
  memberName: String,
  seatType: String,
  duration: Number,
  status: String
});

module.exports = mongoose.model("Booking", bookingSchema);