import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li key={pageNumber} className={pageNumber === currentPage ? "active-pagination" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
          className="pagination-link"
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <ul className='pagination my-8 flex-wrap gap-4 flex'>
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
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
  pageSize: PropTypes.number.isRequired,
};

export default Pagination;
