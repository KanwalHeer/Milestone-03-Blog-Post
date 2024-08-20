import React from "react";
import Card from "./blogcard/page";
import blogPosts from "../_lib/data";

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: "url(/bgimage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>Welcome to Our Blog</h1>
        <p>
          Discover insightful articles, tutorials, and updates on various
          topics. Stay tuned for the latest trends and tips.
        </p>
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
