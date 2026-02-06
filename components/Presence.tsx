"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const Presence = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(textRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.9]);
    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
    const floralRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const floralScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

    return (
        <section
            id="presence"
            ref={containerRef}
            className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden"
            style={{ background: "#f9ecf3" }}
        >
            {/* Animated background florals */}
            <motion.div
                style={{ scale: bgScale }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* Large decorative roses - Top Left */}
                <motion.div
                    style={{ rotate: floralRotate, scale: floralScale }}
                    className="absolute -top-20 -left-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
                >
                    <Image src="/roses_cluster.png" alt="" fill className="object-contain opacity-40" />
                </motion.div>

                {/* Large decorative roses - Bottom Right */}
                <motion.div
                    style={{ rotate: useTransform(floralRotate, v => -v), scale: floralScale }}
                    className="absolute -bottom-20 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
                >
                    <Image src="/roses_cluster.png" alt="" fill className="object-contain opacity-40 rotate-180" />
                </motion.div>

                {/* Floating petals */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            rotate: [0, 360],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 8 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                        className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full"
                        style={{
                            background: `linear-gradient(135deg, ${i % 2 === 0 ? '#e7a1b0' : '#c17c8e'}, transparent)`,
                            left: `${10 + (i * 7)}%`,
                            top: `${20 + (i * 5) % 60}%`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Main content */}
            <motion.div
                ref={textRef}
                style={{ y: contentY }}
                className="relative z-10 flex flex-col items-center text-center px-6"
            >


                {/* Subtitle */}
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-[#AA8D6F]/60 text-xs md:text-sm tracking-[0.5em] uppercase font-adieu mb-6"
                >
                    A Valentine&apos;s Day CTF Experience
                </motion.span>

                {/* CYBERCOM - Split into two lines */}
                <div className="flex flex-col items-center mb-4 leading-none relative z-20">
                    {/* CYBER */}
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: 100, opacity: 0, rotateX: 20 }}
                            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
                            className="text-[#AA8D6F] text-5xl md:text-8xl lg:text-[12rem] font-adieu font-bold tracking-tight leading-none"
                        >
                            {"CYBER".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ filter: "blur(20px)", opacity: 0, y: 50, rotateX: 45 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.1 + i * 0.07,
                                        type: "spring",
                                        damping: 15
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>

                    {/* COM */}
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[#AA8D6F] text-5xl md:text-8xl lg:text-[12rem] font-adieu font-bold tracking-tight leading-none"
                        >
                            {"COM".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ filter: "blur(20px)", opacity: 0, y: 50, rotateX: 45 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + i * 0.07,
                                        type: "spring",
                                        damping: 15
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>
                </div>

                {/* PRESENTS with dramatic reveal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="flex items-center gap-4 md:gap-8 mb-8 relative z-20"
                >
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#c17c8e]"
                    />
                    <motion.div
                        initial={{ letterSpacing: "1em", opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ letterSpacing: "0.4em", opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                    >
                        <span className="text-[#c17c8e] text-xl md:text-4xl uppercase font-adieu">
                            PRESENTS
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#c17c8e]"
                    />
                </motion.div>
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f9ecf3] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f9ecf3] to-transparent pointer-events-none" />
        </section>
    );
};

export default Presence;
