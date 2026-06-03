import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaCreditCard,
  FaUserMd,
  FaCheckCircle
} from "react-icons/fa";

export default function ExperienceSection() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Find a Dentist",
      desc: "Browse verified dentists based on experience, clinic and location."
    },
    {
      icon: <FaCalendarCheck />,
      title: "Choose a Slot",
      desc: "Select your preferred date and appointment time."
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payment",
      desc: "Pay safely using Razorpay and receive instant confirmation."
    },
    {
      icon: <FaUserMd />,
      title: "Get Treatment",
      desc: "Visit the clinic and receive professional dental care."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-20">

      {/* HOW IT WORKS */}
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
          Simple Process
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
          How Dentify Works
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Book your dental appointment in just a few simple steps.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-28">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative text-center"
          >

            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-xl">
              {step.icon}
            </div>

            <div className="absolute top-10 left-full w-full hidden md:block">
              {index !== 3 && (
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              )}
            </div>

            <h3 className="font-bold text-xl mt-6 text-gray-900">
              {step.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {step.desc}
            </p>

          </motion.div>
        ))}

      </div>

      {/* TRUST SECTION */}

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
            alt="Dental Care"
            className="rounded-[32px] shadow-2xl w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
            Trusted By Patients
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Trusted Dental Care Across India
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Dentify connects patients with experienced dentists and makes appointment booking fast, secure and hassle-free.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Verified and experienced dentists",
              "Real-time appointment booking",
              "Secure online payments",
              "Fast and user-friendly platform"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <span>{item}</span>
              </div>
            ))}

          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600">
                500+
              </h3>
              <p className="text-gray-500">
                Appointments Booked
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-4xl font-bold text-indigo-600">
                50+
              </h3>
              <p className="text-gray-500">
                Verified Dentists
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-4xl font-bold text-purple-600">
                4.9★
              </h3>
              <p className="text-gray-500">
                Patient Rating
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-4xl font-bold text-green-600">
                100%
              </h3>
              <p className="text-gray-500">
                Secure Payments
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}