'use client';

import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    console.log('User data saved to localStorage:', userData);

    window.location.href = '/login';
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 w-full max-w-md border border-primary rounded-md shadow-xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
          Sign Up Here
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-slate-400" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-slate-400" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Second Row: Phone Number & Address */}
          <div className="grid grid-cols-2 gap-4">
            {/* Phone Number Field */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-slate-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Address Field */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-400" />
              <input
                type="text"
                placeholder="Address"
                className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-slate-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-800 placeholder-gray-500"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Log In Link */}
        <div className="mt-5 text-center">
          <p className="text-sm text-gray-800">
            Already have an account?
            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
