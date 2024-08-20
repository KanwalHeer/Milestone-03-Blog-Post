import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#270d0d]/100 text-white py-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left m2-4 sm:mb-0">
            <h2 className="text-2xl font-bold">Blog Post by Kanwal Heer</h2>
            <p className="text-sm mt-1">Technology solutions to drive your digital transformation forward.</p>
          </div>
          <div className="flex flex-col items-center  justify-center sm:flex-row sm:items-center">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">About</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} KH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

