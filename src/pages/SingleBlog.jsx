import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';

const SingleBlog = () => {
  const blog = useLoaderData(); 

  const { title, image, category, author, published_date, reading_time, content } = blog;

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Post</h2>
      </div>
      <div className="max-w-7xl mx-auto my-12">
        <div className="lg:w-3/4 mx-auto">
          <img src={image} alt={title} className="w-full mx-auto rounded" />
        </div>
        <p className="text-sm text-gray-400 mb-2 uppercase">{category}</p>
        <h2 className="text-3xl font-bold mb-4 text-blue-500">{title}</h2>
        <p className="mb-3 text-gray-600">
          <FaUser className="inline-flex items-center mr-2" />
          {author} | {new Date(published_date).toLocaleDateString()}
        </p>
        <p className="mb-3 text-gray-600">
          <FaClock className="inline-flex items-center mr-2" />
          {reading_time}
        </p>
        <p className="text-base text-gray-500 mb-6">{content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
