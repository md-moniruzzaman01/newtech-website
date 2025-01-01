'use client';

import React, { useState, useEffect, FC } from 'react';
import { techBlog_data } from '../../../modules/Blog/partials/TechBlog/config/constants';
import { icons } from '@libs/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@modules/Blog/partials/TechBlog/config/type';

interface TruncatedTextProps {
  text: string;
}

const TruncatedText: FC<TruncatedTextProps> = ({ text }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

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

const Latest_Blog: FC = () => {
  const { list1, list2, list3, list4, list5, list6, title } = techBlog_data;
  const blogData: BlogPost[] = [
    ...list1,
    ...list2,
    ...list3,
    ...list4,
    ...list5,
    ...list6,
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [blogsPerView, setBlogsPerView] = useState<number>(4);

  const totalBlogs: number = blogData.length;

  // Adjust blogsPerView based on screen size
  useEffect(() => {
    const updateBlogsPerView = (): void => {
      if (window.innerWidth < 640) {
        setBlogsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setBlogsPerView(2);
      } else {
        setBlogsPerView(4);
      }
    };

    updateBlogsPerView();
    window.addEventListener('resize', updateBlogsPerView);
    return () => window.removeEventListener('resize', updateBlogsPerView);
  }, []);

  const handlePrevClick = (): void => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalBlogs) % totalBlogs);
  };

  const handleNextClick = (): void => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalBlogs);
  };

  const getVisibleBlogs = (): BlogPost[] => {
    const visibleBlogs: BlogPost[] = [];
    for (let i = 0; i < blogsPerView; i++) {
      visibleBlogs.push(blogData[(currentIndex + i) % totalBlogs]);
    }
    return visibleBlogs;
  };

  const getTagColor = (tag: string): string => {
    switch (tag.toLowerCase()) {
      case 'computer':
        return 'bg-slate-200';
      case 'repair':
        return 'bg-slate-300';
      case 'maintenance':
        return 'bg-blue-200';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <div className="bg-[#f0f7ff]">
      <div
        className="container mx-auto py-11 sm:py-20 px-4"
        style={{ maxWidth: '1140px' }}
      >
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          {title}
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div
            className="absolute p-2 left-[-10px] cursor-pointer bg-slate-400 text-white hover:text-black z-10 md:left-[-40px] sm:left-[-60px]"
            onClick={handlePrevClick}
          >
            {icons.leftArrow}
          </div>

          <div className="w-full overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                display: 'flex',
              }}
            >
              {getVisibleBlogs().map((blog, index) => (
                <div key={index} className="w-full">
                  <Link href={`/blog-details/${blog.id}`}>
                    <div className="overflow-hidden h-full bg-white shadow-md rounded-md">
                      <Image
                        src={blog.img}
                        alt={blog.desc1}
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-sm sm:text-lg font-semibold">
                          {blog.desc1}
                        </h3>
                        <p className="text-gray-600 mt-2 text-xs sm:text-sm">
                          <TruncatedText text={blog.desc2} />
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {blog.btn.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-xs rounded-full px-2 py-1 ${getTagColor(
                                tag
                              )}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <div
            className="absolute right-[-10px] p-2 cursor-pointer bg-slate-400 text-white hover:text-black z-10 md:right-[-20px] lg:right-[-40px]"
            onClick={handleNextClick}
          >
            {icons.rightArrow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest_Blog;
