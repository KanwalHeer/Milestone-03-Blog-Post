"use client";
import React from "react";
import blogPosts from "@/app/_lib/data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function BlogDetails({ params }: { params: { blogid: string } }) {
  // Convert the blogid to a number
  const blogid = parseInt(params.blogid, 10);

  // Find the specific blog based on the id
  const blog = blogPosts.find((b) => b.id === blogid);

  const [activeComment, setActiveComment] = useState<number | null>(null);

  if (!blog) {
    return (
      <div className="justify-center size-full flex pt-40 bg-[#eee8e6] min-h-screen text-4xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-[#eee8e6] min-h-screen py-6 px-4 md:py-10 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        {blog.image && (
          <div className="mb-6 md:mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200} // Adjust width as needed
              height={600} // Adjust height as needed
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Title: {blog.title}
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          by {blog.author}
        </p>
        <div className="prose prose-sm md:prose-lg text-black mb-8">
          {blog.content}
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Comments:
        </h2>
        <ul className="space-y-4">
          {blog.comments.map((comment) => (
            <li key={comment.id} className="border-t border-gray-200 pt-4">
              <p
                className="text-sm md:text-base text-blue-600 hover:underline hover:text-black cursor-pointer"
                onClick={() =>
                  setActiveComment(
                    activeComment === comment.id ? null : comment.id
                  )
                }
              >
                {comment.author}- {comment.content}
              </p>
              {activeComment === comment.id && (
                <div className="ml-2 md:ml-4 mt-2">
                  <h3 className="text-sm md:text-lg font-medium">Replies:</h3>
                  <ol className="list-inside list-disc">
                    {comment.replies.map((reply) => (
                      <li key={reply.id} className="text-sm md:text-base">
                        <b>{reply.author}</b>- {reply.content}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <Link
                href={`/blogs/${blog.id}/comments/${comment.id}`}
                className="text-blue-600 hover:underline text-sm md:text-base"
              >
                View Comment Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogDetails;
