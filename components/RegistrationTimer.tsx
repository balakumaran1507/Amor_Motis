"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

/* TARGET DATE */
const TARGET_DATE = new Date("2026-02-14T04:30:00.000Z");



const RegistrationTimer = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const frameScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
    const frameOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const rosesY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const [particles, setParticles] = useState<{ id: number; duration: number; delay: number; left: number; top: number }[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        const particleCount = window.innerWidth < 768 ? 8 : 20;
        setParticles(Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 5,
            left: Math.random() * 100,
            top: 60 + Math.random() * 40,
        })));
    }, []);



    return (
        <section
            ref={sectionRef}
            className="relative min-h-[80vh] md:min-h-[110vh] w-full flex flex-col items-center justify-start pt-20 md:pt-32 pb-20 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f9ecf3 0%, #fdf5f8 30%, #fff8fa 50%, #fdf5f8 70%, #f9ecf3 100%)" }}
        >
            {/* Animated background roses */}
            <motion.div style={{ y: rosesY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-5 w-32 h-32 md:w-48 md:h-48 opacity-30">
                    <Image src="/roses_cluster.webp" alt="" fill className="object-contain" />
                </div>
                <div className="absolute top-1/4 right-10 w-40 h-40 md:w-56 md:h-56 opacity-25 rotate-45">
                    <Image src="/roses_cluster.webp" alt="" fill className="object-contain" />
                </div>
                <div className="absolute bottom-20 left-10 w-36 h-36 md:w-52 md:h-52 opacity-30 -rotate-12">
                    <Image src="/roses_cluster.webp" alt="" fill className="object-contain" />
                </div>
                <div className="absolute bottom-1/3 right-5 w-28 h-28 md:w-44 md:h-44 opacity-25 rotate-180">
                    <Image src="/roses_cluster.webp" alt="" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Main Glass Card Container */}
            <motion.div
                style={{ scale: frameScale, opacity: frameOpacity }}
                id="register"
                className="relative w-full max-w-5xl mx-auto px-4 md:px-6 z-10 scroll-mt-32"
            >
                <div className="relative bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/50 shadow-[0_20px_50px_rgba(193,124,142,0.15)] overflow-visible p-8 md:p-20">



                    {/* Additional floral accents */}
                    <div className="absolute top-0 right-0 w-full h-full border border-white/60 rounded-[3rem] pointer-events-none transform scale-95 opacity-50" />



                    {/* Content Content */}
                    <div ref={titleRef} className="flex flex-col items-center text-center relative z-10">
                        {/* Event Title */}
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isTitleInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[#c17c8e] text-4xl md:text-7xl lg:text-8xl font-normal tracking-wide mb-4 drop-shadow-sm select-none w-full break-words"
                            style={{ fontFamily: 'var(--font-pinyon), cursive' }}
                        >
                            Amor.Mortis
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.div
                            className="flex items-center gap-4 mb-8 md:mb-12 overflow-hidden w-full max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                                className="h-[1px] bg-[#AA8D6F]/40 flex-1"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                                className="text-[#AA8D6F] text-sm md:text-xl lg:text-2xl font-adieu uppercase tracking-[0.3em] whitespace-nowrap text-center px-4"
                            >
                                CTF Starts In
                            </motion.p>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                                className="h-[1px] bg-[#AA8D6F]/40 flex-1 max-w-[60px]"
                            />
                        </motion.div>

                        {/* Timer */}
                        <div className="flex items-start justify-center flex-nowrap z-20 relative p-2 md:p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 w-full max-w-full overflow-hidden">
                            {mounted ? (
                                <FlipClockCountdown
                                    to={TARGET_DATE}
                                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                                    labelStyle={{
                                        fontSize: isMobile ? 8 : 10,
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        color: '#AA8D6F',
                                        letterSpacing: isMobile ? '0.05em' : '0.2em',
                                        fontFamily: 'var(--font-adieu)',
                                        marginTop: 8
                                    }}
                                    digitBlockStyle={{
                                        width: isMobile ? 24 : 50,
                                        height: isMobile ? 36 : 75,
                                        fontSize: isMobile ? 20 : 40,
                                        color: '#AA8D6F',
                                        backgroundColor: 'white',
                                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-adieu)',
                                        border: '1px solid rgba(170, 141, 111, 0.3)',
                                        borderRadius: isMobile ? '0.25rem' : '0.5rem'
                                    }}
                                    dividerStyle={{ color: '#AA8D6F', height: 1 }}
                                    separatorStyle={{ color: '#AA8D6F', size: isMobile ? 2 : 4 }}
                                    duration={0.5}
                                />
                            ) : (
                                <div className="flex gap-4 items-center justify-center opacity-0" style={{ height: isMobile ? 75 : 105 }}>
                                    {/* Placeholder to prevent layout shift */}
                                    Loading Timer...
                                </div>
                            )}
                        </div>

                        {/* Date */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-6 md:mt-12 text-[#c17c8e] text-xs md:text-xl tracking-[0.15em] md:tracking-[0.2em] font-adieu font-medium bg-white/40 px-4 py-2 rounded-full border border-white/50"
                        >
                            February 14, 2026 • 4:30 AM UTC
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#e7a1b0]/40"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default RegistrationTimer;
