"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    /* ---------------- CORE MOTION STATE ---------------- */
    const progress = useMotionValue(0);
    const velocity = useRef(0);
    const raf = useRef<number | null>(null);

    /* ---------------- HELPERS ---------------- */


    /* ---------------- PHYSICS LOOP ---------------- */


    /* ---------------- RESPONSIVE STATE ---------------- */
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    /* ---------------- SCROLL CONTROL ---------------- */
    useEffect(() => {
        if (isMobile) return; // Disable custom scroll physics on mobile

        const clamp = (v: number, min = 0, max = 1) =>
            Math.min(Math.max(v, min), max);

        const startRAF = () => {
            if (raf.current !== null) return;

            let lastTime = performance.now();

            const loop = (time: number) => {
                const deltaTime = Math.min((time - lastTime) / 16.67, 2);
                lastTime = time;

                let p = progress.get();
                let v = velocity.current;

                p += v * deltaTime;

                if ((p <= 0 && v < 0) || (p >= 1 && v > 0)) {
                    v *= 0.4;
                }

                p = clamp(p);
                v *= Math.pow(0.92, deltaTime);

                progress.set(p);
                velocity.current = v;

                if (Math.abs(v) < 0.00002) {
                    velocity.current = 0;
                    raf.current = null;
                    return;
                }

                raf.current = requestAnimationFrame(loop);
            };

            raf.current = requestAnimationFrame(loop);
        };

        const lockScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const unlockScroll = () => {
            document.body.style.overflow = "";
        };

        lockScroll();

        const onWheel = (e: WheelEvent) => {
            const delta = e.deltaY;
            const p = progress.get();
            const force = delta * 0.00008;

            if (delta > 0 && p < 1) {
                e.preventDefault();
                lockScroll();
                velocity.current += force;
                startRAF();
                return;
            }

            if (delta < 0 && p > 0) {
                unlockScroll();
                velocity.current += force;
                startRAF();
                return;
            }

            unlockScroll();
        };

        window.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            unlockScroll();
            window.removeEventListener("wheel", onWheel);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [progress, isMobile]);



    /* ---------------- ANIMATION TRANSFORMS ---------------- */

    // Desktop vs Mobile Ranges
    const xLeft = useTransform(progress, [0, 1], ["0vw", isMobile ? "-120vw" : "-55vw"]);
    const yLeft = useTransform(progress, [0, 1], ["0%", "-20%"]);

    const xRight = useTransform(progress, [0, 1], ["0vw", isMobile ? "120vw" : "55vw"]);
    const yRight = useTransform(progress, [0, 1], ["0%", "-20%"]);

    const centerScale = useTransform(progress, [0, 1], [0.8, 1.2]);

    const textOpacity = useTransform(progress, [0, 0.8, 1], [0, 0, 1]);
    const textY = useTransform(progress, [0, 1], [40, 0]);

    /* ---------------- PARALLAX SCROLL ---------------- */
    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 300, 1300], [0, 0, 700]); // Delayed start, then moves down
    const centerImageY = useTransform(parallaxY, (v) => `calc(-50% + ${v}px)`);

    /* ---------------- JSX ---------------- */

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative h-[180vh] md:h-[250vh] bg-[#F6EBEB]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* CENTER IMAGE */}
                <motion.div
                    className="absolute z-10"
                    style={{
                        left: "50%",
                        top: isMobile ? "50%" : "52%",
                        translateX: "-50%",
                        y: centerImageY,
                        scale: centerScale,
                    }}
                >
                    <Image
                        src="/image3.png"
                        alt="Center visual"
                        width={400}
                        height={700}
                        priority
                        unoptimized
                        className={isMobile ? "w-[80vw] h-auto object-contain" : "w-[400px] h-auto object-contain"}
                        style={{ height: "auto" }}
                    />
                </motion.div>

                <motion.div
                    className="absolute z-20"
                    style={{
                        left: isMobile ? "50%" : "36%",
                        top: isMobile ? "50%" : "63.5%",
                        x: xLeft,
                        y: yLeft,
                        translateX: isMobile ? "-90%" : "-50%", // 🔧 Manual Mobile Adjust: Shift Left
                        translateY: "-50%",
                        scale: isMobile ? 1.15 : 1.1,
                    }}
                >
                    <Image
                        src="/image1.png"
                        alt="Left visual"
                        width={500}
                        height={800}
                        priority
                        unoptimized
                        className={isMobile ? "w-[85vw] h-auto object-contain" : "w-[500px] h-auto object-contain"}
                        style={{ height: "auto" }}
                    />
                </motion.div>

                <motion.div
                    className="absolute z-20"
                    style={{
                        right: isMobile ? "auto" : "41%",
                        left: isMobile ? "50%" : "auto",
                        top: isMobile ? "50%" : "62%",
                        x: xRight,
                        y: yRight,
                        translateX: isMobile ? "-25%" : "50%", // 🔧 Manual Mobile Adjust: Shift Right
                        translateY: "-50%",
                        scale: isMobile ? 1.15 : 1.1,
                    }}
                >
                    <Image
                        src="/image2.png"
                        alt="Right visual"
                        width={500}
                        height={800}
                        priority
                        unoptimized
                        className={isMobile ? "w-[85vw] h-auto object-contain" : "w-[500px] h-auto object-contain"}
                        style={{ height: "auto" }}
                    />
                </motion.div>

                {/* HERO TEXT */}
                <motion.div
                    className="relative z-0 text-center px-6"
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-7xl lg:text-8xl font-bold font-adieu tracking-[0.15em] md:tracking-[0.22em] uppercase text-[#AA8D6F]">
                        AMOR MORTIS
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg font-medium text-[#AA8D6F] font-adieu tracking-[0.2em] md:tracking-[0.3em] uppercase mt-4 md:mt-6">
                        Love Until it kills you
                    </p>

                </motion.div>

                {/* --- BLUR METRICS & LAYERS (JOINING SEAM FOCUS) --- */}

                {/* Layer 1: Seam Atmosphere (Low Intensity, Wider) */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#f9ecf3] to-transparent z-30 pointer-events-none" />

                {/* Layer 2: Seam Softener (Mid Intensity, Focused) */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9ecf3] via-[#f9ecf3]/90 to-transparent z-40 pointer-events-none backdrop-blur-[2px]" />

                {/* Layer 3: Seam Lock (High Intensity, Strict Joint) */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f9ecf3] z-50 pointer-events-none" />

            </div>
        </section>
    );
};

export default Hero;
