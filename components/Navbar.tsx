"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Gallery", href: "#gallery" },
        { name: "About", href: "#about" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: 24 }}   // ⬅ moves navbar down
            className="relative w-full bg-[#F6EBEB] z-20"
        >

            <div className="container mx-auto px-6 pt-32 pb-12 relative">
                <div className="flex items-center justify-between relative">

                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl md:text-3xl font-bold tracking-tight text-[#AA8D6F] shrink-0 relative z-30 font-adieu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        CYBERCOM
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center items-center gap-16 ml-12">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-wide text-black hover:text-black/70 relative font-adieu"
                                whileHover={{
                                    scale: 1.08,
                                    y: -3,
                                    x: index % 2 === 0 ? 2 : -2,
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 18,
                                }}
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-300 hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 relative z-30"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="md:hidden overflow-hidden bg-[#F6EBEB]"
                        >
                            <div className="pt-8 pb-4 space-y-6">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-xl font-medium text-black font-adieu"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        whileHover={{ x: 6, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 250 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
