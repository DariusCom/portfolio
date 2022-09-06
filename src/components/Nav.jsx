import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const Nav = ({ setShowModal }) => {
  return (
    <div>
      <div className="flex justify-end text-white py-4 laptop:text-sm lg:hidden">
        <motion.a
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          href="/#technologies"
          className="mr-8 cursor-pointer link link-underline link-underline-black laptop:mr-10"
        >
          Technologies
        </motion.a>
        <motion.a
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          href="/#projects"
          className="mr-8 cursor-pointer link link-underline link-underline-black laptop:mr-10"
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          href="/#algorithms"
          className="mr-8 cursor-pointer link link-underline link-underline-black laptop:mr-10"
        >
          Algorithms
        </motion.a>
        <motion.a
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          href="/#contact"
          className="mr-8 cursor-pointer link link-underline link-underline-black laptop:mr-10"
        >
          Contact
        </motion.a>
      </div>
      <div className="hidden justify-end text-white py-4 laptop:text-sm lg:flex">
        <div onClick={() => setShowModal(true)} class="space-y-2 mr-6">
          <span class="block w-8 h-1 bg-gray-600"></span>
          <span class="block w-8 h-1 bg-gray-600"></span>
          <span class="block w-8 h-1 bg-gray-600"></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
