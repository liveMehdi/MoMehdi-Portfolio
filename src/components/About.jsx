import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import Tech from "./Tech";
import { BsFillFilePdfFill, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
    >
      <span className="hash-span m-0" id="about">
        &nbsp;
      </span>
      <div>
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8 text-[#ffffffc9] text-[18px] text-center max-w-3xl leading-[30px] mx-auto font-light"
        >
          I'm an enthusiastic
          <span className="text-emerald-300"> frontend developer</span> from
          London, devoted to building{" "}
          <span className="text-emerald-300">beautiful, functional</span> and
          <span className="text-emerald-300"> responsive</span> websites, with
          exceptional user experiences. I am currently
          <span className="text-emerald-300">
            {" "}
            open to new opportunities.
          </span>{" "}
          LinkedIn, resume and tech below...
          <span className="mt-6 py-4 flex justify-center items-center text-3xl gap-x-4 text-emerald-200 opacity-80">
            <a href="https://www.linkedin.com/in/momehdi" target="_blank">
              <BsLinkedin className="cursor-pointer hover:opacity-60 transition" />
            </a>
            <a href="/mehdi-resume.pdf" target="_blank">
              <BsFillFilePdfFill className="cursor-pointer hover:opacity-60 transition" />
            </a>
          </span>
        </motion.p>
        <div className="hidden xs:block pt-14 sm:pt-20 md:pt-24 ">
          <Tech />
        </div>
        <div className="xs:hidden pt-14 sm:pt-20 md:pt-28 ">
          ◦&nbsp; HTML, CSS, JS, TS
          <br />
          ◦&nbsp; REACT, Hooks, Redux, Recoil
          <br />
          ◦&nbsp; Redux, Recoil
          <br />
          ◦&nbsp; NextJS, TailwindCSS
          <br />
          ◦&nbsp; Firebase
          <br />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
