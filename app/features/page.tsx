"use client";

import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import {
    Layout,
    Database,
    Monitor,
    Activity,
    Zap,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const FeaturesPage = () => {
    const features = [
        {
            title: "UI/UX Designer",
            description: "Crafting intuitive, high-fidelity interfaces that prioritize user centricity and premium aesthetics. We transform complex requirements into seamless visual journeys.",
            icon: <Layout className="w-8 h-8" />,
            delay: 0.1
        },
        {
            title: "Full-Stack Developer",
            description: "Building robust, scalable end-to-end solutions. From performance-optimized frontends to secure, high-concurrency backends with type-safe architectures.",
            icon: <Database className="w-8 h-8" />,
            delay: 0.2
        },
        {
            title: "Frontend Engineer",
            description: "Expertise in crafting ultra-responsive, pixel-perfect web experiences. Specialized in Next.js, Framer Motion animations, and complex state management.",
            icon: <Monitor className="w-8 h-8" />,
            delay: 0.3
        },
        {
            title: "n8n Developer",
            description: "Automating mission-critical business processes with advanced n8n orchestration. Engineering intelligent workflows that connect your entire tech stack autonomously.",
            icon: <Activity className="w-8 h-8" />,
            delay: 0.4
        },
        {
            title: "Zapier Developer",
            description: "Enabling rapid, powerful integrations through strategic Zapier automation. Connecting thousands of apps to drive efficiency and eliminate manual overhead.",
            icon: <Zap className="w-8 h-8" />,
            delay: 0.5
        },
        {
            title: "AI Automation Expert",
            description: "Integrating frontier AI models into production-ready workflows. Specialized in RAG, Agentic AI, and specialized LLM implementations for enterprise growth.",
            icon: <Sparkles className="w-8 h-8" />,
            delay: 0.6
        }
    ];

    return (
        <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-black overflow-hidden font-sans">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">


                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-accent-primary/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold mb-8 tracking-widest uppercase"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Executive Expertise</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-display font-black text-5xl md:text-8xl mb-8 leading-none tracking-tighter uppercase"
                    >
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-gray-500">Digital Sovereignty</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
                    >
                        We deploy elite technical solutions across the full spectrum of modern digital infrastructure. Precision-engineered for scale, performance, and impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px -10px rgba(255,106,0,0.15)",
                                borderColor: "rgba(255,106,0,0.3)"
                            }}
                            className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Decorative element */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/15 transition-all duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-display font-black mb-4 text-white group-hover:text-accent-primary transition-colors uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-medium mb-10 group-hover:text-gray-300 transition-colors">{feature.description}</p>

                                <div className="mt-auto">
                                    <a href="/#contact" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent-primary group-hover:gap-4 transition-all">
                                        Initialize Protocol
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-32 p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-primary mb-8 block">Project Initiation</span>
                        <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-none">
                            Ready to Scale <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Your Vision?</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto">
                            Partner with us to engineer high-impact digital experiences that define the future of your industry.
                        </p>
                        <a href="/#contact" className="group relative overflow-hidden inline-block bg-accent-primary text-black font-black py-6 px-14 rounded-2xl text-[10px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:shadow-[0_0_50px_rgba(255,106,0,0.5)] transition-all">
                            <span className="relative z-10">Start Deployment_</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default FeaturesPage;
