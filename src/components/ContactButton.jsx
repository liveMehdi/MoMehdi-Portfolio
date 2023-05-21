import React, { useState } from "react";
import { contactModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function ContactButton() {
  const [cModal, setCModal] = useRecoilState(contactModal);
  return (
    <div className="flex items-center justify-center pb-36 pt-20">
      {/* <button
        className="relative inline-flex items-center justify-start inline-block px-6 py-3 
        overflow-hidden font-medium transition-all border rounded-full hover:bg-white group"
        onClick={() => {
          window.scrollTo(0, 0);
          setCModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <span
          className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear 
        duration-100 transition-all border-white rounded-full"
        ></span>
        <span
          className="relative w-full text-left text-white transition-colors 
        duration-300 ease-in-out group-hover:text-[#915eff] text-xl"
        >
          Contact
        </span>
      </button> */}

      <button
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-normal text-white rounded-md shadow-lg group
        hover:shadow-emerald-700 transition duration-[250]
        "
        onClick={() => {
          window.scrollTo(0, 0);
          setCModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-primary via-emerald-900 to-emerald-400 group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative text-xl">Contact Me</span>
      </button>
    </div>
  );
}

export default ContactButton;

// text-[#915eff]
