"use client";

import { motion } from 'framer-motion';
import { Sparkles, Palette, Cog, Cloud } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-32 bg-bg-primary relative border-t border-white/5 overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold mb-8 tracking-widest uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Meet the Architect</span>
                    </div>

                    <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-8 leading-[0.9] tracking-tighter uppercase whitespace-nowrap">
                        ABDUL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">HANNAN</span>
                    </h2>

                    <div className="flex gap-4 mb-8">
                        <div className="w-1.5 bg-accent-primary rounded-full shrink-0" />
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-bold tracking-wide italic">
                            "Frontend Engineer | Automation and Gohighlevel Expert"
                        </p>
                    </div>

                    <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed mb-10">
                        <p>
                            I am a passionate and dedicated software engineer with a strong background in <span className="text-white font-bold">frontend development</span> and <span className="text-white font-bold">automation</span>. With over 2 years of experience in the industry, I have honed my skills in building high-performance web applications and automating business processes.
                        </p>
                        <p>
                            My expertise lies in creating seamless user experiences and helping businesses enhance their online presence through innovative solutions. I am committed to continuous learning and staying up-to-date with the latest technologies to deliver exceptional results for my clients.
                        </p>

                        <div className="pt-8 border-t border-white/5 space-y-6">
                            <h3 className="text-white font-black tracking-widest uppercase text-xs mb-4">What I'm Doing</h3>
                            
                            <ul className="grid grid-cols-1 gap-y-6 gap-x-8">
                                {/* Frontend Development */}
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(255,106,0,0)] group-hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] group-hover:bg-accent-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        <Palette className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Frontend Development</h4>
                                        <p className="text-xs md:text-sm text-gray-400">Building scalable and high-performance web applications using modern frameworks like Next.js and React.</p>
                                    </div>
                                </li>

                                {/* Business Automation */}
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(255,106,0,0)] group-hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] group-hover:bg-accent-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        <Cog className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Business Automation</h4>
                                        <p className="text-xs md:text-sm text-gray-400">Automating workflows and marketing funnels using tools like Gohighlevel, N8N, Make, and Zapier.</p>
                                    </div>
                                </li>

                                {/* Cloud & SaaS */}
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(255,106,0,0)] group-hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] group-hover:bg-accent-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        <Cloud className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Cloud & SaaS</h4>
                                        <p className="text-xs md:text-sm text-gray-400">Deploying and maintaining software solutions in robust cloud environments including AWS, Vercel, and Docker.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Link
                            href="/hannan-cv.pdf"
                            target="_blank"
                            className="w-full sm:w-auto px-10 py-5 bg-accent-primary text-white font-semibold rounded-2xl text-xs shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:shadow-[0_0_50px_rgba(255,106,0,0.5)] transition-all flex items-center justify-center gap-2 group uppercase tracking-wide"
                        >
                            Download CV
                        </Link>
                        <Link href="#contact" className="text-xs font-semibold text-text-secondary hover:text-accent-primary transition-colors border-b-2 border-transparent hover:border-accent-primary pb-1 uppercase tracking-wide">
                            Let's Connect_
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Side (Single main image logic focused for About) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative grid grid-cols-1 gap-4 h-[500px] md:h-[650px] items-center"
                >
                    {/* Main Background Image */}
                    <div className="w-full h-full relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                        <Image
                            src="/about.png"
                            alt="Abdul Hannan Portrait"
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-[3000ms] grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-90" />
                        <div className="absolute inset-0 bg-accent-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />

                        {/* Featured Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-8 left-8 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group/tag hover:border-accent-primary/50 transition-all duration-500"
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="absolute w-2 h-2 rounded-full bg-accent-primary animate-ping opacity-40" />
                                <span className="relative w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_var(--color-accent-primary)]" />
                            </div>
                            <span className="text-[10px] text-white/90 uppercase tracking-[0.25em] font-black group-hover/tag:text-accent-primary transition-colors whitespace-nowrap">
                                Frontend <span className="text-white/20 mx-1">|</span> Automation
                            </span>
                        </motion.div>

                        {/* Decorative Data Points */}
                        <div className="absolute bottom-8 left-0 right-0 px-6 z-40 flex justify-between items-end gap-4 w-full">
                            {[
                                { label: "Experience", value: "2+ Yrs" },
                                { label: "Specialty", value: "Frontend Developer & Automation Expert" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.2) }}
                                    className="glass-panel px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/5 shadow-xl backdrop-blur-md bg-black/50 hover:bg-black/70 hover:border-accent-primary/30 transition-all flex-1 text-center"
                                >
                                    <span className="block text-xl md:text-2xl font-black text-white leading-none mb-1 md:mb-2">{stat.value}</span>
                                    <span className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest font-black leading-none">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
