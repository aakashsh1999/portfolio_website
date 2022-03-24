import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-200">
    <div className="max-w-7xl mt-12 mx-auto x-4 sm:px-6 lg:px-8 px-4 h-screen pt-10" id='services'>
      <h2 className="text-5xl font-bold px-4 md:px-0 text-center pt-12">
        Services
      </h2>
      <div>
        <h4 className="mt-16 text-3xl font-semibold text-indigo-600">
          What I Provide
        </h4>
        <div className="mt-8 flex md:flex-row justify-between flex-col">
          <div className="w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png" />
            <h4 className="text-xl font-bold mt-4">
              Web Application Development
            </h4>
            <p className="text-lg mt-2 text-justify">
              Web design encompasses many different skills and disciplines in
              the production and maintenance of websites. The different areas of
              web design include web graphic design; user interface design;
              authoring, including standardised code and proprietary software;
              user experience design; and search engine
            </p>
          </div>
          <div className="w-96 mt-4 p-4 md:mt-0 bg-gray-100 rounded-lg flex items-center flex-col">
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png" />
            <h4 className="text-xl font-bold mt-4">
              Mobile Application Development
            </h4>
            <p className="text-lg mt-2 text-justify">
              We provide a range of mobile application development services
              including custom mobile development on Android platforms, building
              cross-platform apps, designing user experience and integrating
              novel mobile interfaces such as chat and voice
            </p>
          </div>
          <div className="w-96 p-4 mt-4 md:mt-0 bg-gray-100 rounded-lg flex items-center flex-col">
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png" />
            <h4 className="text-xl font-bold mt-4">Backend Development</h4>
            <p className="text-lg mt-2 text-justify">
              Graphic design is a craft where professionals create visual
              content to communicate messages. By applying visual hierarchy and
              page layout techniques, designers use typography and pictures to
              meet users' specific needs and focus on the logic of displaying
              elements in interactive designs, to optimize the user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
