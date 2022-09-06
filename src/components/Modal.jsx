import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faLayerGroup,
  faFileCode,
  faSquareRootVariable,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed top-0 right-0 w-full h-full flex justify-end z-30">
          <div
            onClick={() => setShowModal(false)}
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-40"
          ></div>
          <AnimatePresence>
            <motion.div
              initial={{ x: "50vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ x: "50vw", opacity: 0 }}
              className="w-1/2 h-screen bg-stone-100 z-50 flex flex-col items-start pt-16"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex items-center w-full mb-8 pl-3"
              >
                <div className="w-[20%]">
                  <FontAwesomeIcon size="xl" icon={faLayerGroup} />
                </div>
                <a
                  onClick={() => setShowModal(false)}
                  href="/#technologies"
                  className="w-[80%] text-xl sm:text-base sm:ml-2"
                >
                  Technologies
                </a>
              </motion.div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex items-center w-full mb-8 pl-3"
              >
                <div className="w-[20%] sm:flex sm:justify-center">
                  <FontAwesomeIcon size="xl" icon={faFileCode} />
                </div>
                <a
                  onClick={() => setShowModal(false)}
                  href="/#projects"
                  className="w-[80%] text-xl sm:text-base sm:ml-2"
                >
                  Projects
                </a>
              </motion.div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="flex items-center w-full mb-8 pl-3"
              >
                <div className="w-[20%]">
                  <FontAwesomeIcon size="xl" icon={faSquareRootVariable} />
                </div>
                <a
                  onClick={() => setShowModal(false)}
                  href="/#algorithms"
                  className="w-[80%] text-xl sm:text-base sm:ml-2"
                >
                  Algorithms
                </a>
              </motion.div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="flex items-center w-full mb-8 pl-3"
              >
                <div className="w-[20%]">
                  <FontAwesomeIcon size="xl" icon={faIdCard} />
                </div>
                <a
                  onClick={() => setShowModal(false)}
                  href="/#contact"
                  className="w-[80%] text-xl sm:text-base sm:ml-2"
                >
                  Contact
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Modal;
