const router = require("express").Router();
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const admin = require("../middleware/admin"); // ✅ ADD THIS

// ==============================
// CREATE
// ==============================
router.post("/", auth, async (req, res) => {
  try {
    const { date, time, dentistName } = req.body;

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const exists = await Appointment.findOne({
      dentistName,
      date: selectedDate,
      time
    });

    if (exists) {
      return res.status(400).json({ msg: "Slot already booked ❌" });
    }

    const newAppointment = new Appointment({
      ...req.body,
      date: selectedDate,
      userId: req.user.id
    });

    await newAppointment.save();

    res.json({ msg: "Appointment booked successfully ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ==============================
// USER BOOKINGS
// ==============================
router.get("/my", auth, async (req, res) => {
  try {
    

    const data = await Appointment.find({
      userId: new mongoose.Types.ObjectId(req.user.id)
    });

    

    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ==============================
// DOCTOR BOOKINGS
// ==============================
router.get("/doctor", auth, async (req, res) => {
  try {
    const data = await Appointment.find({
      dentistName: req.user.name
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching doctor appointments" });
  }
});

router.get("/slots", async (req, res) => {
  try {
    const { dentistName, date } = req.query;

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const appointments = await Appointment.find({
      dentistName,
      date: selectedDate
    });

    res.json(appointments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.get("/", auth, admin, async (req, res) => {
  try {
    const data = await Appointment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching all appointments" });
  }
});
router.put("/cancel/:id", auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        msg: "Appointment not found"
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentDate = new Date(appointment.date);
    appointmentDate.setHours(0, 0, 0, 0);

    if (today >= appointmentDate) {
      return res.status(400).json({
        msg: "Cannot cancel on appointment date"
      });
    }

    appointment.status = "Cancelled By User";

    await appointment.save();

    res.json({
      msg: "Appointment Cancelled"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server Error"
    });
  }
});
router.put("/doctor/:id/status", auth, async (req, res) => {
  try {

    if (req.user.role !== "doctor") {
      return res.status(403).json({
        msg: "Access Denied"
      });
    }

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        msg: "Appointment not found"
      });
    }

    if (
      appointment.status === "Cancelled By User" ||
      appointment.status === "Cancelled By Doctor"
    ) {
      return res.status(400).json({
        msg: "Cancelled appointments cannot be modified"
      });
    }

    appointment.status = req.body.status;

    await appointment.save();

    res.json({
      msg: "Status Updated"
    });

  } catch (err) {
    res.status(500).json({
      msg: "Server Error"
    });
  }
});

module.exports = router;