import React, { useState } from 'react';
import Image from 'next/image';
import { techBlog_data } from '@modules/Blog/partials/TechBlog/config/constants';
import Link from 'next/link';

const LatestPost = () => {
  // Combine all posts into a single array
  const allPosts = [
    ...techBlog_data.list1,
    ...techBlog_data.list2,
    ...techBlog_data.list3,
    ...techBlog_data.list4,
    ...techBlog_data.list5,
    ...techBlog_data.list6,
  ];

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Get today's date
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Filter posts based on the search term
  const filteredPosts = allPosts.filter(item =>
    item.title2.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search......"
          className="w-full border p-2 rounded focus:outline-none focus:ring"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} // Update the search term
        />
      </div>

      {/* Latest Posts */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">LATEST POSTS</h3>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item, idx) => (
            <Link href={`/blog-details/${item.id}`} key={idx}>
              <div className="flex items-center mb-4">
                <Image
                  src={item.img}
                  alt={item.desc1}
                  width={60}
                  height={60}
                  className="rounded object-cover mr-4"
                />
                <div>
                  <header className="text-sm font-medium">{item.title2}</header>
                  <p className="text-xs text-gray-500">{today}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No posts found matching your search.</p>
        )}
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bold text-lg mb-4">TAG</h3>
        <div className="flex flex-wrap gap-2">
          {['Computer', 'Maintenance', 'Tips', 'Repair'].map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 text-sm rounded-full px-3 py-1 hover:bg-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
