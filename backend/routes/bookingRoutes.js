// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// SEARCH
router.post("/search", async (req, res) => {
  const { bookingId, memberId } = req.body;

  if (!bookingId || !memberId) {
    return res.status(400).json({ message: "Enter both fields" });
  }

  const data = await Booking.findOne({ bookingId, memberId });

  if (!data) {
    return res.status(404).json({ message: "Record not found" });
  }

  res.json(data);
});

// UPDATE
router.put("/update", async (req, res) => {
  const { bookingId, memberId, seatType, duration } = req.body;

  const data = await Booking.findOne({ bookingId, memberId });

  if (!data) {
    return res.status(404).json({ message: "Record not found" });
  }

  // ❗ BUSINESS RULE
  if (data.status === "checked-in") {
    return res.status(400).json({
      message: "Cannot update after check-in"
    });
  }

  if (seatType) data.seatType = seatType;
  if (duration) data.duration = duration;

  await data.save();

  res.json({ message: "Updated successfully" });
});

module.exports = router;