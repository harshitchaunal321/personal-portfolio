import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Harshit Chaunal</h2>
                        <p className="text-gray-400 mt-2">Full Stack Developer</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://github.com/harshitchaunal321"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harshitchaunal/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://leetcode.com/u/harshitchaunal123/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <FaCode size={20} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>
                        Made with <FaHeart className="inline text-red-500" /> by Harshit Chaunal
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;