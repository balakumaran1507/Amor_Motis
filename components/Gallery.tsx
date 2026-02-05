"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            id="gallery"
            className="relative h-[140vh] w-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#f9ecf3" }}
        >
            {/* --- TOP SEAM BLUR (Connected to Hero) --- */}

            {/* Layer 1: Seam Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f9ecf3] to-transparent z-10 pointer-events-none" />

            {/* Layer 2: Seam Softener */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f9ecf3] via-[#f9ecf3]/90 to-transparent z-20 pointer-events-none backdrop-blur-[2px]" />

            {/* Layer 3: Seam Lock */}
            <div className="absolute top-0 left-0 w-full h-16 bg-[#f9ecf3] z-30 pointer-events-none" />

            {/* SECTION TITLE */}
            <div
                className="absolute top-10 z-40 text-center"
            >
                <h2 className="text-4xl md:text-8xl font-bold font-adieu text-[#AA8D6F] mb-4">
                    7 Stages
                </h2>
                <p className="text-lg md:text-2xl font-adieu text-[#AA8D6F] tracking-widest">
                    Love, until you die
                </p>

                {/* JOIN NOW BUTTON WITH IMAGE BG */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 relative overflow-hidden rounded-full shadow-lg"
                    style={{
                        width: isMobile ? "200px" : "260px",
                        height: isMobile ? "60px" : "72px",
                        backgroundImage: "url('/button.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <span className="relative z-10 font-adieu font-bold text-sm md:text-lg tracking-widest text-[#f9ecf3]">
                        JOIN NOW
                    </span>
                </motion.button>
            </div>

            {/* PILLAR LEFT */}
            <motion.div
                className="absolute z-5"
                animate={{
                    x: isMobile ? -160 : -570,
                    scale: isMobile ? 1.2 : 2.5,
                    y: isMobile ? 470 : 190,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/pillar.png"
                    alt="Pillar back"
                    width={220}
                    height={600}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className={isMobile ? "w-[30vw] h-auto object-contain" : "w-[220px] h-auto object-contain"}
                />
            </motion.div>

            {/* PILLAR RIGHT */}
            <motion.div
                className="absolute z-5"
                animate={{
                    x: isMobile ? 160 : 570,
                    scale: isMobile ? 1.2 : 2.5,
                    y: isMobile ? 470 : 190,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/pillar1.png"
                    alt="Pillar1 back"
                    width={220}
                    height={600}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className={isMobile ? "w-[30vw] h-auto object-contain" : "w-[220px] h-auto object-contain"}
                />
            </motion.div>

            {/* MAIN TREE */}
            <motion.div
                className="relative z-20"
                animate={{
                    scale: isMobile ? 0.6 : 0.92,
                    y: isMobile ? 430 : 75,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/tree.png"
                    alt="Tree"
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className={isMobile ? "w-[80vw] h-auto object-contain" : "w-[600px] h-auto object-contain"}
                />
            </motion.div>

            {/* CLOUDS */}
            <motion.div
                className="absolute z-30"
                animate={{
                    scale: isMobile ? 1.3 : 1.5,
                    y: isMobile ? 590 : 470,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/cloud.png"
                    alt="Cloud"
                    width={900}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={isMobile ? "w-[90vw] h-auto object-contain" : "w-[900px] h-auto object-contain"}
                />
            </motion.div>

            <motion.div
                className="absolute z-30"
                animate={{
                    scale: isMobile ? 1.3 : 1.5,
                    x: isMobile ? -100 : -350,
                    y: isMobile ? 590 : 490,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/cloud.png"
                    alt="Cloud"
                    width={900}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={isMobile ? "w-[90vw] h-auto object-contain" : "w-[900px] h-auto object-contain"}
                />
            </motion.div>

            <motion.div
                className="absolute z-30"
                animate={{
                    scale: isMobile ? 1.3 : 1.5,
                    x: isMobile ? 100 : 350,
                    y: isMobile ? 590 : 490,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/cloud.png"
                    alt="Cloud"
                    width={900}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={isMobile ? "w-[90vw] h-auto object-contain" : "w-[900px] h-auto object-contain"}
                />
            </motion.div>

            {/* FOOTER */}
            {/* FOOTER */}
            <div className="absolute bottom-10 w-full flex flex-col items-center justify-center z-40 text-center">
                <h2 className="font-adieu font-bold text-[#AA8D6F] text-5xl md:text-9xl leading-none tracking-tighter opacity-90 mb-4">
                    CYBERCOM
                </h2>

                <p className="font-adieu text-[#AA8D6F] text-xs md:text-sm tracking-widest flex items-center gap-2">
                    MADE WITH LOVE , BY

                    {/* HEART SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-[#e7a1b0]"
                        style={{
                            scale: 1.2, // ⬅ scale heart
                            x: 0,       // ⬅ move left / right
                            y: -3,      // ⬅ move up / down
                        }}
                    >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>

                    <a
                        href="https://zapsters.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[#AA8D6F]/50 hover:decoration-[#AA8D6F] transition-all font-bold"
                    >
                        ZAPSTERS
                    </a>
                </p>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9ecf3] via-[#f9ecf3]/50 to-transparent z-1 pointer-events-none" />

        </section>
    );
};

export default Gallery;
