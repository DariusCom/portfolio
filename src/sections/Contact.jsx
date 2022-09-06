import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/Github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center text-white w-full pb-20 pt-12"
    >
      <div className="flex flex-col items-center mb-6 font-iceland">
        <h1 className="text-6xl text-green-300">Contact</h1>
        <p className="text-2xl">Let's keep in touch</p>
      </div>
      <div className="flex justify-center w-full text-center">
        <a
          href="mailto:comanescudarius@gmail.com"
          className="py-2 px-2 rounded-full hover:bg-gray-400 hover:scale-105 transition-all"
        >
          <FontAwesomeIcon className="w-10 h-10" icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/DariusCom"
          className="py-2 px-2 mx-6 rounded-full hover:bg-gray-400 hover:scale-105 transition-all"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="w-10 h-10" src={githubImage} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/comanescu-darius-ab53331a3/"
          className="py-2 px-2 rounded-full hover:bg-gray-400 hover:scale-105 transition-all"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="w-10 h-10" src={linkedinImage} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
