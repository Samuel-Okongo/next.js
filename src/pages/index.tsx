import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const headerStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  width: '100%',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '3px',
  backgroundColor: 'black',
  color: 'white',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '3px',
  marginLeft: '1rem',
  cursor: 'pointer',
};

const footerStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  padding: '1rem 0',
  backgroundColor: '#f8f8f8',
  borderTop: '1px solid #e7e7e7',
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header style={headerStyle}>
        <form onSubmit={handleSearch}>
          <input
            style={inputStyle}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button style={buttonStyle} type="submit">
            Search
          </button>
        </form>
      </header>

      {/* Your existing code starts here */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-black-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by clicking this&nbsp;
          <a href="http://localhost:3000/signup" class="font-mono font-bold">Signup</a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="http://localhost:3000/founderpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Founders'}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/johnny-sins-heroes.jpg"
          alt="Johnny sin Logo"
          width={375}
          height={100}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="http://localhost:3000/aboutus "
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`{inter.className} mb-3 text-2xl font-semibold`}>
            About us{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`{inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find out all about us
          </p>
        </a>

        <a
          href="http://localhost:63342/next.js/src/pages/learn.html?_ijt=sd877pm5btufo3iu0pv5ufqunc&_ij_reload=RELOAD_ON_SAVE"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`{inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`{inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn how AI can help revolutionize teaching
          </p>
        </a>

        <a
          href="public/is218logo.png"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`{inter.className} mb-3 text-2xl font-semibold`}>
          Community{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`{inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Engage with our community!
          </p>
        </a>

        <a
          href="http://localhost:3000/testimonials"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`{inter.className} mb-3 text-2xl font-semibold`}>
            Testimonials{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`{inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            See what people have to say about our webiste.
          </p>
        </a>
      </div>
    </main>
  )
}
