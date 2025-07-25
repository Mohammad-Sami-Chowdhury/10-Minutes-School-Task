import React from "react";
import Logo from "../assets/logo.png";

interface NavbarProps {
  language: "en" | "bn";
  setLanguage: (lang: "en" | "bn") => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center max-w-[1320px] mx-auto">
      <img className="w-[100px]" src={Logo} alt="Logo" />
      <div className="flex space-x-2">
        <button
          onClick={() => setLanguage("bn")}
          className={`px-4 py-1 rounded-md text-sm font-semibold ${
            language === "bn"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          BN
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-1 rounded-md text-sm font-semibold ${
            language === "en"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
