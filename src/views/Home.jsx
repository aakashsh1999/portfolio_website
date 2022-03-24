import React from "react";
import heroBg from "../assets/webdev.svg";

const Home = () => {
  return (
    <>
    <div className="bg-gray-100">
      <main className="mx-auto max-w-7xl px-4 mt-36 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center md:h-screen" id='/'>
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I am Aakash</span>
            <span className="block text-indigo-600 lg:inline">
              Front End Developer
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            I am a Front-End / Full-Stack Developer. I am currently working at
            CloudStok Technologies as a Front-End Developer
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="hello"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                About
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="hello"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <img src={heroBg} alt="" className="md:w-3/6" />
      </main>
      </div>
    </>
  );
};

export default Home;
