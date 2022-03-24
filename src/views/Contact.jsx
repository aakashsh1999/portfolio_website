import React from "react";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <div id='contact'>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 mt-12 md:mt-24 h-1/2 pt-24" >
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center ">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-indigo-600">
            Conenct with me
          </h4>
        </div>
        <div className="mt-16 flex justify-between md:flex-row flex-col items-center">
          <button className="bg-indigo-500 text-white px-4 py-4 rounded-md hover:bg-indigo-400 mb-12">
            <a href="mailto:aakash.sh858791@gmail.com">Get in Touch</a>
          </button>
          <ul className="flex">
            {contactLinks.map((el) => (
              <a className="mr-6 cursor-pointer hover:scale-125 flex flex-col justify-center items-center">
                <img alt="" src={el.url} />
                {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full bg-black text-white text-lg py-3 flex justify-center mt-12">
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Aakash Sharma
      </div>
      </div>
  );
};

export default Contact;
