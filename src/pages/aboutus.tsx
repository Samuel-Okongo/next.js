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
            We are a team of educators, technologists, and AI enthusiasts who are passionate about empowering teachers with the knowledge and tools necessary to integrate Artificial Intelligence into their classrooms. With years of experience in education and technology, we understand the unique challenges and opportunities that AI presents for educators and learners alike.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our mission is to bridge the gap between AI and education by providing high-quality resources, practical guidance, and a supportive community for educators interested in embracing AI. We believe in the power of AI to transform teaching and learning, and we are dedicated to helping educators harness this potential to create engaging and meaningful experiences for their students.
          </p>
          <p className="text-gray-600 text-lg">
            Thank you for joining us on this journey, and we look forward to supporting you as you explore the exciting world of AI in education!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
