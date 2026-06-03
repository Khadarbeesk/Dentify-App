import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-24"
    >
      {/* TOP STATS */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-400 mt-1">Appointments</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-400">50+</h3>
            <p className="text-gray-400 mt-1">Dentists</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">4.9★</h3>
            <p className="text-gray-400 mt-1">Patient Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-400">100%</h3>
            <p className="text-gray-400 mt-1">Secure Payments</p>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-blue-400">Dent</span>
              <span className="text-indigo-400">ify</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Simplifying dental healthcare with smart appointment booking,
              verified dentists, secure payments, and a seamless experience.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 transition flex items-center justify-center">
                <FaFacebookF />
              </button>

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center">
                <FaInstagram />
              </button>

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 transition flex items-center justify-center">
                <FaTwitter />
              </button>

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 transition flex items-center justify-center">
                <FaLinkedinIn />
              </button>

            </div>

          </div>

          {/* CENTER */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    })
                  }
                  className="hover:text-blue-400 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("doctors")?.scrollIntoView({
                      behavior: "smooth"
                    })
                  }
                  className="hover:text-blue-400 transition"
                >
                  Find Dentists
                </button>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-400 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-blue-400 transition"
                >
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Bangalore, India</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-blue-400" />
                <span>support@dentify.com</span>
              </div>

            </div>

            {/* NEWSLETTER */}
          
              </div>

            </div>

          </div>

       

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 Dentify. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
}