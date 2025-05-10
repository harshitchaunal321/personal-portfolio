import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaCode, FaFileDownload } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";
import "../styles/Header.css";

const Header = () => {
    return (
        <section id="home" className="relative w-full h-screen mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="flex flex-col gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black dark:text-white">
                            Hi, I'm <span className="text-primary">Harshit Chaunal</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-400">
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    1000,
                                    "Web Developer",
                                    1000,
                                    "Mobile Developer",
                                    1000,
                                    "Software Engineer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                            I build exceptional digital experiences with modern web technologies.
                            With 4+ years in the industry, I specialize in creating scalable,
                            performant applications that users love.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4 mt-6"
                    >
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/assets/Harshit Chaunal Resume.pdf"
                            download
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                        >
                            Download CV <FaFileDownload />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex gap-4 mt-6"
                    >
                        <a
                            href="https://github.com/harshitchaunal321"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/harshitchaunal/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://leetcode.com/u/harshitchaunal123/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaCode size={24} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <a href="#about" className="animate-bounce">
                        <HiChevronDoubleDown
                            size={32}
                            className="text-gray-600 dark:text-gray-400"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;