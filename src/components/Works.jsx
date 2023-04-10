import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { git, github, linkp } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useRef, useState } from "react";
import { staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  direct_link,
  github_link,
}) => {
  return (
    <motion.div
      className=""
      variants={fadeIn("up", "spring", index * 0.6, 0.85)}
    >
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
          transition: true,
        }}
        className="bg-tertiary transition-colors border-4 border-transparent
         hover:border-emerald-300 p-2 lg:p-5 rounded-2xl  group relative
         shadow-card"
      >
        <div className="relative h-[200px] w-[313px] sm:h-[300px] sm:w-[470px] lg:w-[810px] lg:h-[517.5px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-start items-end m-5 lg:m-9 mr-16 card-img_hover space-x-3 lg:space-x-4">
            <div
              onClick={() => window.open(direct_link, "_blank")}
              className="bg-primary bg-opacity-70 backdrop-filter backdrop-blur-[12px]
              border border-gray-200 hover:scale-105 shadow-black hover:shadow-2xl 
              duration-[125] transition w-[3.2rem] h-[3.2rem] lg:w-[4.5rem] lg:h-[4.5rem] 
              rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkp}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(github_link, "_blank")}
              className="bg-primary bg-opacity-70 backdrop-filter backdrop-blur-[12px]
              border border-gray-300 lg:w-[4.5rem] hover:scale-105 duration-[125] 
              w-[3.2rem] h-[3.2rem] lg:h-[4.5rem] rounded-full flex justify-center 
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block group-hover:w-[45%] transition-all
        duration-300 ease-in-out group-hover:px-4 absolute w-0 
        top-2 right-2 bottom-2 lg:top-5 lg:right-5 lg:bottom-5  bg-emerald-950 bg-opacity-[85%] rounded-2xl rounded-l-none
        
        "
        ></div>
        <div
          className="hidden lg:block absolute group-hover:opacity-100 w-[45%] 
        px-y pl-6 opacity-0 top-5 right-5 bottom-5 transition-all duration-500"
        >
          <h3 className="py-5 text-[28px] text-white font-bold">{name}</h3>
          <p className="pr-3 ">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </div>

        <div className=" lg:hidden">
          <h3 className="py-5 text-[28px] text-white font-bold">{name}</h3>
          <p className="pr-3 ">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;

      const scrollTo =
        direction == "left" ? scrollLeft - 820 : scrollLeft + 820;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

      if (scrollTo <= 0) {
        setIsMoved(false)
      }
      else {
        setIsMoved(true)
      }
    }
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative"
    >
      <span className="block mt-[-18px] pb-6 lg:pb-2" id="projects">
        &nbsp;
      </span>
      <motion.div
        variants={textVariant()}
        className=" sm:px-16 px-6 sm:py-16 sm:pb-12 py-10 max-w-7xl mx-auto"
      >
        <p className={`${styles.sectionSubText}`} id="projects">
          See my work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Some projects.</h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          molestias? Quasi nemo molestiae sapiente magni, fuga at voluptate
          delectus fugiat.
        </motion.p>
      </div> */}
      <div className="relative">
        <div
          className={` arrow  left-4  ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        >
          {"<"}
        </div>
        <div
          ref={rowRef}
          className="flex flex-row  gap-x-9 p-20 pl-[calc(50%-40rem)] pt-3 overflow-x-scroll 
          scrollbar-thin lg:scrollbar-none snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
        <div className="arrow right-4" onClick={() => handleClick("right")}>
          {">"}
        </div>
      </div>
    </motion.section>
    // <div className="relative">

    // </div>
  );
};

export default Works;
