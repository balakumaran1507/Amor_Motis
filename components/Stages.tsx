"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Stages = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Update Auth Profile
            await updateProfile(user, { displayName: formData.username });

            // Save to Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                username: formData.username,
                email: formData.email,
                createdAt: new Date().toISOString()
            });

            setStatus("success");
            // Close after success
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus("idle");
                setFormData({ username: "", email: "", password: "" });
            }, 2000);

        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong.");
        }
    };

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            id="stages"
            className="relative min-h-[85vh] h-auto md:h-[140vh] w-full flex items-center justify-center overflow-hidden scroll-mt-48 pb-20 md:pb-0"
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
                className="absolute top-10 md:top-10 z-40 text-center w-full px-4"
            >
                <h2 className="text-4xl md:text-8xl font-bold font-adieu text-[#AA8D6F] mb-4">
                    7 Stages
                </h2>
                <p className="text-lg md:text-2xl font-adieu text-[#AA8D6F] tracking-widest">
                    Love, until you die
                </p>

                {/* JOIN NOW BUTTON WITH IMAGE BG */}
                <motion.button
                    onClick={() => setIsModalOpen(true)}
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
                    y: isMobile ? 300 : 190,
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
                    y: isMobile ? 300 : 190,
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
                    y: isMobile ? 250 : 75,
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
                    y: isMobile ? 400 : 470,
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
                    y: isMobile ? 400 : 490,
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
                    y: isMobile ? 400 : 490,
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



            {/* RESTORED FOOTER */}
            <div className="absolute bottom-10 md:bottom-10 w-full flex flex-col items-center justify-center z-40 text-center">
                <h2 className="font-adieu font-bold text-[#AA8D6F] text-5xl md:text-9xl leading-none tracking-tighter opacity-90 mb-4">
                    CYBERCOM
                </h2>

                <p className="font-adieu text-[#AA8D6F] text-xs md:text-sm tracking-widest flex items-center gap-2">
                    MADE WITH LOVE , WITH

                    {/* HEART SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-[#e7a1b0]"
                        style={{
                            scale: 1.2,
                            x: 0,
                            y: -3,
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

            {/* Registration Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
                            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,245,250,0.8))" }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-[#c17c8e] hover:text-[#AA8D6F] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h3 className="text-2xl font-adieu text-[#c17c8e] text-center mb-6 tracking-wider">
                                {status === "success" ? "Welcome Aboard" : "Register"}
                            </h3>

                            {status === "success" ? (
                                <div className="text-center text-[#AA8D6F] font-adieu py-10">
                                    <p>Registration Successful!</p>
                                    <p className="text-sm mt-2 opacity-70">Redirecting you to the void...</p>
                                </div>
                            ) : (
                                <form className="flex flex-col gap-5" onSubmit={handleRegister}>
                                    <div className="space-y-4">
                                        {/* Username Input */}
                                        <div className="group">
                                            <label className="block text-[#AA8D6F] text-xs font-adieu uppercase tracking-widest mb-1.5 ml-1">Username</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your username"
                                                value={formData.username}
                                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                                required
                                                className="w-full bg-white/50 border border-[#c17c8e]/30 rounded-xl px-5 py-3 text-[#c17c8e] placeholder-[#c17c8e]/40 font-adieu text-sm focus:outline-none focus:border-[#c17c8e] focus:bg-white/80 transition-all duration-300"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className="group">
                                            <label className="block text-[#AA8D6F] text-xs font-adieu uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="w-full bg-white/50 border border-[#c17c8e]/30 rounded-xl px-5 py-3 text-[#c17c8e] placeholder-[#c17c8e]/40 font-adieu text-sm focus:outline-none focus:border-[#c17c8e] focus:bg-white/80 transition-all duration-300"
                                            />
                                        </div>

                                        {/* Password Input */}
                                        <div className="group">
                                            <label className="block text-[#AA8D6F] text-xs font-adieu uppercase tracking-widest mb-1.5 ml-1">Password</label>
                                            <input
                                                type="password"
                                                placeholder="Create a password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                required
                                                className="w-full bg-white/50 border border-[#c17c8e]/30 rounded-xl px-5 py-3 text-[#c17c8e] placeholder-[#c17c8e]/40 font-adieu text-sm focus:outline-none focus:border-[#c17c8e] focus:bg-white/80 transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    {status === "error" && (
                                        <div className="text-red-500 text-xs font-adieu text-center">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === "loading"}
                                        className={`relative w-full py-4 bg-gradient-to-r from-[#c17c8e] to-[#AA8D6F] text-white text-sm tracking-[0.2em] uppercase font-adieu rounded-xl overflow-hidden shadow-lg mt-2 ${status === "loading" ? "opacity-70 cursor-wait" : ""}`}
                                        type="submit"
                                    >
                                        <span className="relative z-10">{status === "loading" ? "Processing..." : "Sign Up"}</span>
                                        <motion.div
                                            animate={{ x: [-400, 400] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        />
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Stages;
