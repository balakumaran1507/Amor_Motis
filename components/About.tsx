"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* TARGET DATE */
const TARGET_DATE = new Date("2026-02-14T10:00:00");

/* TIME UTILS */
const getTimeRemaining = () => {
    const now = Date.now();
    const distance = TARGET_DATE.getTime() - now;

    if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
    };
};

/* TIME CARD (NO BOX, NO FRAME IMAGE) */
const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center relative w-14 h-20 md:w-32 md:h-44">
        <motion.span
            key={value}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-xl md:text-5xl font-bold text-neutral-800 font-adieu relative z-10 mt-5 md:mt-12"
        >
            {String(value).padStart(2, "0")}
        </motion.span>

        <span className="mt-2 md:mt-10 text-[8px] md:text-sm tracking-widest text-neutral-600 uppercase font-adieu">
            {label}
        </span>
    </div>
);


/* ABOUT SECTION */
const About = () => {
    const [time, setTime] = useState(getTimeRemaining());
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="about"
            className="relative h-[140vh] w-full flex items-center justify-center overflow-hidden"
            style={{ background: "#f9ecf3" }}
        >
            {/* BACKGROUND IMAGE */}
            <motion.div
                className="absolute z-0"
                style={{
                    scale: isMobile ? 1.18 : 1.25,
                    y: isMobile ? 50 : 100
                }}
            >
                <Image
                    src="/timeframe.png"
                    alt="Time frame decoration"
                    width={900}
                    height={600}
                    priority
                    className={isMobile ? "w-[95vw] h-auto object-contain" : "w-[900px] h-auto object-contain"}
                />
            </motion.div>

            {/* COUNTDOWN */}
            <motion.div
                className="relative z-10"
                style={{
                    x: 0,
                    y: -15,
                }}
            >
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <TimeCard value={time.days} label="DAYS" />
                    <TimeCard value={time.hours} label="HOURS" />
                    <TimeCard value={time.minutes} label="MINUTES" />
                    <TimeCard value={time.seconds} label="SECONDS" />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
