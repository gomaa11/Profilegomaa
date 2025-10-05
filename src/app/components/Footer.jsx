import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>© 2025 All rights reserved.Eng: Gomaa</span>
        <div className="mt-[2rem] sm:mt-0 sm:ml-8">
          <img
            src="/images/certificate2.png"
            alt="Profile"
            className="w-[4rem] h-[4rem] rounded-full object-cover border-4 border-[#b388f8]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
