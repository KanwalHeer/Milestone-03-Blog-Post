import React from "react";
import Card from "./blogcard/page";
import blogPosts from "../_lib/data";
import Image from "next/image";

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative overflow-hidden h-[50vh] flex items-center justify-center text-center"
      >
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
        <div
          className="relative z-10 p-4"
          style={{
            background: "rgba(0, 0, 0, 0.4)", // Optional: semi-transparent background to enhance text readability
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-white text-lg md:text-xl">
            Discover insightful articles, tutorials, and updates on various
            topics. Stay tuned for the latest trends and tips.
          </p>
        </div>
      </div>


      {/* Blogs Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              heading={post.title}
              text={post.content.substring(0, 100) + "..."} // Display first 100 characters
              postId={post.id} // Pass postId here
              image={post.image} // Pass image URL here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
