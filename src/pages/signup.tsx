// pages/signup.tsx

import React from 'react';
import Head from 'next/head';

const SignUp: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full px-8 py-6 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-3 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;