import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";


export default function DentistCard({ dentist, onBook }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    const token = localStorage.getItem("token");

    if (!token || token === "null" || token === "undefined") {
      alert("Please login to book appointment");
      navigate("/login");
      return;
    }

    onBook(dentist);
  };

  const expertise = [
    "Root Canal",
    "Whitening",
    "Cleaning",
    "Smile Design"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl border border-blue-100"
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <img
          src={dentist.image}
          alt={dentist.name}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* EXPERIENCE */}

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-2xl shadow-lg">
          <p className="text-xs text-gray-500">
            Experience
          </p>

          <h3 className="font-bold text-blue-600">
            {dentist.experience}+ Years
          </h3>
        </div>

        {/* CLINIC */}

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium">
          {dentist.clinicName}
        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {dentist.name}
            </h2>

            <p className="text-blue-600 font-medium mt-1">
              {dentist.qualification}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">
              4.9
            </span>
          </div>

        </div>

        {/* LOCATION */}

        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <FaMapMarkerAlt />
          <span>{dentist.location}</span>
        </div>

        {/* EXPERTISE TAGS */}

        <div className="flex flex-wrap gap-2 mt-5">

          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              <FaCheckCircle className="text-xs" />
              {item}
            </div>
          ))}

        </div>

        {/* CTA */}

        <button
          onClick={handleBooking}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          Book Appointment →
        </button>

      </div>
    </motion.div>
  );
}