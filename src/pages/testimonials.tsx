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
            name="John Doe"
            role="CEO, Company A"
            content="The team provided exceptional service and support throughout our collaboration. Their expertise and dedication have greatly contributed to our project's success."
          />
          <TestimonialCard
            name="Jane Smith"
            role="CTO, Company B"
            content="We've been thoroughly impressed by the quality of work and the level of professionalism demonstrated by the team. They truly went above and beyond to deliver outstanding results."
          />
          <TestimonialCard
            name="Michael Johnson"
            role="COO, Company C"
            content="Working with this team has been a fantastic experience. They are knowledgeable, responsive, and committed to delivering high-quality solutions tailored to our unique needs."
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
