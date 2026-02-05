"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#fffdfe] text-[#AA8D6F] px-6 pt-20 pb-10 overflow-hidden font-adieu">

            {/* TOP SECTION: COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 max-w-[1400px] mx-auto">

                {/* SITE INDEX */}
                <div className="col-span-1 md:col-span-3">
                    <h3 className="text-sm uppercase tracking-widest mb-6 opacity-60">Site Index</h3>
                    <ul className="space-y-3 text-lg md:text-xl font-medium tracking-wide">
                        {["Home", "About", "Gallery", "Leaderboard"].map((item) => (
                            <li key={item}>
                                <Link href={`#${item.toLowerCase()}`} className="cursor-pointer hover:opacity-70 transition-opacity uppercase">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SOCIALS */}
                <div className="col-span-1 md:col-span-3">
                    <h3 className="text-sm uppercase tracking-widest mb-6 opacity-60">Social</h3>
                    <ul className="space-y-3 text-lg md:text-xl font-medium tracking-wide">
                        {["Instagram", "Discord", "LinkedIn"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="cursor-pointer hover:opacity-70 transition-opacity uppercase">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT CARD (Right Side) */}
                <div className="col-span-1 md:col-span-6 flex justify-start md:justify-end">
                    <div className="w-full md:w-[400px] h-[200px] bg-[#1a1a1a] text-[#AA8D6F] p-8 flex flex-col justify-between items-start rounded-sm shadow-xl">
                        <div className="w-full flex justify-between items-start">
                            <span className="uppercase text-sm tracking-widest opacity-80">Get in touch</span>
                            <span className="w-2 h-2 bg-[#AA8D6F] rounded-full animate-pulse"></span>
                        </div>

                        <div className="text-2xl font-bold tracking-wider">
                            Contact Us <span className="text-[#AA8D6F]/60">•</span>
                        </div>

                        <div className="text-sm uppercase tracking-widest opacity-80 mt-auto">
                            cybercom@example.com
                        </div>
                    </div>
                </div>
            </div>

            {/* SPACER FOR BIG TEXT */}
            <div className="h-20 md:h-32"></div>

            {/* BIG FOOTER TEXT */}
            <div className="w-full flex justify-center items-end border-t border-[#AA8D6F]/20 pt-10">
                <h1 className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold tracking-tight uppercase text-center select-none">
                    CYBERCOM
                </h1>
            </div>

            {/* CREDITS ROW */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-10 text-xs md:text-sm uppercase tracking-widest opacity-60 gap-4">
                <p>&copy; 2026 Amor Mortis. All Rights Reserved.</p>

                <div className="flex items-center gap-2">
                    <span>Made with </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-[#AA8D6F]"
                        style={{ transform: "scale(1.2) translateY(-1px)" }}
                    >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    <span>with <a href="https://zapsters.in" className="font-bold border-b border-[#AA8D6F] pb-0.5 hover:opacity-50 transition-opacity">Zapsters</a></span>
                </div>

                <p>Designed by Neux</p>
            </div>

        </footer>
    );
};

export default Footer;
