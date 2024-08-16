import React from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  console.log(filteredBlogs);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map((blog) => (
        <article to={`/blogs/${blog.id}`} key={blog.id} className='border p-4 rounded-lg shadow-sm'>
          <div>
            <img src={blog.image} alt={blog.title} className='w-full' />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer'>
            {blog.title}
          </h3>
          <p className='mb-2 text-sm text-gray-600'>
            <FaUser className='inline-flex items-center mr-2' />
            {blog.author}
          </p>
          <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
        </article>
      ))}
    </div>
  );
};

BlogCards.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string,
  pageSize: PropTypes.number.isRequired,
};

BlogCards.defaultProps = {
  selectedCategory: null,
};

export default BlogCards;


