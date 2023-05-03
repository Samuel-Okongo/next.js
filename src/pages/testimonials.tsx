// pages/feedback.tsx

import React from 'react';
import Head from 'next/head';

const TestimonialCard: React.FC<{ name: string; role: string; content: string }> = ({ name, role, content }) => (
  <div className="bg-white shadow-md p-6 rounded-md mb-6">
    <p className="text-gray-600 italic mb-4">"{content}"</p>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Feedback: React.FC = () => {
  return (
    <>
      <Head>
        <title>Feedback/Testimonials</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-4xl px-4 py-8 bg-white shadow-md rounded-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Feedback/Testimonials</h1>
          <TestimonialCard
            name="Laura Williams"
            role="High School Math Teacher"
            content="This website has made it incredibly easy for me to learn AI concepts and integrate them into my classroom. The resources provided are invaluable, and the support has been outstanding."
          />
          <TestimonialCard
            name="David Turner"
            role="Elementary School Science Teacher"
            content="Thanks to this website, I have gained confidence in teaching AI-related topics to my students. The courses and materials are engaging, well-structured, and highly informative."
          />
          <TestimonialCard
            name="Emma Brown"
            role="Middle School English Teacher"
            content="Introducing AI concepts to my students has never been easier, thanks to the wealth of resources and support provided by this website. I'm excited to see how AI can transform my teaching practices."
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
