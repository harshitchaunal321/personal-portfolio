import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Your Name</h2>
                        <p className="text-gray-400 mt-2">Full Stack Developer</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>
                        Made with <FaHeart className="inline text-red-500" /> by Your Name
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;