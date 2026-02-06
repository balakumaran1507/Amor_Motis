"use client";

import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <footer id="footer" className="relative w-full bg-[#fffdfe] text-[#AA8D6F] px-6 pt-20 pb-10 overflow-hidden font-adieu">

            {/* TOP SECTION: COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 max-w-[1400px] mx-auto">

                {/* SITE INDEX (2 COLS) */}
                <div className="col-span-1 md:col-span-2">
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

                {/* SOCIALS (2 COLS) */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-sm uppercase tracking-widest mb-6 opacity-60">Social</h3>
                    <ul className="space-y-4 text-lg md:text-xl font-medium tracking-wide">
                        <li>
                            <div className="flex flex-col">
                                <Link href="https://instagram.com/cybercom.live" target="_blank" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    Instagram
                                </Link>
                                <span className="text-[10px] md:text-xs opacity-50 lowercase mt-1">@cybercom.live</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col">
                                <Link href="https://www.linkedin.com/company/cybercom-live" target="_blank" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    LinkedIn
                                </Link>
                                <span className="text-[10px] md:text-xs opacity-50 mt-1">Cybercom</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col">
                                <Link href="https://x.com/CybercomLive" target="_blank" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    Twitter
                                </Link>
                                <span className="text-[10px] md:text-xs opacity-50 lowercase mt-1">@CybercomLive</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* SPONSORS (2 COLS) */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-sm uppercase tracking-widest mb-6 opacity-60">Sponsors</h3>
                    <ul className="space-y-4 text-lg md:text-xl font-medium tracking-wide">
                        <li>
                            <div className="flex flex-col">
                                <Link href="https://zapsters.in" target="_blank" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    Zapsters
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col">
                                <Link href="#" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    Etherence
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col">
                                <Link href="#" className="cursor-pointer hover:opacity-70 transition-opacity uppercase leading-none">
                                    DEDSEC X01
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* CONTACT CARD (6 COLS) */}
                <div className="col-span-1 md:col-span-6 flex justify-start md:justify-end">
                    <div className="w-full md:w-[400px] h-[220px] bg-transparent border border-[#AA8D6F] text-[#AA8D6F] p-8 flex flex-col justify-between items-start rounded-sm hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full flex justify-between items-start">
                            <span className="uppercase text-sm tracking-widest opacity-80">Get in touch</span>
                            <span className="w-2 h-2 bg-[#AA8D6F] rounded-full animate-pulse"></span>
                        </div>

                        <div className="text-2xl font-bold tracking-wider">
                            Contact Us <span className="text-[#AA8D6F]/60">•</span>
                        </div>

                        <div className="mt-auto">
                            <div className="text-sm uppercase tracking-widest opacity-80">
                                founders@cybercom.live
                            </div>
                            <div className="text-xs uppercase tracking-widest opacity-60 mt-1">
                                www.cybercom.live
                            </div>
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

                <div className="font-bold tracking-[0.2em] opacity-80">
                    AMOR VINCIT OMNIA
                </div>

                <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
                    <p>Authored By DEDSEC X01</p>
                    <span className="text-[10px] tracking-wider opacity-60">Powered by Etherence</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
