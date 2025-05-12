import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { skills } from "../constants/skills";
import "../styles/Skills.css";

const SkillPill = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="skill-pill"
        >
            <div className="skill-pill__icon">{skill.icon}</div>
            <span className="skill-pill__name">{skill.name}</span>
            <div className="skill-pill__experience">{skill.experience}</div>
        </motion.div>
    );
};

const SkillCategory = ({ title, skills, icon, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="skill-category"
            style={{ "--category-color": color }}
        >
            <div className="skill-category__header">
                <div className="skill-category__icon" style={{ backgroundColor: color }}>
                    {icon}
                </div>
                <h3 className="skill-category__title">{title}</h3>
            </div>
            <div className="skill-pills">
                {skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="skills-header"
                >
                    <h2 className="skills-title">
                        <span className="skills-title__highlight">Technical</span> Expertise
                    </h2>
                    <p className="skills-subtitle">
                        Technologies I've mastered through years of hands-on experience
                    </p>
                    <div className="skills-header__divider"></div>
                </motion.div>

                <div className="skills-grid">
                    <SkillCategory
                        title="Frontend Development"
                        skills={skills.frontend}
                        icon={<FaCode />}
                        color="#3B82F6"
                    />
                    <SkillCategory
                        title="Backend Development"
                        skills={skills.backend}
                        icon={<FaServer />}
                        color="#10B981"
                    />
                    <SkillCategory
                        title="Database"
                        skills={skills.database}
                        icon={<FaDatabase />}
                        color="#EC4899"
                    />
                    <SkillCategory
                        title="DevOps & Cloud"
                        skills={skills.devops}
                        icon={<FaCloud />}
                        color="#F59E0B"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;