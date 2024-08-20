import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import {  FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social media icons

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bgImage.png" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-100" // Adjust the opacity here
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main Heading */}
        <h1
          className={`text-lg text-gray-300 font-bold mb-8 mt-8 text-center sm:text-xg md:text-5xl ${styles.typewriter}`}
        >
          Discover the Latest in Tech
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl text-gray-200 font-semibold mb-2 text-center sm:text-3xl md:text-2xl">
          Stay Ahead with Cutting-Edge Insights
        </h2>

        {/* Text */}
        <p className="text-sm  text-gray-300 mb-6 mt-2 text-center max-w-lg sm:text-md md:text-md">
          Explore our latest blog posts, dive into technology trends, and read
          expert opinions on the most exciting advancements in the tech world.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <FaTwitter className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/blogs"
          className="mt-4 px-6 py-2 text-sm text-gray-300  bg-[#310909] rounded-xl hover:bg-[#6d3535]/10 transition duration-300 text-center font-bold"
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
}
