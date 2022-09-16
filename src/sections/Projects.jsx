import houselogo from "../images/houselogo.png";
import supportlogo from "../images/supportlogo.png";
import safeinvestlogo from "../images/safeinvestlogo.png";
import githublogo from "../images/githublogo.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center">
      <h1 className="text-6xl text-white pb-10 pt-20 font-iceland lg:text-5xl">
        My Projects
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-[600px] tablet:grid-cols-2 tablet:grid-rows-3 md:grid-cols-1 md:grid-rows-5">
        <div className="relative row-span-2 hover:opacity-[75%] transition-all tablet:row-span-1 tablet:col-span-2 md:col-span-1">
          <div className="bg-safeinvest bg-cover bg-center bg-no-repeat w-full h-full hover:scale-110 transition-all flex items-center justify-center">
            <img className="w-[90%]" src={safeinvestlogo} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center left-0 top-0 w-full h-full bg-black text-white bg-opacity-40 opacity-0 hover:opacity-100 transition-all">
            <a
              href="https://safeinvest.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 rounded-full text-xl h-[150px] w-[150px] flex items-center justify-center lg:h-[125px] lg:w-[125px] lg:text-base md:h-[100px] md:w-[100px]"
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="relative transition-all">
          <div className="bg-githubfinder bg-cover bg-center bg-no-repeat w-full h-full hover:scale-110 transition-all flex items-center justify-center">
            <img className="w-[90%]" src={githublogo} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center left-0 top-0 w-full h-full bg-black text-white bg-opacity-40 opacity-0 hover:opacity-100 transition-all">
            <a
              href="https://beamish-pothos-9b83d6.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 rounded-full h-[150px] w-[150px] flex items-center justify-center text-xl lg:h-[125px] lg:w-[125px] lg:text-base md:h-[100px] md:w-[100px]"
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="relative hover:opacity-[75%] transition-all">
          <div className="bg-housemarketplace bg-cover bg-center bg-no-repeat w-full h-full hover:scale-110 transition-all flex items-center justify-center">
            <img className="w-[90%]" src={houselogo} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center left-0 top-0 w-full h-full bg-black text-white bg-opacity-40 opacity-0 hover:opacity-100 transition-all">
            <a
              href="https://venerable-vacherin-68667c.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 rounded-full h-[150px] w-[150px] flex items-center justify-center text-xl lg:h-[125px] lg:w-[125px] lg:text-base md:h-[100px] md:w-[100px]"
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="relative hover:opacity-[75%] transition-all">
          <div className="bg-supportdesk bg-cover bg-center bg-no-repeat w-full h-full hover:scale-110 transition-all flex items-center justify-center">
            <img className="w-[90%]" src={supportlogo} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center left-0 top-0 w-full h-full bg-black text-white bg-opacity-40 opacity-0 hover:opacity-100 transition-all">
            <a
              href="https://dariussupportdesk.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 rounded-full h-[150px] w-[150px] flex items-center justify-center text-xl lg:h-[125px] lg:w-[125px] lg:text-base md:h-[100px] md:w-[100px]"
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="bg-slate-700 flex items-center text-center text-white px-10 text-2xl font-inconsolata hover:opacity-[75%] transition-all lg:text-xl lg:px-1">
          There are a lot more projects, but I am in the proccess of refactoring
          the code for most of them.
        </div>
      </div>
    </div>
  );
};

export default Projects;
