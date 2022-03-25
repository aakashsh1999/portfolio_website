import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = ({ ref }) => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  return (
    <nav class="bg-white border-gray-200 sm:px-8 shadow-xl fixed w-full top-0">
      <div className="max-w-7xl flex justify-between items-center px-2 py-4 mx-auto">
        <div class="flex items-center cursor-pointer">
          <span class="text-xl font-medium text-decoration-none whitespace-nowrap dark:text-white">
            {`<ꪖꪖƙꪖకꫝ కꫝꪖꪹꪑꪖ/>`}
          </span>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            {links.map((el) => (
              <Link
                to={el.route}
                activeClass={"text-white bg-blue-500"}
                spy={true}
                smooth={true}
                className="block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
              >
                <li className="cursor-pointer">{el.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "Show"}
        </button>
      </div>
      {/* Mobile view nav bar */}
      {toggle && (
        <div className="bg-blue-100 py-2 px-2 md:p-0">
          <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
            {links.map((el) => (
              <Link
                to={el.route}
                activeClass={"text-white bg-gray-700"}
                className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                spy={true}
                smooth={true}
                onClick={() => setToggle(false)}
              >
                <li>{el.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
