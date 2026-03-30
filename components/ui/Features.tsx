"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Features = () => {
    const features = [
        {
            title: "Web Developer",
            description: "Building robust, scalable applications with modern technologies from database to frontend.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "N8N Automation",
            description: "Designing efficient workflows and connecting diverse services to automate your business processes.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            highlight: true
        },
        {
            title: "Go High Level",
            description: "Creating immersive, responsive, and user-centric interfaces that drive engagement.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24 bg-bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-2xl p-8 border transition-all duration-500 ${feature.highlight
                            ? 'bg-accent-primary/[0.05] border-accent-primary/30 shadow-[0_0_50px_rgba(255,106,0,0.1)]'
                            : 'bg-white/[0.02] border-white/5 hover:border-accent-primary/30 hover:shadow-[0_0_30px_rgba(255,106,0,0.05)]'
                            }`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-all duration-300 mb-6 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]">
                            {feature.icon}
                        </div>

                        <h3 className="text-2xl font-display font-extrabold text-white mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-serif leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                            {feature.description}
                        </p>

                        <Link href="/features" className="text-xs font-semibold text-accent-primary hover:text-white transition-colors flex items-center gap-2 group/link">
                            Explore Capability
                            <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
