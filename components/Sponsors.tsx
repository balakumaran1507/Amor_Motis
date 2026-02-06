"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Sponsors = () => {
    return (
        <section className="relative w-full flex flex-col items-center justify-center pt-20 pb-40 md:pt-32 md:pb-64 overflow-hidden" style={{ background: "#f9ecf3" }}>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[#c17c8e]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center z-10">

                {/* Headers */}
                <div className="mb-20 md:mb-32 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[#c17c8e] text-2xl md:text-4xl mb-2"
                        style={{ fontFamily: 'var(--font-pinyon), cursive' }}
                    >
                        In Collaboration With
                    </motion.span>


                </div>

                {/* Logos Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-6xl mx-auto">
                    {/* Etherence */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#c17c8e]/20 to-[#AA8D6F]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-48 h-24 md:w-72 md:h-32 bg-white/40 backdrop-blur-md border border-[#c17c8e]/10 rounded-xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-[#c17c8e]/50 group-hover:bg-white/70">
                            <span className="text-[#AA8D6F] font-adieu text-lg md:text-2xl font-bold tracking-widest group-hover:text-[#c17c8e] transition-colors">
                                ETHERENCE
                            </span>
                        </div>
                    </motion.div>

                    {/* Zapsters */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#c17c8e]/20 to-[#AA8D6F]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-48 h-24 md:w-72 md:h-32 bg-white/40 backdrop-blur-md border border-[#c17c8e]/10 rounded-xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-[#c17c8e]/50 group-hover:bg-white/70">
                            <span className="text-[#AA8D6F] font-adieu text-lg md:text-2xl font-bold tracking-widest group-hover:text-[#c17c8e] transition-colors">
                                ZAPSTERS
                            </span>
                        </div>
                    </motion.div>

                    {/* Dedsec X01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#c17c8e]/20 to-[#AA8D6F]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-48 h-24 md:w-72 md:h-32 bg-white/40 backdrop-blur-md border border-[#c17c8e]/10 rounded-xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-[#c17c8e]/50 group-hover:bg-white/70">
                            <span className="text-[#AA8D6F] font-adieu text-lg md:text-2xl font-bold tracking-widest group-hover:text-[#c17c8e] transition-colors">
                                DEDSEC X01
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
