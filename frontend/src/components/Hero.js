import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {

  const scrollToDoctors = () => {
    document.getElementById("doctors")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTreatments = () => {
    document.getElementById("treatments")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const slides = [
    {
      title: "Find Trusted Dentists Near You",
      desc: "Book appointments instantly with verified dentists and modern clinics.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600",
      offer: "25% OFF"
    },
    {
      title: "Professional Dental Treatments",
      desc: "Root Canal, Implants, Braces and Teeth Whitening from experts.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600",
      offer: "Starting ₹699"
    },
    {
      title: "Healthy Smile Starts Here",
      desc: "Explore treatments and consult experienced dental specialists.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600",
      offer: "Free Consultation"
    }
  ];

  return (
    <section className="relative">

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[90vh] min-h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-full overflow-hidden">

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#1e293b]/70 to-transparent" />

              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-20 flex items-center">

                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                  >

                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                      Trusted Dental Booking Platform
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-xl">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                      <button
                        onClick={scrollToDoctors}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition"
                      >
                        Book Appointment →
                      </button>

                      <button
                        onClick={scrollToTreatments}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition"
                      >
                        Explore Treatments
                      </button>

                    </div>

                    <div className="flex gap-6 mt-8 text-sm text-gray-200">
                      <span>✔ Verified Dentists</span>
                      <span>✔ Secure Payments</span>
                      <span>✔ Instant Booking</span>
                    </div>

                  </motion.div>
                                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                  >

                    {/* Floating Human Images */}

                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                      className="absolute -left-10 top-10 w-24 h-24 rounded-3xl border-4 border-white shadow-2xl z-20"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                      className="absolute -right-8 bottom-20 w-28 h-28 rounded-3xl border-4 border-white shadow-2xl z-20"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt=""
                      className="absolute right-0 top-0 w-20 h-20 rounded-3xl border-4 border-white shadow-2xl z-20"
                    />

                    {/* Main Card */}

                    <div className="bg-white rounded-[40px] p-6 shadow-2xl max-w-md ml-auto">

                      <img
                        src={slide.image}
                        alt="doctor"
                        className="rounded-3xl h-80 w-full object-cover"
                      />

                      <div className="mt-4 flex justify-between items-center">

                        <div>
                          <h3 className="font-bold text-2xl text-blue-600">
                            {slide.offer}
                          </h3>

                          <p className="text-gray-500">
                            Special Dental Offer
                          </p>
                        </div>

                        <div className="text-right">
                          <h4 className="font-bold text-xl">
                            4.8★
                          </h4>

                          <p className="text-gray-500 text-sm">
                            Patient Rating
                          </p>
                        </div>

                      </div>

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* Navigation Buttons */}

      <button className="hero-prev absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
        <FaChevronLeft />
      </button>

      <button className="hero-next absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
        <FaChevronRight />
      </button>

      {/* Stats Bar */}

      <div className="bg-white py-8 shadow-xl">

        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              500+
            </h3>
            <p>Dentists</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              50+
            </h3>
            <p>Clinics</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              10K+
            </h3>
            <p>Bookings</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              20+
            </h3>
            <p>Cities</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              4.8★
            </h3>
            <p>Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              24/7
            </h3>
            <p>Support</p>
          </div>

        </div>

      </div>

    </section>
  );
}