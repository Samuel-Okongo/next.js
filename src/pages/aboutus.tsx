// pages/about.tsx

import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-4xl px-4 py-8 bg-white shadow-md rounded-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg mb-4">
            We are a team of passionate professionals dedicated to providing the best products and services to our customers. With years of experience in our respective fields, we strive to meet and exceed the expectations of our clients.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our mission is to create an exceptional experience for our customers by offering high-quality products, unparalleled customer service, and innovative solutions. We believe in building lasting relationships with our customers and partners, and we continually invest in the growth and development of our team members.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission:</h2>
          <p className="text-gray-600 text-lg mb-4">
            We strive to make learning a better experience for not only students but for teachers as well. So, all participants are in a safe and enjoyable learning environment. We want what is best for teachers to educate students for their future. And prep those said students to be the best generation and forth.
          </p>
          <p className="text-gray-600 text-lg">
            Thank you for considering us as your partner, and we look forward to working with you!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
