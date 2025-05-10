import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import "../styles/About.css";

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex justify-center"
                    >
                        <Tilt
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }}
                            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-1 w-full max-w-xs"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl py-8 px-6 flex justify-evenly items-center flex-col h-full">
                                <img
                                    src="/assets/profile.jpeg"
                                    alt="profile"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>
                        </Tilt>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                            Full Stack Developer with 4+ Years of Experience
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm a passionate Full Stack Developer specializing in building
                            exceptional digital experiences. With expertise in both frontend
                            and backend development, I create seamless, performant applications
                            that solve real-world problems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                                    Frontend Expertise
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    React, Next.js, TypeScript, Redux, TailwindCSS, Material UI
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                                    Backend Expertise
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Node.js, Express, NestJS, Python, Django, RESTful APIs
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                                    Database
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    MongoDB, PostgreSQL, MySQL, Firebase
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                                    DevOps
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Docker, AWS, CI/CD, Git, GitHub Actions
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
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
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;