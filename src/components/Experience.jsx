import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants/data";
import "../styles/Experience.css";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="experience-card"
        >
            <div className="experience-card__header">
                <div className="experience-card__icon">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="experience-card__icon-img"
                    />
                </div>
                <div className="experience-card__date">{experience.date}</div>
            </div>

            <div className="experience-card__content">
                <h3 className="experience-card__title">{experience.title}</h3>
                <p className="experience-card__company">{experience.company_name}</p>

                <div className="experience-card__divider"></div>

                <ul className="experience-card__points">
                    {experience.points.map((point, i) => (
                        <motion.li
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="experience-card__point"
                        >
                            <span className="experience-card__point-marker"></span>
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="work" className="experience-section">
            <div className="experience-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="experience-header"
                >
                    <h2 className="experience-title">
                        <span className="experience-title__highlight">Professional</span> Journey
                    </h2>
                    <p className="experience-subtitle">
                        My career path and key accomplishments
                    </p>
                    <div className="experience-header__divider"></div>
                </motion.div>

                <div className="experience-timeline">
                    <div className="experience-timeline__line"></div>

                    <div className="experience-cards">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;