"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Company: [
            { name: "About Us", href: "#about" },
            { name: "Gallery", href: "#gallery" },
            { name: "Partners", href: "#partners" },
            { name: "Contact", href: "#contact" },
        ],
        Legal: [
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Terms of Use", href: "#terms" },
            { name: "Refund Policy", href: "#refund" },
            { name: "FAQ", href: "#faq" },
        ],
        Services: [
            { name: "Art Consultation", href: "#" },
            { name: "Custom Framing", href: "#" },
            { name: "Art Installation", href: "#" },
            { name: "Artwork Swap", href: "#" },
        ],
    };

    return (
        <footer className="bg-[var(--card-bg)] border-t border-[var(--border)]">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.h3
                            className="text-3xl font-bold mb-4"
                            style={{ fontFamily: "var(--font-display)" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="gradient-text">BOYD</span>
                        </motion.h3>
                        <p className="text-[var(--secondary)] mb-6 leading-relaxed">
                            Online Art Gallery & Design Studio. Expanding the canvas of collaboration
                            for artists, designers, and decorators worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:[email protected]"
                                className="flex items-center gap-3 text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                            >
                                <Mail size={18} />
                                <span>[email protected]</span>
                            </a>
                            <a
                                href="tel:+971505167117"
                                className="flex items-center gap-3 text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                            >
                                <Phone size={18} />
                                <span>+971 (50) 516 71 17</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <motion.a
                                href="https://www.instagram.com/boyd.ae"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass rounded-xl hover:bg-[var(--accent)] hover:text-white transition-all"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-lg font-semibold mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="glass p-8 rounded-2xl mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                            Subscribe to Our Newsletter
                        </h4>
                        <p className="text-[var(--secondary)] mb-6">
                            Get the latest updates on new artworks, exhibitions, and exclusive offers
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                            />
                            <motion.button
                                type="submit"
                                className="px-8 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:bg-[var(--accent-hover)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border)]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[var(--secondary)] text-sm">
                            © {currentYear} BOYD Online Art Gallery. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#privacy" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors">
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
