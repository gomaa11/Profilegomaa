"use client";
import React, { useState } from "react";
import * as Icons from "lucide-react";

const RatingCard = () => {
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#1f1f1f] rounded-xl p-6 sm:p-8 shadow-lg border border-[#33353F] max-w-3xl mx-auto mt-12">
      {/* الجزء الشمال (النص والتقييم) */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Your Rating</h2>
        <p className="text-gray-400 mb-4">Click the stars to rate</p>

        {/* النجوم */}
        <div className="flex justify-center sm:justify-start gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icons.Star
              key={star}
              size={36}
              color={(hovered || rating) >= star ? "#facc15" : "#6b7280"}
              fill={(hovered || rating) >= star ? "#facc15" : "none"}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <p className="text-gray-500 italic">Rated {rating}.0 / 5 ⭐⭐⭐⭐⭐</p>
      </div>

      {/* الجزء اليمين (الصورة) */}
      <div className="mt-6 sm:mt-0 sm:ml-8">
        <img
          src="/images/certificate2.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-[#b388f8]"
        />
      </div>
    </div>
  );
};

export default RatingCard;
