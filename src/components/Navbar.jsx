import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { contactModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [cModal, setCModal] = useRecoilState(contactModal);

  function changeNav() {
    if (window.scrollY > 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeNav);

  return (
    <div>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5
        fixed top-0 z-20 bg-primary bg-opacity-0 border-b border-transparent transition
        ${
          navbar &&
          "bg-primary bg-opacity-50 backdrop-filter backdrop-blur-[12px] border-gray-800"
        }`}
      >
        <div
          className="w-full flex justify-between 
        items-center max-w-7xl mx-auto"
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="h-10 pt-[6px]  object-contain"
              data-aos="fade-right"
              data-aos-delay="1600"
              data-aos-duration="1000"
            />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li
              key="about"
              className={`${
                active === "About" ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white transition`}
              onClick={() => {
                setActive("About");
                setToggle(!toggle);
              }}
              data-aos="fade-left"
              data-aos-delay="1600"
              data-aos-duration="1000"
            >
              <a href={`#about`}>About</a>
            </li>
            <li
              key="projects"
              className={`${
                active === "Projects" ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white transition`}
              onClick={() => {
                setActive("Projects");
                setToggle(!toggle);
              }}
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-duration="1000"
            >
              <a href={`#projects`}>Projects</a>
            </li>
            <li
              key="contact"
              className={`${
                active === "Contact" ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white transition`}
              onClick={() => {
                setActive("Contact");
                window.scrollTo(0, 0);
                // setToggle(!toggle);
                setCModal(true);
                document.body.style.overflow = "hidden";
              }}
              data-aos="fade-left"
              data-aos-delay="2000"
              data-aos-duration="1000"
            >
              Contact
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li
                  key="about"
                  className={`${
                    active === "About" ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white  transition`}
                  onClick={() => {
                    setActive("About");
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#about`}>About</a>
                </li>
                <li
                  key="projects"
                  className={`${
                    active === "Projects" ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white transition`}
                  onClick={() => {
                    setActive("Projects");
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#projects`}>Projects</a>
                </li>
                <li
                  key="contact"
                  className={`${
                    active === "Contact" ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]
                   hover:text-white transition`}
                  onClick={() => {
                    setActive("Contact");
                    window.scrollTo(0, 0);
                    setToggle(!toggle);
                    setCModal(true);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
