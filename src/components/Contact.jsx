import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_your_service_id",
                "template_your_template_id",
                {
                    from_name: form.name,
                    to_name: "Your Name",
                    from_email: form.email,
                    to_email: "your.email@example.com",
                    message: form.message,
                },
                "your_public_key"
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });

                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                    <FaEnvelope className="text-primary text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                                        Email
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        your.email@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                    <FaPhone className="text-primary text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                                        Phone
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        +1 (123) 456-7890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-primary text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                                        Location
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                            {success && (
                                <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;