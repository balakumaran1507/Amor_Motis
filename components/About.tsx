"use client";

import React, { useEffect, useState } from "react";
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

/* TIME CARD */
const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4 md:mx-8">
        <motion.span
            key={value}
            animate={{ y: [5, 0], opacity: [0.5, 1] }}
            transition={{ duration: 0.3 }}
            className="text-6xl md:text-9xl font-bold text-[#AA8D6F] font-adieu leading-none"
        >
            {String(value).padStart(2, "0")}
        </motion.span>

        <span className="mt-4 text-xs md:text-sm tracking-[0.3em] text-[#AA8D6F]/60 uppercase font-adieu">
            {label}
        </span>
    </div>
);

/* ABOUT SECTION */
const About = () => {
    const [time, setTime] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="about"
            className="relative min-h-[50vh] w-full flex flex-col items-center justify-center py-20 overflow-hidden"
            style={{ background: "#f9ecf3" }}
        >
            {/* DECORATIVE TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#AA8D6F] text-sm md:text-base font-adieu tracking-[0.4em] uppercase mb-16 opacity-80"
            >
                The Event Begins In
            </motion.h2>

            {/* COUNTDOWN */}
            <div className="relative z-10 w-full">
                <div className="flex flex-wrap justify-center items-center">
                    <TimeCard value={time.days} label="Days" />

                    <span className="hidden md:block text-4xl md:text-6xl text-[#AA8D6F]/30 font-adieu mx-4 pb-12">:</span>

                    <TimeCard value={time.hours} label="Hours" />

                    <span className="hidden md:block text-4xl md:text-6xl text-[#AA8D6F]/30 font-adieu mx-4 pb-12">:</span>

                    <TimeCard value={time.minutes} label="Mins" />

                    <span className="hidden md:block text-4xl md:text-6xl text-[#AA8D6F]/30 font-adieu mx-4 pb-12">:</span>

                    <TimeCard value={time.seconds} label="Secs" />
                </div>
            </div>

            {/* BOTTOM DECORATION */}
            <div className="mt-20 w-[1px] h-32 bg-gradient-to-b from-[#AA8D6F] to-transparent opacity-30"></div>

        </section>
    );
};

export default About;
