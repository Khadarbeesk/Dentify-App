import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HealthCarousel() {
  const data = [
    {
      title: "Teeth Cleaning",
      price: 699,
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"
    },
    {
      title: "Root Canal",
      price: 2499,
      img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800"
    },
    {
      title: "Teeth Whitening",
      price: 1499,
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
    },
    {
      title: "Dental Implant",
      price: 4999,
      img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800"
    },
    {
      title: "Braces Treatment",
      price: 3999,
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800"
    },
    {
      title: "Tooth Extraction",
      price: 999,
      img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800"
    }
  ];

  const scrollToDoctors = () => {
    document.getElementById("doctors")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-gradient-to-b from-white to-blue-50">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Dental Treatments
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Professional dental care for a healthier smile
        </p>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        className="pb-12"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="group relative h-72 md:h-60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                  Starting ₹{item.price}
                </span>

                <h3 className="text-xl md:text-lg font-bold mt-3">
                  {item.title}
                </h3>

                <button
                  onClick={scrollToDoctors}
                  className="mt-3 text-blue-300 hover:text-white font-medium transition"
                >
                  Explore Dentists →
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}