"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30); // Trigger sooner for smaller navbar
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Presence", href: "#presence" },
        { name: "Countdown", href: "#register" },
        { name: "Registrations", href: "#stages" },
        { name: "Contact", href: "#footer" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
        } else if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMobileMenuOpen
                ? "bg-white/30 backdrop-blur-md shadow-sm py-3" // Slightly larger padding
                : "bg-transparent py-6" // Restored larger padding
                }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="text-2xl md:text-3xl font-bold tracking-tight text-[#c17c8e] font-adieu relative z-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        CYBERCOM
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xs font-medium tracking-widest uppercase text-[#AA8D6F] hover:text-[#c17c8e] transition-colors relative font-adieu group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c17c8e] transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}

                        <div className="flex items-center gap-6 ml-8">
                            <motion.a
                                href="#footer"
                                onClick={(e) => handleNavClick(e, "#footer")}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xs font-adieu uppercase tracking-widest text-[#AA8D6F] relative group overflow-hidden py-1"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#c17c8e]">
                                    Partner
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c17c8e] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </motion.a>

                            <motion.a
                                href="#stages"
                                onClick={(e) => handleNavClick(e, "#stages")}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="group relative px-4 py-2 overflow-hidden"
                            >
                                {/* Subtle background hover */}
                                <div className="absolute inset-0 bg-[#c17c8e]/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                                <div className="relative flex items-center justify-center min-w-[80px]">
                                    {/* Layer 1: Normal Font */}
                                    <span className="text-xs font-adieu uppercase tracking-widest text-[#c17c8e] transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 group-hover:blur-[2px]">
                                        Enter CTF
                                    </span>

                                    {/* Layer 2: Cursive Font */}
                                    <span className="absolute text-xl text-[#c17c8e] transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                                        style={{ fontFamily: 'var(--font-pinyon), cursive' }}>
                                        Register
                                    </span>
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-[#AA8D6F] relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? <X size={24} color="#c17c8e" /> : <Menu size={24} />} {/* Smaller icon */}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full h-screen bg-[#fdf5f8] flex flex-col items-center justify-center space-y-8 md:hidden shadow-xl"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="text-xl font-adieu text-[#AA8D6F] uppercase tracking-widest hover:text-[#c17c8e]" // Smaller mobile font
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
