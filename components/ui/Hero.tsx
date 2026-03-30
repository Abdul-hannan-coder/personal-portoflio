"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SocialLinks from "@/components/ui/SocialLinks";
import LogoLoop from "@/components/ui/LogoLoop";
const techLogos = [
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">React</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">Next.js</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">TypeScript</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">Tailwind CSS</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">Framer Motion</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">Node.js</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">PostgreSQL</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">N8N</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">Make</span> },
    { node: <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap group-hover/item:text-accent-primary transition-colors duration-300">GoHighLevel</span> },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-bg-primary text-text-primary overflow-hidden font-sans flex flex-col items-center">
            {/* Background Video Section */}
            <div className="absolute top-0 left-0 w-full h-[100vh] z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                >
                    <source src="/1.mp4" type="video/mp4" />
                </video>

                {/* Top and Bottom Gradient Overlays for smooth blending */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-primary via-bg-primary/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero Content Wrapper */}
            <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 pt-32 sm:pt-40 md:pt-48 pb-20 max-w-7xl mx-auto w-full">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,106,0,0.1)]"
                >
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-accent-primary text-glow">Available for Work</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="heading-xl text-white mb-8">
                        CRAFTING THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-gray-500 animate-gradient-x">
                            DIGITAL FUTURE
                        </span>
                    </h1>

                    {/* Visual Accent */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-accent-primary/30 hidden md:block"></div>
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-accent-primary/30 hidden md:block"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg md:text-xl font-medium leading-relaxed px-4"
                >
                    High-performance web applications with a focus on premium aesthetics and seamless user experiences. Specializing in Next.js, Framer Motion, and 3D web interfaces.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto px-6"
                >
                    <a href="#projects" className="group relative overflow-hidden bg-accent-primary text-white font-semibold py-5 px-12 rounded-2xl transition-all shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:shadow-[0_0_50px_rgba(255,106,0,0.5)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-accent-primary transition-colors duration-300">
                            View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a href="#contact" className="bg-transparent border-2 border-white/10 hover:border-accent-primary text-white hover:text-accent-primary font-semibold py-5 px-12 rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-2 uppercase tracking-wide text-sm group">
                        Get in Touch
                    </a>
                </motion.div>

                {/* Social Links exactly applied */}
                <SocialLinks />

            </div>

            {/* Tech Logo Loop configured for global palette */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
                className="w-full mt-0"
            >
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-8 text-center opacity-60">
                    Cutting-Edge AI Solutions & Automations
                </p>
                <LogoLoop
                    logos={techLogos}
                    speed={30}
                    direction="left"
                    logoHeight={56}
                    gap={100}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="var(--bg-primary)"
                    className="text-orange-500 transition-colors font-serif italic w-full"
                />
            </motion.div>
        </section>
    );
}
