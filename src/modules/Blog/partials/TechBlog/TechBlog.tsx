'use client';

import React, { useState } from 'react';
import { techBlog_data } from './config/constants';
import Image from 'next/image';
import LatestPost from '@components/Latest Post/LatestPost';
import Paginations from '@components/Paginations/Paginations';

import Link from 'next/link';
import { TechBlogProps } from './config/type';

const TechBlog: React.FC<TechBlogProps> = () => {
  const { title, list1, list2, list3, list4, list5, list6 } = techBlog_data;
  const posts = [...list1, ...list2, ...list3, ...list4, ...list5, ...list6];

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4; // Number of posts per page

  // Derived Values
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  // Handle Page Change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-4 md:mx-12 lg:mx-48 my-24">
      {/* Page Title */}
      <header className="text-3xl md:text-4xl font-bold text-center mb-16">
        {title}
      </header>

      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full md:w-2/3">
          {currentPosts.map((item, idx) => (
            <Link href={`/blog-details/${item?.id}`} key={idx}>
              <div className="bg-white overflow-hidden mb-6">
                <Image
                  src={item.img}
                  alt={item.desc1}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <article className="font-bold text-lg mb-2">
                    {item.desc1}
                  </article>
                  <article className="text-sm text-gray-600 mb-3 line-clamp-4">
                    <TruncatedText text={item.desc2} />
                  </article>
                  <div className="flex flex-wrap gap-2">
                    {item.btn.map((tag, idx) => (
                      <button
                        key={idx}
                        className="bg-blue-100 text-blue-700 mt-2 text-sm rounded-full px-3 py-1 hover:bg-blue-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Latest Posts */}
        <div className="w-full md:w-1/3">
          <LatestPost />
        </div>
      </div>

      {/* Pagination */}
      <Paginations
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= 100) return <>{text}</>;

  return (
    <>
      {expanded ? text : `${text.slice(0, 150)}...`}
      <span
        className="text-blue-600 cursor-pointer ml-1"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'See less' : 'See more'}
      </span>
    </>
  );
};

export default TechBlog;
