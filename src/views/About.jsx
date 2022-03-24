import React from "react";
import { techStack } from "../constants";


const About = () => {
  return (
    <div id='about'>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24" >
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center ">
          About Me
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-indigo-600">
            A bit about me
          </h4>
          <p className="mt-4 text-xl text-justify text-gray-500">
            I'm a self-taught web developer and Mobile App Developer with
            experience in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications. I take into consideration the user experience
            while writing reusable and efficient code. I passionately combine
            good design, technology, and innovation in all my projects, which I
            like to accompany from the first idea to release.Currently, I'm
            focused on the backend development.
          </p>
          <h4 className="mt-12 text-3xl font-semibold text-indigo-600">
            Technologies and Tools
          </h4>
          <p className="mt-4 text-xl text-justify text-gray-500">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </p>
          <div className="flex flex-wrap mt-8 flex flex-wrap justify-between">
            {techStack.map((el) => (
              <div className="py-2 px-4 bg-gray-50 md:m-4 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
