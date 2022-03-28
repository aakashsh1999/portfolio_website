import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext, ThemeProvider } from "../themeProvider";

const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-12 bg-fixed bg-gray-100" : "pb-12 bg-black"
      }
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Services
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-indigo-600">
            What I Provide
          </h4>
          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {serviceData.map((el) => (
              <div
                className={
                  theme.state.darkMode
                    ? "md:w-96 p-4 mx-4 bg-white rounded-lg flex items-center flex-col"
                    : "md:w-96 p-4 mx-4 bg-gray-100 rounded-lg flex items-center flex-col"
                }
              >
                <img src={el.img} alt="" />
                <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                <p className="text-lg mt-2 text-justify">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
