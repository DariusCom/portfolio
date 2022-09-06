import Nav from "../components/Nav";
import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/Github.png";
import codingImage from "../images/coding.png";
import CodeComponent from "../components/CodeComponent";
import { flags } from "../utils/countryFlags";
import { useState } from "react";
import { motion } from "framer-motion";

let multipleHello = {
  english: "Hello",
  french: "Bonjour",
  spanish: "Hola",
  italian: "Ciao",
  portugese: "Olá",
  russian: "Привет",
  mandarin: "你好",
  japanese: "こんにちは",
  korean: "안녕하세요",
  turkish: "Merhaba",
  german: "Hallo",
  romanian: "Salut",
  greek: "Χαίρετε",
  hungarian: "Szia",
};

let languages = [...Object.keys(multipleHello)];

const FirstSection = () => {
  const [language, setLanguage] = useState(0);

  return (
    <>
      <div className="flex px-6 text-white h-[800px] laptop:h-[600px] tablet:flex-col">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col justify-center w-[40%] text-center font-iceland items-center tablet:w-full tablet:h-[35%] tablet:mt-10 tablet:px-24 tablet:flex-row lg:px-0"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-8xl relative w-fit laptop:text-6xl sm:text-5xl">
              <img
                src={flags[language]}
                className="w-8 h-5 absolute top-0 -left-10 laptop:w-6 laptop:h-4 laptop:-left-7"
                alt="country flag"
              />
              {multipleHello[languages[language]]}
            </h1>
            <p className="text-2xl mt-6 mb-12 laptop:text-xl laptop:mt-2 laptop:mb-8 tablet:mb-2 tablet:text-2xl md:text-xl sm:text-lg">
              My name is Darius, I am a Fullstack developer and beginner
              competitive programmer
            </p>
          </div>
          <div className="flex justify-center tablet:hidden">
            <a
              href="https://github.com/DariusCom"
              className="mr-10 hover:scale-105 transition-all tablet:mr-0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="w-16 h-16 laptop:w-12 laptop:h-12"
                src={githubImage}
                alt="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/comanescu-darius-ab53331a3/"
              className="hover:scale-105 transition-all"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="w-16 h-16 laptop:w-12 laptop:h-12"
                src={linkedinImage}
                alt="LinkedIn"
              />
            </a>
          </div>
        </motion.div>
        <div className="w-[60%] relative tablet:w-full tablet:h-[65%] tablet:flex tablet:justify-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-code-snippet bg-contain bg-no-repeat absolute left-10 top-32 z-10 w-[480px] h-[400px] laptop:w-[375px] laptop:h-[325px] laptop:top-20 tablet:w-[425px] tablet:h-[375px] tablet:relative tablet:top-0 tablet:left-0 lg:w-[350px] lg:h-[300px] md:w-[300px] md:h-[250px] sm:w-[250px] sm:h-[200px]"
          >
            <div className="absolute top-[12.4rem] left-20 text-xl select-none flex font-inconsolata laptop:top-[9.65rem] laptop:left-16 laptop:text-base tablet:top-44 tablet:text-[1.15rem] lg:top-36 lg:text-base lg:left-[3.5rem] md:left-12 md:top-[7.65rem] md:text-sm sm:top-[6.45rem] sm:text-xs sm:left-[2.75rem]">
              <span className="text-[#eb6d65] mr-2 font-bold">return</span> &lt;
              <span className="text-red-500 font-bold">h1</span>&gt;
              <CodeComponent
                language={language}
                languages={languages}
                setLanguage={setLanguage}
                multipleHello={multipleHello}
              />
              &lt;<span className="text-red-500 font-bold">h1</span>&gt;
            </div>
          </motion.div>
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute right-10 bottom-20 w-[480px] h-[450px] laptop:w-[375px] laptop:h-[340px] laptop:right-0 tablet:hidden"
            src={codingImage}
            alt="Person coding"
          />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
