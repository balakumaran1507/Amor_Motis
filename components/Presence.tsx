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
                    className="absolute -top-10 -left-10 w-[50vw] h-[50vw] md:-top-20 md:-left-20 md:w-[600px] md:h-[600px]"
                >
                    <Image
                        src="/roses_cluster.webp"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-contain opacity-40"
                    />
                </motion.div>

                {/* Large decorative roses - Bottom Right */}
                <motion.div
                    style={{ rotate: useTransform(floralRotate, v => -v), scale: floralScale }}
                    className="absolute -bottom-10 -right-10 w-[50vw] h-[50vw] md:-bottom-20 md:-right-20 md:w-[600px] md:h-[600px]"
                >
                    <Image
                        src="/roses_cluster.webp"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-contain opacity-40 rotate-180"
                    />
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
                    className="!text-[#000000] text-xs md:text-sm tracking-[0.5em] uppercase font-adieu mb-6"
                    style={{ color: "#000000" }}
                >
                    A Valentine&apos;s Day CTF Experience
                </motion.span>

                {/* CYBERCOM - Split into two lines */}
                <div className="flex flex-col items-center mb-4 leading-none relative z-20">
                    {/* CYBER */}
                    <div className="">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="!text-[#000000] text-4xl sm:text-5xl md:text-8xl lg:text-[12rem] font-adieu font-bold tracking-tight leading-none"
                            style={{ color: "#000000" }}
                        >
                            {"CYBER".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ filter: "blur(5px)", opacity: 0, y: 10 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 + i * 0.05,
                                    }}
                                    className="inline-block !text-[#000000]"
                                    style={{ color: "#000000" }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>

                    {/* COM */}
                    <div className="">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="!text-[#000000] text-4xl sm:text-5xl md:text-8xl lg:text-[12rem] font-adieu font-bold tracking-tight leading-none"
                            style={{ color: "#000000" }}
                        >
                            {"COM".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ filter: "blur(5px)", opacity: 0, y: 10 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + i * 0.05,
                                    }}
                                    className="inline-block !text-[#000000]"
                                    style={{ color: "#000000" }}
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
                        className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#000000]"
                    />
                    <motion.div
                        initial={{ letterSpacing: "1em", opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ letterSpacing: "0.4em", opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                    >
                        <span className="!text-[#000000] text-xl md:text-4xl uppercase font-adieu font-bold" style={{ color: "#000000" }}>
                            PRESENTS
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#000000]"
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
