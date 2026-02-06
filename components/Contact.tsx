"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { Button } from "./ui/Button";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            value: "+971 (50) 516 71 17",
            link: "tel:+971505167117",
        },
        {
            icon: Mail,
            title: "Email",
            value: "[email protected]",
            link: "mailto:[email protected]",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Dubai, UAE",
            link: "#",
        },
    ];

    return (
        <section id="contact" className="section bg-gradient-to-br from-[var(--muted)] to-[var(--background)]">
            <div className="container" ref={ref}>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
                        Have any questions? Send us a message and we&apos;ll get back to you within 12 hours
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3
                                className="text-3xl font-bold mb-6"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Looking for partners in
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Design", "Art", "Decoration"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-6 py-3 bg-[var(--accent)] text-white rounded-full font-semibold text-lg"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className="glass p-6 rounded-2xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.02, x: 10 }}
                                >
                                    <div className="p-4 bg-[var(--accent)] rounded-xl group-hover:scale-110 transition-transform">
                                        <info.icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--secondary)] text-sm mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-lg font-medium">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <motion.a
                                    href="https://www.instagram.com/boyd.ae"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 glass rounded-xl hover:bg-[var(--accent)] hover:text-white transition-all"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Instagram size={24} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass p-8 rounded-3xl"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-[var(--secondary)]">
                                    We&apos;ll get back to you within 12 hours
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2 text-[var(--secondary)]"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2 text-[var(--secondary)]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                                        placeholder="[email protected]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium mb-2 text-[var(--secondary)]"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 text-[var(--secondary)]"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                                    <Send size={20} />
                                    Send Message
                                </Button>

                                <p className="text-xs text-[var(--secondary)] text-center">
                                    By clicking the button, you agree to our{" "}
                                    <a href="#" className="text-[var(--accent)] hover:underline">
                                        Terms of Use
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-[var(--accent)] hover:underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
