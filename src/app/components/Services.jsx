"use client";
import React, { useState } from "react";

const servicesList = [
  {
    title: "Free code and hosting",
    image: "/images/projects/im1.jpg",
    description:
      "Free hosting and setup for your code projects with full support.",
  },
  {
    title: "Artificial intelligence applications",
    image: "/images/projects/im2.jpg",
    description: "We build intelligent apps powered by machine learning.",
  },
  {
    title: "WordPress sites",
    image: "/images/projects/im3.jpg",
    description: "Professional WordPress websites for any business purpose.",
  },
  {
    title: "Building stores",
    image: "/images/projects/im4.jpg",
    description: "Custom-built eCommerce stores with payment integration.",
  },
  {
    title: "Building desktop software",
    image: "/images/projects/im5.jpg",
    description: "Fast, reliable desktop applications tailored to your needs.",
  },
  {
    title: "Building Android Applications",
    image: "/images/projects/im6.png",
    description: "Modern Android apps with clean UI and efficient backend.",
  },
  {
    title: "Improve website speed",
    image: "/images/projects/im7.png",
    description: "Boost your website performance and load times.",
  },
  {
    title: "Ethical hacking",
    image: "/images/projects/im8.jpg",
    description: "Professional penetration testing and security improvements.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div
      id="services"
      className="py-12 px-4 xl:px-16 sm:border rounded-md sm:border-[#33353F] "
    >
      <h2 className="py-3 sm:border rounded-md sm:border-[#33353F] text-3xl font-bold text-center mb-8">
        My services 💼
      </h2>

      {/* الشبكة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="relative h-52 rounded-lg overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 ease-in-out"></div>

            {/* العنوان */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg text-center px-2 transition-transform duration-500 group-hover:translate-y-[-10px]">
              {service.title}
            </h3>

            {/* الأزرار */}
            <div className="bg-[#0b0b0bad] flex flex-col items-center justify-end gap-2 h-[8.25rem] absolute bottom-0 left-0 right-0 pb-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <button
                onClick={() =>
                  window.open("https://wa.me/201024754252", "_blank")
                }
                className="w-[85%] py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white"
              >
                Service request
              </button>
              <button
                onClick={() => setSelectedService(service)}
                className="w-[85%] py-3 rounded-full bg-gradient-to-br from-[#b388f8] via-[#e649b5] to-[#e81b62] hover:opacity-90 text-white transition"
              >
                More 🔍
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* النافذة (Modal) */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#1f1f1f] rounded-lg p-6 max-w-md w-[90%] sm:w-full text-center shadow-lg relative animate-fadeIn">
            <button
              className="absolute top-2 right-3 text-white text-xl hover:text-red-400 transition"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-gray-300">{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
