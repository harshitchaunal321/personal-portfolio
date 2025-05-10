import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants/data";
import "../styles/Testimonials.css";

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
            <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                    />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                        {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                        {testimonial.designation}, {testimonial.company}
                    </p>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.testimonial}"
            </p>
        </motion.div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;