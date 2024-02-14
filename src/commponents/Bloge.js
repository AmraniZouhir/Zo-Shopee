// src/components/Blog.js

import React from 'react';
import { blog1, blog10, blog11, blog12, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blogg } from '../assets';

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Awesome Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Blog Post 1 */}
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog1}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog2}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog4}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog5}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog6}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog7}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog8}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog3}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blogg}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog10}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog11}
            alt="Blog Post 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={blog12}
            alt="Blog Post 2"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">Blog Post 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blog;
