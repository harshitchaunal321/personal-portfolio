import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants/skills";
import "../styles/Skills.css";

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                {title}
            </h3>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                            </span>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {skill.level}
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: skill.level }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        My Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SkillCategory title="Frontend Development" skills={skills.frontend} />
                    <SkillCategory title="Backend Development" skills={skills.backend} />
                    <SkillCategory title="Database" skills={skills.database} />
                    <SkillCategory title="DevOps & Tools" skills={skills.devops} />
                </div>
            </div>
        </section>
    );
};

export default Skills;