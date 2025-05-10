import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/data";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
import "../styles/Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav
            className={`fixed w-full flex items-center py-5 top-0 z-20 ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-black dark:text-white text-[18px] font-bold cursor-pointer flex">
                        Harshit Chaunal&nbsp;
                        <span className="sm:block hidden">| Full Stack Developer</span>
                    </p>
                </a>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title
                                ? "text-black dark:text-white"
                                : "text-gray-500 dark:text-gray-400"
                                } hover:text-black dark:hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
                    </button>

                    <div className="hidden sm:flex gap-4">
                        <a
                            href="https://github.com/harshitchaunal321"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/harshitchaunal/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <div
                            className={`w-[28px] h-[28px] object-contain cursor-pointer ${toggle ? "text-black dark:text-white" : "text-gray-500"
                                }`}
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? (
                                <div className="text-3xl">×</div>
                            ) : (
                                <div className="text-3xl">☰</div>
                            )}
                        </div>

                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                        >
                            <ul className="list-none flex flex-col justify-end items-start gap-4">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${active === link.title
                                            ? "text-white"
                                            : "text-gray-400"
                                            } font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                                <li className="flex gap-4">
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
                                        href="https://leetcode.com/u/harshitchaunal123/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        <FaCode size={20} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;