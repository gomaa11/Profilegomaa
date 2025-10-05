"use client";
import { useState } from "react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    src: "/images/projects/cert1.png",
    alt: "Certificate 1",
    title: "Certificate in Web Development Training from Cambridge College, UK",
    issuer: "Cambridge",
    year: "2023",
  },
  {
    id: 2,
    src: "/images/projects/cert2.jpg",
    alt: "Certificate 2",
    title:
      "Certified by the Arab International Academy and the International Council",
    issuer: "Arab International",
    year: "2023",
  },
  {
    id: 3,
    src: "/images/projects/cert3.png",
    alt: "Certificate 3",
    title: "CS50 Certificate from Harvard University",
    issuer: "Cambridge",
    year: "2023",
  },
  {
    id: 4,
    src: "/images/projects/cert4.jpg",
    alt: "Certificate 4",
    title: "Python Institute Certificate in Learning and Development",
    issuer: "Python",
    year: "2024",
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificate" className="py-12 px-6">
      <h2 className="py-3 sm:border rounded-md sm:border-[#33353F] text-3xl font-bold text-center mb-8">
        My certificates📜
      </h2>

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
          >
            {/* صورة الشهادة */}
            <Image
              src={cert.src}
              alt={cert.alt}
              width={500}
              height={350}
              className="object-cover w-full h-48"
            />

            {/* بيانات تحت الصورة */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-400">{cert.year}</p>
            </div>

            {/* زرار يظهر عند hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#b388f8] via-[#e649b5] to-[#e81b62] h-16 flex justify-center items-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
              <button
                onClick={() => setSelectedCert(cert)}
                className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition"
              >
                عرض الشهادة
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* النافذة (Modal) */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-2xl relative">
            {/* زر إغلاق */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              ×
            </button>

            {/* صورة الشهادة داخل المودال */}
            <Image
              src={selectedCert.src}
              alt={selectedCert.alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-md"
            />

            {/* بيانات الشهادة */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{selectedCert.title}</h3>
              <p className="text-gray-500">{selectedCert.issuer}</p>
              <p className="text-gray-400 text-sm">{selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
