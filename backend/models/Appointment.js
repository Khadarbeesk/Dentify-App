const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  age: Number,
  gender: String,
  date: Date,
  time: String,
  dentistName: String,
  clinicName: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
  type: String,
  enum: ["Booked", "Confirmed", "Completed",   "Cancelled By User",
  "Cancelled By Doctor"],
  default: "Booked"
},
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
