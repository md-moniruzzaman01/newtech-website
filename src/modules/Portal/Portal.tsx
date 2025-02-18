'use client';

import Link from 'next/link';
import React from 'react';
import { FaRocket, FaShieldAlt, FaBolt } from 'react-icons/fa';

const Portal = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Portal</h1>
      <p className="text-gray-600 mt-4 max-w-lg">
        Your gateway to seamless digital experiences. Discover a world of
        possibilities with our cutting-edge platform.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center gap-2 font-semibold">
          <Link href="/portal/dashboard" />
          Get Started →
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold text-blue-500">
          Learn More
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="border p-6 rounded-lg text-left border-blue-500">
          <FaRocket className="text-3xl text-blue-500" />
          <h2 className="font-semibold text-xl mt-4 text-secondary">
            Lightning Fast
          </h2>
          <p className="text-gray-600 mt-2 ">
            Experience blazing-fast performance with our optimized
            infrastructure.
          </p>
          <p className="text-gray-500 mt-2 ">
            Built with the latest technologies to ensure your applications run
            at peak efficiency.
          </p>
        </div>
        <div className="border p-6 rounded-lg text-left border-blue-500">
          <FaShieldAlt className="text-3xl  text-blue-500" />
          <h2 className="font-semibold text-xl mt-4  text-secondary ">
            Secure by Design
          </h2>
          <p className="text-gray-600 mt-2 ">
            Enterprise-grade security for peace of mind.
          </p>
          <p className="text-gray-500 mt-2 ">
            Advanced security measures to protect your data and ensure
            compliance.
          </p>
        </div>
        <div className="border p-6 rounded-lg text-left border-blue-500">
          <FaBolt className="text-3xl text-blue-500" />
          <h2 className="font-semibold text-xl mt-4 text-secondary">
            Powerful Features
          </h2>
          <p className="text-gray-600 mt-2">Everything you need to succeed.</p>
          <p className="text-gray-500 mt-2">
            Comprehensive tools and features designed to enhance your workflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portal;
