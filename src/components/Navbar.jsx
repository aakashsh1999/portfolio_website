import React, { useState } from "react";
import { scrollDown } from "../constants";
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
    <nav class="bg-white border-gray-200 px-2 sm:px-8 py-4 dark:bg-gray-800 shadow-lg fixed w-full top-0">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div class="flex items-center cursor-pointer">
          <span class="text-xl font-medium text-decoration-none whitespace-nowrap dark:text-white">
            {`<ꪖꪖƙꪖకꫝ కꫝꪖꪹꪑꪖ/>`}
          </span>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            {links.map((el) => (
              <li className="cursor-pointer">
                <Link
                  to={el.route}
                  spy={true}
                  smooth={true}
                  class="block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                  aria-current="page"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "Show"}
        </button>
      </div>
      <div>
        {toggle && (
          <ul class="flex flex-col mt-4 md:hidden md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            {links.map((el) => (
              <li>
                <Link
                  to={el.route}
                  class="block py-2 pr-4 pl-3 text-black hover:text-red-500"
                  aria-current="page"
                  onClick={() => scrollDown(ref)}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
