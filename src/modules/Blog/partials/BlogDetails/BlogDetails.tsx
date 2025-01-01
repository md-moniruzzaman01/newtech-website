'use client';

import React from 'react';
import { techBlog_data } from '../TechBlog/config/constants';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import LatestPost from '@components/Latest Post/LatestPost';

const BlogDetails: React.FC = () => {
  const { id } = useParams();

  // Combine all blog posts into a single array
  const posts = [
    ...techBlog_data.list1,
    ...techBlog_data.list2,
    ...techBlog_data.list3,
    ...techBlog_data.list4,
    ...techBlog_data.list5,
    ...techBlog_data.list6,
  ];

  // Find the blog post by matching the ID
  const blogPost = posts.find(post => post.id === Number(id));

  // If the blog post is not found, show a fallback message
  if (!blogPost) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-semibold text-gray-600">
          Blog not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-12 lg:mx-24 my-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-16"></h1>
      <div className="flex flex-col lg:flex-row gap-12 px-6 lg:px-20 py-12 bg-gray-50">
        <div className="flex-1">
          <div className="">
            <header className="text-4xl font-extrabold text-gray-900 mb-8">
              {blogPost.title2}
            </header>
            <div className="overflow-hidden rounded-lg shadow-lg mb-8">
              <Image
                src={blogPost.img}
                alt={blogPost.desc1}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <article className="text-gray-700 text-lg text-justify mb-8">
              {blogPost.desc2}
            </article>

            <header className="text-3xl font-semibold  text-gray-900 mb-6">
              {blogPost.title3}
            </header>
            <article className="text-gray-700 text-lg text-justify  mb-8">
              {blogPost.desc3}
            </article>

            <header className="text-3xl font-semibold text-gray-900 mb-6">
              {blogPost.title4}
            </header>
            <article className="text-gray-700 text-lg text-justify leading-relaxed">
              {blogPost.desc4}
            </article>
          </div>
        </div>

        {/* Sidebar: Latest Posts */}
        <aside className="lg:w-1/3">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Latest Posts
            </h2>
            <LatestPost />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
