import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


const About: React.FC = () => {
 const router = useRouter();


 return (
   <>
     <Head>
       <title>About Us</title>
     </Head>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       <button
         onClick={() => router.push('/')}
         className="self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
       >
         Home
       </button>
       <div className="max-w-4xl px-4 py-8 bg-white shadow-md rounded-md">
         {/* Your existing code */}
         <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Education for Teachers</h2>
         <p className="text-gray-600 text-lg mb-4">
           We believe in empowering our educators with the knowledge of AI. To this end, we offer a range of courses and resources designed specifically for teachers. These resources help teachers to understand AI, its potential benefits and challenges, and how it can be integrated into the classroom to enhance learning.
         </p>
         <p className="text-gray-600 text-lg mb-4">
           Our goal is not only to equip teachers with the technical knowledge of AI but also to help them understand the ethical and societal implications of AI. This holistic approach ensures that our educators are fully prepared to guide their students in this rapidly evolving technological landscape.
         </p>
         <p className="text-gray-600 text-lg">
           Thank you for considering us as your partner in AI education, and we look forward to working with you!
         </p>
       </div>
       <footer className="mt-auto py-4 bg-gray-800 w-full text-center">
         <p className="text-white">© 2023 AI For Teachers. All rights reserved.</p>
       </footer>


       <style jsx>{`
         .min-h-screen {
           min-height: 100vh;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           background-color: #F3F4F6;
         }


         .max-w-4xl {
           max-width: 1024px;
           padding: 2rem 1rem;
           background-color: white;
           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
           border-radius: 0.375rem;
         }


         button {
           align-self: flex-start;
           background-color: #3B82F6;
           color: white;
           font-weight: 700;
           padding: 0.5rem 1rem;
           border-radius: 0.375rem;
           margin-bottom: 1rem;
           cursor: pointer;
         }


         button:hover {
           background-color: #2563EB;
         }


         footer {
           margin-top: auto;
           padding: 1rem 0;
           background-color: #1F2937;
           width: 100%;
           text-align: center;
         }
       `}</style>
     </div>
   </>
 );
};


export default About;