"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4   bg-[#6d3535]/40 bg-opacity-90 text-white shadow-xl sticky top-0 z-50 max-w-full overflow-x-hidden">
      {/* Website Name / Logo */}
      <div className="text-[#270d0d]/100 text-xl font-extrabold hover:text-white border-b-2 border-transparent hover:border-white px-6 py-2 transition duration-300 ease-in-out  flex items-center">
        <Link href="/">KH</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link
          href="/blogs"
          className="text-md font-bold text-[#270d0d]/100 hover:text-white border-b-2 border-transparent hover:border-white px-6 py-2 transition duration-300 ease-in-out"
        >
          Blogs
        </Link>

        <Link
          href="/blogs/about"
          className="text-md font-bold text-[#270d0d]/100 hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out"
        >
          About
        </Link>

        <Link
          href="/blogs/contact"
          className="text-md font-bold text-[#270d0d]/100 hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu (Hidden on Larger Screens) */}
      <div
        className={`fixed inset-0 bg-[#6d3535]/80 bg-opacity-90 z-50 p-4 flex flex-col space-y-4 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-3xl self-end mb-4 bg-gray-900 p-2 rounded-full"
        >
          <FaTimes />
        </button>
        <Link
          href="/blogs/"
          className="text-white hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          Blogs
        </Link>

        <Link
          href="/about"
          className="text-white hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          About
        </Link>

        <Link
          href="/blogs/contact"
          className="text-white hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
