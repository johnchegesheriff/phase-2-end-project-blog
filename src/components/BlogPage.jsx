import React, { useState, useEffect } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      
      const apiBaseUrl = 'https://66be221974dfc195586eaea6.mockapi.io/blog-app';
      let url = `${apiBaseUrl}?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Category section */}
      <CategorySelection
        onSelectCategory={handleCategoryChange}
        activeCategory={selectedCategory}
      />
      
      {/* Blog card section */}
      <div>
        {isLoading ? (
          <p>Loading blogs...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <BlogCards
            blogs={blogs}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        )}
      </div>
      
      {/* Pagination section */}
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        blogs={blogs}
        pageSize={pageSize}
      />
    </div>
  );
};

export default BlogPage;
