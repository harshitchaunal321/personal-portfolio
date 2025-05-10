import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/data";
import "../styles/Experience.css";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#f9f9f9",
                color: "#333",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-xl font-bold text-black">{experience.title}</h3>
                <p className="text-gray-600 font-semibold m-0">{experience.company_name}</p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-gray-600 text-sm pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="mt-20">
                    <VerticalTimeline lineColor="#e5e7eb">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={`experience-${index}`} experience={experience} />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Experience;