const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ FIRST CREATE APP

const Dentist = require("./models/Dentist");

// MIDDLEWARE
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(express.json());
app.use("/api/payment", require("./routes/paymentRoutes"));

// ROUTES (AFTER app created)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/dentists", require("./routes/dentistRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

// ✅ CONNECT DB
mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log("DB Connected");

  const count = await Dentist.countDocuments();

    await Dentist.insertMany([
  {
    name: "Dr. Rahul Sharma",
    qualification: "BDS, MDS",
    experience: 8,
    clinicName: "Apollo Dental Clinic",
    address: "Jubilee Hills",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
  },
  {
    name: "Dr. Priya Reddy",
    qualification: "MDS Orthodontist",
    experience: 10,
    clinicName: "Clove Dental",
    address: "Banjara Hills",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
  },
  {
    name: "Dr. Arjun Mehta",
    qualification: "BDS",
    experience: 6,
    clinicName: "Partha Dental",
    address: "Madhapur",
    location: "Hyderabad",
    image:  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800"
  },
  {
    name: "Dr. Sneha Kapoor",
    qualification: "MDS Prosthodontist",
    experience: 12,
    clinicName: "KIMS Dental Center",
    address: "Secunderabad",
    location: "Hyderabad",
    image:  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800"
  },
  {
    name: "Dr. Kiran Kumar",
    qualification: "BDS",
    experience: 9,
    clinicName: "Yashoda Dental Care",
    address: "Gachibowli",
    location: "Hyderabad",
    image:  "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800"
  },
  {
    name: "Dr. Neha Sharma",
    qualification: "MDS Endodontist",
    experience: 11,
    clinicName: "Aster Dental Clinic",
    address: "Whitefield",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800"
  },
  {
    name: "Dr. Rohit Verma",
    qualification: "BDS",
    experience: 7,
    clinicName: "MediCover Dental",
    address: "Hitech City",
    location: "Hyderabad",
    image:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800"
  },
  {
    name: "Dr. Ayesha Khan",
    qualification: "MDS Oral Surgeon",
    experience: 14,
    clinicName: "Continental Dental Care",
    address: "Financial District",
    location: "Hyderabad",
    image:  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
  },
  {
    name: "Dr. Vikram Singh",
    qualification: "BDS, MDS",
    experience: 13,
    clinicName: "Rainbow Dental Hospital",
    address: "Kondapur",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  }
]);
  

    console.log("✅ 9 Doctors Inserted");
  }

)
.catch(err => console.log(err));

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});