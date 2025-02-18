'use client';
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@tasktechnology.net' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 w-full max-w-md border border-primary rounded-md shadow-xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
          Log In Here
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:ring-primary"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-slate-400 rounded-lg focus:ring-primary"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="mt-5 text-center">
          <a
            href="/forgot-password"
            className="text-sm text-blue-900 font-bold hover:underline"
          >
            Forgot password?
          </a>
          <p className="text-sm text-gray-800">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              className="text-primary font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
