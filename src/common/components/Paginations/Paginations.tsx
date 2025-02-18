import React from 'react';
import { PaginationProps } from './config/types';

const Paginations: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const pages = [];
    if (currentPage > 1) pages.push(currentPage - 1); // Previous page
    pages.push(currentPage); // Current page
    if (currentPage < totalPages) pages.push(currentPage + 1); // Next page
    return pages;
  };

  return (
    <div className="mt-10 space-x-1 flex justify-center">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-btngray text-white'
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {/* Ellipsis before first page */}
      {currentPage > 2 && (
        <button
          className="px-3 py-1 bg-btngray text-white"
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      )}
      {currentPage > 3 && <span className="px-3 py-1 text-gray-500">...</span>}

      {/* Visible Pages */}
      {getVisiblePages().map(page => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-btngray text-white hover:bg-blue-500'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - 2 && (
        <span className="px-3 py-1 text-gray-500">...</span>
      )}
      {currentPage < totalPages - 1 && (
        <button
          className="px-3 py-1 bg-btngray text-white"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-btngray text-white'
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginations;
