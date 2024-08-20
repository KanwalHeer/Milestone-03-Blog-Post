import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  heading: string;
  text: string;
  postId: number;
  image?: string; // Image is optional
}

const Card: React.FC<CardProps> = ({ heading, text, postId, image }) => {
  return (
    <div className="bg-[#f8f5f4] text-gray-700 p-6 border border-[#f8f5f4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {image && (
        <div className="mb-4 flex-shrink-0">
          <Image
            src={image}
            alt={heading} // Use heading or a meaningful alt text
            width={400} // Adjust width as needed
            height={250} // Adjust height as needed
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-400 mb-4">{text}</p>
      </div>
      <div className="mt-auto">
        <Link
          href={`/blogs/${postId}`} // Link to the dynamic blog post
          className="block bg-[#270d0d]/100 text-white text-center py-2 px-4 rounded-lg hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors"
        >
          Read Post
        </Link>
      </div>
    </div>
  );
};

export default Card;
