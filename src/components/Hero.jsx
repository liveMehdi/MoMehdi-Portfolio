import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useRecoilState } from "recoil";
import { contactModal } from "../atoms/modalAtom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  AOS.init();
  const [cModal, setCModal] = useRecoilState(contactModal);
  if (!cModal) {
    return (
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[200px] mx-auto flex max-w-7xl flex-row items-start justify-start`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span
                className="text-[50px] leading-[2px]"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                Hey,
              </span>
              <br />
              <span
                className="text-emerald-400"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                I'm Mehdi.
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 font-normal`}
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              A Frontend Developer.
              <div
                className="text-[22px]"
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-duration="1000"
              >
                Here's a bit more
                <span className="text-emerald-400 font-medium ">
                  <a href="#about"> about me.</a>
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* <ComputersCanvas /> */}

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div
              className="group hover:scale-105 w-[27px] h-[50px] rounded-3xl border-[2px] border-secondary 
          flex justify-center items-start p-2"
            >
              <motion.dev
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[5px] h-[5px] rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    );
  } else {
    return <section className="relative w-full h-screen mx-auto"></section>;
  }
};

export default Hero;