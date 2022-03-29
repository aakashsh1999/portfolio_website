import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import Particles from "react-tsparticles";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        // className="bg-fixed "
        // style={{
        //   backgroundImage: `url('https://img.wallpapersafari.com/desktop/1920/1080/14/73/tWkswF.png')`,
        // }}
        className={darkMode ? "bg-gray-100" : "bg-black"}
      >
        <main
          className="mx-auto max-w-7xl px-4  pt-36 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className={darkMode ? "block text-black" : " text-white"}>
                Hi, I am Aakash
              </span>
              <span className="block text-indigo-600 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Front-End / Full-Stack Developer. I am currently working at
              CloudStok Technologies as a Front-End Developer
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href="hello"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
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
          <img src={heroBg} alt="" className="md:w-3/6 hidden sm:block" />
        </main>
        {/* <Particles
          params={{
            fpsLimit: 60,
            // zLayers:0,
            particles: {
              size: "100vh",
              zIndex: 0,
              color: {
                value: "#000",
              },
              links: {
                enable: true,
                color: "#000",
                distance: 150,
              },
              move: {
                enable: true,
              },
            },
          }}
        /> */}
      </div>
    </>
  );
};

export default Home;
