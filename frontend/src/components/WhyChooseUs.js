import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Dentists",
      points: [
        "Qualified dental professionals",
        "Experience & clinic information available",
        "Trusted treatment services"
      ]
    },
    {
      title: "Easy Appointment Booking",
      points: [
        "Book appointments in minutes",
        "Real-time slot validation",
        "Simple and user-friendly process"
      ]
    },
    {
      title: "Secure Online Payments",
      points: [
        "Razorpay payment integration",
        "Safe online transactions",
        "Instant booking confirmation"
      ]
    },
    {
      title: "Patient Convenience",
      points: [
        "Search dentists easily",
        "Manage appointments anytime",
        "Responsive mobile-friendly platform"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-20">

      <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Why Choose Dentify
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200"
            alt="Dentist"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT FEATURES */}
        <div className="grid md:grid-cols-2 gap-6">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                {item.title}
              </h3>

              <ul className="space-y-2 text-gray-600">
                {item.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}