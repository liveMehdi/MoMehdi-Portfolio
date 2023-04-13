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
  image2,
  image3,
  id,
}) => {
  function scrollView(id, num) {
    const target = document.getElementById(`${id}slide${num}`);
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  const [downPress, setDownPress] = useState(false);
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
        className={`bg-tertiary transition-colors border-4
         hover:border-emerald-300 p-2 lg:p-5 rounded-2xl  group relative
         shadow-card ${
           downPress ? "border-emerald-300" : "border-transparent"
         }`}
      >
        <div className="relative h-[200px] w-[313px] sm:h-[300px] sm:w-[470px] lg:w-[782.6px] lg:h-[500px]">
          <div className="carousel w-full z-50 overflow-hidden object-cover h-full">
            <div id={`${id}slide1`} className="carousel-item relative w-full">
              <img src={image} className="w-full h-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 lg:left-[18px] lg:right-[18px] top-1/2">
                <a
                  onClick={() => scrollView(id, 3)}
                  className="btn btn-circle z-50  border-2 bg-primary hover:bg-primary border-white text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❮
                </a>
                <a
                  onClick={() => scrollView(id, 2)}
                  className="btn btn-circle  border-2 bg-primary hover:bg-primary border-white text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id={`${id}slide2`}
              className="carousel-item relative w-full overflow-hidden"
            >
              <img src={image2} className="w-full h-full " />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  onClick={() => scrollView(id, 1)}
                  className="btn btn-circle  border-2 bg-primary hover:bg-primary border-black text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❮
                </a>
                <a
                  onClick={() => scrollView(id, 3)}
                  className="btn btn-circle  border-2 bg-primary hover:bg-primary border-white text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id={`${id}slide3`} className="carousel-item relative w-full">
              <img src={image3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  onClick={() => scrollView(id, 2)}
                  className="btn btn-circle  border-2 bg-primary hover:bg-primary border-white text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❮
                </a>
                <a
                  onClick={() => scrollView(id, 1)}
                  className="btn btn-circle  border-2 bg-primary hover:bg-primary border-white text-white text-[17px] 
                  hover:scale-105 hover: active:scale-95 shadow-xl hover:border-white"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute flex bottom-0 left-1/2 mb-[6px] sm:mb-3 lg:mb-4 translate-x-[-50%] 
            card-img_hover lg:space-x-4 bg-primary bg-opacity-90 backdrop-filter backdrop-blur-[12px]
              border rounded-full border-gray-200 shadow-2xl detailShadow"
          >
            <div
              onClick={() => window.open(github_link, "_blank")}
              className="
                shadow-black hover:opacity-70 
              duration-[125] transition w-[3.2rem] h-[3.2rem] lg:w-[4.1rem] lg:h-[4rem] lg:ml-[6px] 
              border-r border-gray-400 flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(direct_link, "_blank")}
              className=" hover:opacity-70
              lg:w-[4.1rem] lg:h-[4rem] duration-[125]
              w-[3.2rem] h-[3.2rem]   flex justify-center 
              items-center cursor-pointer "
            >
              <img
                src={linkp}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => setDownPress(!downPress)}
              className={` hidden lg:flex   hover:bg-[#ffffff1d] px-[26px] py-2 rounded-r-full
              border-l border-gray-400  justify-center items-center cursor-pointer text-2xl text-[21px] 
              text-center text-white transition duration-75 z-[100] `}
            >
              Details &nbsp;
              <div
                className={` transition text-[29px] ${
                  downPress ? "rotate-90 " : "-rotate-90"
                }`}
              >
                {"<"}
              </div>
            </div>
          </div>
        </div>

        {/* <div
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
        </div> */}

        <div
          className={`relative lg:border-b lg:border-b-emerald-300  lg:absolute top-[-1px] rounded-t-2xl left-[-1px] right-[-1px] 
          px-2 lg:px-8 lg:border-transparent 
         lg:bg-primary lg:bg-opacity-90 lg:backdrop-filter lg:backdrop-blur-[12px] lg:pb-2  ${
           !downPress && "lg:hidden"
         }`}
        >
          <div className=" lg:flex lg:justify-between items-center pb-[22px]">
            {" "}
            <h3 className="pt-5 text-[30px] text-white font-bold mb-3 lg:mb-0">
              {name}
            </h3>
            <div className="flex gap-x-[10px] pb-[6px] right-2 top-2 flex-wrap gap-y-3">
              {tags.map((tag) => (
                <div
                  className={`lg:mt-6 py-1 px-3 border-secondary border rounded-xl text-gray-200`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pr-16 lg:text-[17px] text-gray-200">
            <div>{description}</div>
          </div>
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
        direction == "left" ? scrollLeft - 800 : scrollLeft + 800;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

      if (scrollTo <= 0) {
        setIsMoved(false);
      } else {
        setIsMoved(true);
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
        className=" sm:px-16 px-6 sm:py-16 sm:pb-8 py-10 max-w-7xl mx-auto"
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
