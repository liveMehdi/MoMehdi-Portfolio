import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { contactModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function Footer() {
  const [cModal, setCModal] = useRecoilState(contactModal)

  return (
    <div className="pt-24 pb-28 border-t border-t-gray-800 flex flex-col items-center px-12 sm:px-0">
      <Link
        to="/"
        className="flex items-center "
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="h-10 pt-[6px]  object-contain hover:translate-y-[-4px] transition" />
      </Link>
      <div className="flex space-x-4  xs:space-x-8 mt-12 flex-wrap gap-y-3 justify-center">
        <a href="https://github.com/liveMehdi" target="_blank" className="hoverUnderline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/momehdi/" target="_blank" className="hoverUnderline">
          LinkedIn
        </a>
        <div className="hoverUnderline cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
          setCModal(true);
          document.body.style.overflow = "hidden";
        }}
        >
          Contact
        </div>
        <a href="#about" target="_blank" className="hoverUnderline">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Footer;
