import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { ThemeContext } from "../themeProvider";
import Logo from "./Logo";

const links = [
  { name: "Home", route: "home" },
  { name: "Work", route: "projects" },
  { name: "Experience", route: "experience" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode ?? true;
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link
            to="home"
            spy
            smooth
            offset={-80}
            className="nav__brand"
            onClick={() => setToggle(false)}
            aria-label="Akash Sharma — Home"
          >
            <Logo size={40} className="nav__logo" />
            <span className="nav__brand-text">Akash Sharma</span>
          </Link>

          <ul className="nav__links">
            {links.map((el) => (
              <li key={el.route}>
                <Link
                  to={el.route}
                  spy
                  smooth
                  offset={-72}
                  activeClass="is-active"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            <div className="nav__mobile-toggle">
              <Hamburger
                toggled={toggle}
                size={20}
                duration={0.4}
                toggle={setToggle}
                color={darkMode ? "#e8eef7" : "#0f172a"}
              />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {links.map((el) => (
                <li key={el.route}>
                  <Link
                    to={el.route}
                    spy
                    smooth
                    offset={-72}
                    onClick={() => setToggle(false)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" className="theme-toggle theme-toggle--block" onClick={toggleTheme}>
                  {darkMode ? "Light mode" : "Dark mode"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
