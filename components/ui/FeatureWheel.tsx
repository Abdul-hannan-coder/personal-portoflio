"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, LayoutDashboard, Zap, TrendingUp, Activity, Cpu, Layers } from "lucide-react";
import Image from "next/image";

export default function FeatureWheel() {
    const leftFeatures = [
        { icon: Bot, title: "AI Voice Agents", top: "lg:top-[140px]" },
        { icon: Workflow, title: "N8N Automation", top: "lg:top-[260px]" },
        { icon: LayoutDashboard, title: "Next.js Web Apps", top: "lg:top-[380px]" },
        { icon: Zap, title: "Tailwind CSS", top: "lg:top-[500px]" },
    ];

    const rightFeatures = [
        { icon: TrendingUp, title: "GoHighLevel CRM", top: "lg:top-[140px]" },
        { icon: Activity, title: "Make Integrations", top: "lg:top-[260px]" },
        { icon: Cpu, title: "React & TypeScript", top: "lg:top-[380px]" },
        { icon: Layers, title: "PostgreSQL", top: "lg:top-[500px]" },
    ];

    return (
        <section className="relative overflow-hidden bg-bg-primary py-24 sm:py-32 lg:py-48 w-full">
            <div className="mx-auto max-w-7xl px-6 text-center">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-10 flex w-fit items-center"
                >
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-6 py-2.5 shadow-[0_0_15px_rgba(255,106,0,0.1)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-60" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-secondary" />
                        </span>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-secondary">Core Expertise</span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl tracking-tight"
                >
                    Master of the <br className="md:hidden" />
                    <span className="relative inline-block text-accent-primary mt-2">
                        Digital Ecosystem
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-1 left-0 right-0 h-4 bg-accent-primary/10 -rotate-1 origin-left rounded-lg -z-10"
                        />
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mb-12 max-w-3xl text-lg text-text-secondary font-medium leading-relaxed"
                >
                    Integrating powerful front-end technologies with robust backend automation to build seamless, high-converting platforms.
                </motion.p>

                {/* Wheel Layout */}
                <div className="relative mx-auto mt-20 md:mt-32 max-w-7xl h-auto lg:h-[600px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-10">

                    {/* SVG Connector Rays */}
                    <div className="absolute inset-0 z-[11] hidden xl:block pointer-events-none">
                        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                {/* Glow filter */}
                                <filter id="ray-glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <filter id="ray-glow-core" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>

                                {/* Left rays — userSpaceOnUse: transparent at card, bright at image edge */}
                                <linearGradient id="lg-l1" gradientUnits="userSpaceOnUse" x1="292" y1="140" x2="480" y2="258">
                                    <stop offset="0%" stopColor="rgba(255,106,0,0)" />
                                    <stop offset="55%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,140,42,0.95)" />
                                </linearGradient>
                                <linearGradient id="lg-l2" gradientUnits="userSpaceOnUse" x1="292" y1="260" x2="480" y2="292">
                                    <stop offset="0%" stopColor="rgba(255,106,0,0)" />
                                    <stop offset="50%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,140,42,0.9)" />
                                </linearGradient>
                                <linearGradient id="lg-l3" gradientUnits="userSpaceOnUse" x1="292" y1="380" x2="480" y2="310">
                                    <stop offset="0%" stopColor="rgba(255,106,0,0)" />
                                    <stop offset="50%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,140,42,0.9)" />
                                </linearGradient>
                                <linearGradient id="lg-l4" gradientUnits="userSpaceOnUse" x1="292" y1="500" x2="480" y2="358">
                                    <stop offset="0%" stopColor="rgba(255,106,0,0)" />
                                    <stop offset="55%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,140,42,0.95)" />
                                </linearGradient>

                                {/* Right rays — userSpaceOnUse: bright at image edge, transparent at card */}
                                <linearGradient id="lg-r1" gradientUnits="userSpaceOnUse" x1="800" y1="258" x2="940" y2="140">
                                    <stop offset="0%" stopColor="rgba(255,140,42,0.95)" />
                                    <stop offset="45%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,106,0,0)" />
                                </linearGradient>
                                <linearGradient id="lg-r2" gradientUnits="userSpaceOnUse" x1="800" y1="292" x2="940" y2="260">
                                    <stop offset="0%" stopColor="rgba(255,140,42,0.9)" />
                                    <stop offset="50%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,106,0,0)" />
                                </linearGradient>
                                <linearGradient id="lg-r3" gradientUnits="userSpaceOnUse" x1="800" y1="310" x2="940" y2="380">
                                    <stop offset="0%" stopColor="rgba(255,140,42,0.9)" />
                                    <stop offset="50%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,106,0,0)" />
                                </linearGradient>
                                <linearGradient id="lg-r4" gradientUnits="userSpaceOnUse" x1="800" y1="358" x2="940" y2="500">
                                    <stop offset="0%" stopColor="rgba(255,140,42,0.95)" />
                                    <stop offset="45%" stopColor="rgba(255,106,0,0.55)" />
                                    <stop offset="100%" stopColor="rgba(255,106,0,0)" />
                                </linearGradient>
                            </defs>

                            {/* ── LEFT: Glow layer (wide + blurred) ── */}
                            <g filter="url(#ray-glow)" strokeWidth="5" fill="none">
                                <path d="M 480 258 L 375 140 L 292 140" stroke="url(#lg-l1)" />
                                <path d="M 480 292 L 360 260 L 292 260" stroke="url(#lg-l2)" />
                                <path d="M 480 310 L 360 380 L 292 380" stroke="url(#lg-l3)" />
                                <path d="M 480 358 L 375 500 L 292 500" stroke="url(#lg-l4)" />
                            </g>

                            {/* ── LEFT: Core layer (thin + crisp) ── */}
                            <g filter="url(#ray-glow-core)" strokeWidth="1.5" fill="none">
                                <path d="M 480 258 L 375 140 L 292 140" stroke="url(#lg-l1)" />
                                <path d="M 480 292 L 360 260 L 292 260" stroke="url(#lg-l2)" />
                                <path d="M 480 310 L 360 380 L 292 380" stroke="url(#lg-l3)" />
                                <path d="M 480 358 L 375 500 L 292 500" stroke="url(#lg-l4)" />
                            </g>

                            {/* ── RIGHT: Glow layer (wide + blurred) ── */}
                            <g filter="url(#ray-glow)" strokeWidth="5" fill="none">
                                <path d="M 800 258 L 905 140 L 940 140" stroke="url(#lg-r1)" />
                                <path d="M 800 292 L 920 260 L 940 260" stroke="url(#lg-r2)" />
                                <path d="M 800 310 L 920 380 L 940 380" stroke="url(#lg-r3)" />
                                <path d="M 800 358 L 905 500 L 940 500" stroke="url(#lg-r4)" />
                            </g>

                            {/* ── RIGHT: Core layer (thin + crisp) ── */}
                            <g filter="url(#ray-glow-core)" strokeWidth="1.5" fill="none">
                                <path d="M 800 258 L 905 140 L 940 140" stroke="url(#lg-r1)" />
                                <path d="M 800 292 L 920 260 L 940 260" stroke="url(#lg-r2)" />
                                <path d="M 800 310 L 920 380 L 940 380" stroke="url(#lg-r3)" />
                                <path d="M 800 358 L 905 500 L 940 500" stroke="url(#lg-r4)" />
                            </g>

                            {/* ── ANIMATED PULSE PARTICLES ── */}
                            {/* Left pulse dots travelling toward center */}
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                                    <mpath href="#path-l1-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s">
                                    <mpath href="#path-l2-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.2s">
                                    <mpath href="#path-l3-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="3s" repeatCount="indefinite" begin="0.3s">
                                    <mpath href="#path-l4-ref" />
                                </animateMotion>
                            </circle>

                            {/* Right pulse dots travelling toward center */}
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1s">
                                    <mpath href="#path-r1-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.4s">
                                    <mpath href="#path-r2-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.9s">
                                    <mpath href="#path-r3-ref" />
                                </animateMotion>
                            </circle>
                            <circle r="3" fill="rgba(255,140,42,0.95)" filter="url(#ray-glow-core)">
                                <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                                    <mpath href="#path-r4-ref" />
                                </animateMotion>
                            </circle>

                            {/* Reference paths for animateMotion (corrected coordinates) */}
                            <defs>
                                <path id="path-l1-ref" d="M 480 258 L 375 140 L 292 140" />
                                <path id="path-l2-ref" d="M 480 292 L 360 260 L 292 260" />
                                <path id="path-l3-ref" d="M 480 310 L 360 380 L 292 380" />
                                <path id="path-l4-ref" d="M 480 358 L 375 500 L 292 500" />
                                <path id="path-r1-ref" d="M 800 258 L 905 140 L 940 140" />
                                <path id="path-r2-ref" d="M 800 292 L 920 260 L 940 260" />
                                <path id="path-r3-ref" d="M 800 310 L 920 380 L 940 380" />
                                <path id="path-r4-ref" d="M 800 358 L 905 500 L 940 500" />
                            </defs>
                        </svg>
                    </div>

                    {/* Left Column Features */}
                    <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[280px] z-10 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 justify-center">
                        {leftFeatures.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={`flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/5 px-6 py-4 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:-translate-y-1 hover:border-accent-primary/50 transition-all duration-300 group cursor-default mx-auto lg:mx-0 w-full sm:w-[260px] relative z-20 lg:absolute lg:-translate-y-1/2 lg:left-0 lg:ml-4 xl:ml-8 ${feat.top}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                                <div className="bg-accent-primary/10 shadow-inner p-2 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <feat.icon size={22} strokeWidth={2} />
                                </div>
                                <span className="font-semibold text-white tracking-wide relative z-10 group-hover:text-accent-secondary transition-colors duration-300 break-words [hyphens:auto]">{feat.title}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center AI Graphic */}
                    <div className="relative flex items-center justify-center h-[300px] w-full sm:h-[400px] lg:h-full lg:absolute lg:inset-0 lg:m-auto z-20 pointer-events-none my-12 md:my-16 lg:my-0">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", delay: 0.1, bounce: 0.3 }}
                            className="relative sm:mr-15 md:ml-30 lg:ml-0 flex items-center justify-center w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] p-4 group"
                            style={{ right: '-3vw' }} // Slightly to the right
                        >
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(var(--accent-primary)_2px,transparent_2px)] [background-size:32px_32px] opacity-10" />
                            <div className="absolute inset-[-10%] sm:inset-[-20%] rounded-full bg-gradient-to-tr from-[#8B3F00]/40 via-transparent to-[var(--accent-primary)]/30 blur-[60px]" />

                            <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-accent-primary/30 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 sm:inset-12 rounded-full border border-accent-primary/40 animate-[pulse_4s_ease-in-out_infinite]" />

                            <div className="relative z-10 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[325px] lg:h-[325px] rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,106,0,0.5)] border-4 border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md pointer-events-auto group-hover:shadow-[0_0_100px_rgba(255,106,0,0.7)] transition-all duration-700">
                                <Image
                                    src="/ai_central_node.png"
                                    alt="Central Automation Node"
                                    fill
                                    className="object-cover scale-110 group-hover:scale-[1.2] transition-transform duration-1000 origin-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none mix-blend-multiply" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.2)_0%,transparent_70%)] mix-blend-screen pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column Features */}
                    <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[280px] z-10 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 justify-center">
                        {rightFeatures.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={`flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/5 px-6 py-4 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:-translate-y-1 hover:border-accent-primary/50 transition-all duration-300 group cursor-default mx-auto lg:mx-0 w-full sm:w-[260px] relative z-20 lg:absolute lg:-translate-y-1/2 lg:right-0 lg:mr-4 xl:mr-8 ${feat.top}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                                <div className="bg-accent-primary/10 shadow-inner p-2 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <feat.icon size={22} strokeWidth={2} />
                                </div>
                                <span className="font-semibold text-white tracking-wide relative z-10 group-hover:text-accent-secondary transition-colors duration-300 break-words [hyphens:auto]">{feat.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
