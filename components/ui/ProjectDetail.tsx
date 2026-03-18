"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Globe, Server, Code, Layout, Play, Building2, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project, projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ slug }: { slug: string }) {
    const project = projects.find((p) => p.slug === slug);

    const [activeMediaIndex, setActiveMediaIndex] = useState(0);

    if (!project) return notFound();

    const activeMedia = project.gallery[activeMediaIndex];

    const renderMedia = (media: typeof activeMedia) => {
        if (typeof media === 'string') {
            return (
                <Image
                    src={media as string}
                    alt={project.title}
                    fill
                    className="object-contain bg-black/50"
                />
            );
        } else if (media.type === 'youtube') {
            return (
                <iframe
                    src={`https://www.youtube.com/embed/${media.videoId}?autoplay=1`}
                    title="YouTube video player"
                    className="w-full h-full border-0 absolute top-0 left-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            );
        } else if (media.type === 'video') {
            return (
                <video
                    src={media.src as string}
                    poster={media.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black/50 absolute top-0 left-0"
                />
            );
        }
    };

    const getPoster = (media: typeof activeMedia) => {
        if (typeof media === 'string') return media;
        return media.poster;
    };

    return (
        <article className="min-h-screen bg-bg-primary text-white overflow-hidden pb-32">
            {/* Header / Nav */}
            <div className="pt-20 pb-8 px-6 max-w-7xl mx-auto border-b border-white/5 relative z-20">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors text-sm font-bold uppercase tracking-widest mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Arsenal
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{project.category}</span>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl"
                        >
                            {project.title.split(' - ')[0]} 
                            <span className="block text-accent-primary font-serif italic mt-2 font-medium">
                                {project.title.split(' - ')[1] || "Project Details"}
                            </span>
                        </motion.h1>
                    </div>
                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-primary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_40px_rgba(255,106,0,0.5)] transition-shadow"
                        >
                            Live Preview
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.a>
                    )}
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 mt-12">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT COLUMN: Gallery & Description */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Interactive Gallery */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                {renderMedia(activeMedia)}
                            </div>
                            
                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-2 sm:gap-4 w-full">
                                {project.gallery.map((media, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveMediaIndex(index)}
                                        className={`relative w-full aspect-[16/10] sm:w-32 sm:h-20 lg:w-40 lg:h-24 sm:aspect-auto rounded-lg sm:rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
                                            activeMediaIndex === index ? 'border-accent-primary scale-100 shadow-[0_0_20px_rgba(255,106,0,0.2)]' : 'border-[#0a0a0a] opacity-50 hover:opacity-100 hover:border-white/20'
                                        }`}
                                    >
                                        <Image
                                            src={getPoster(media)}
                                            alt={`Gallery thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                        {typeof media !== 'string' && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent-primary flex items-center justify-center pl-0.5">
                                                    <Play className="w-3 h-3 sm:w-4 sm:h-4 text-black fill-black" />
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-12 border border-white/5"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest flex items-center gap-3">
                                <Code className="text-accent-primary" />
                                Project Overview
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line font-normal">
                                {project.longDescription}
                            </p>
                        </motion.div>

                        {/* Objectives */}
                        {project.objectives && project.objectives.length > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-12 border border-accent-primary/20 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <Server className="w-32 h-32 text-accent-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-8 text-white uppercase tracking-widest flex items-center gap-3">
                                    <Server className="text-accent-primary" />
                                    Core Objectives
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                    {project.objectives.map((objective, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="mt-1 shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                                            </div>
                                            <p className="text-gray-300 font-normal">{objective}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Meta, Details, Stats */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Highlights/Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {project.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                                >
                                    <div className="flex justify-center mb-3">
                                        <stat.icon className="w-6 h-6 text-accent-primary" />
                                    </div>
                                    <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Project Information */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5"
                        >
                            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-b border-white/10 pb-4">
                                Project Info
                            </h3>
                            <ul className="space-y-6">
                                {project.client && (
                                    <li className="flex gap-4">
                                        <Building2 className="w-5 h-5 text-accent-primary shrink-0" />
                                        <div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Client</div>
                                            <div className="text-gray-200 font-medium">{project.client}</div>
                                        </div>
                                    </li>
                                )}
                                {project.domain && (
                                    <li className="flex gap-4">
                                        <Globe className="w-5 h-5 text-accent-primary shrink-0" />
                                        <div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Domain</div>
                                            <div className="text-gray-200 font-medium">{project.domain}</div>
                                        </div>
                                    </li>
                                )}
                                {project.duration && (
                                    <li className="flex gap-4">
                                        <Calendar className="w-5 h-5 text-accent-primary shrink-0" />
                                        <div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Timeline</div>
                                            <div className="text-gray-200 font-medium">{project.duration}</div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5"
                        >
                            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-b border-white/10 pb-4">
                                Technology Stack
                            </h3>
                            <div className="space-y-4">
                                {project.techStack.map((tech, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-1">
                                            {tech.name}
                                        </div>
                                        <div className="text-gray-300 text-sm font-medium bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                                            {tech.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Client Feedback */}
                        {project.feedback && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-accent-primary/10 rounded-[2rem] p-8 border border-accent-primary/20 relative"
                            >
                                <Quote className="absolute top-6 right-6 w-12 h-12 text-accent-primary/20" />
                                <h3 className="text-sm font-bold mb-4 text-accent-primary uppercase tracking-widest">
                                    Client Feedback
                                </h3>
                                <p className="text-white text-lg font-medium italic mb-6">
                                    "{project.feedback.content}"
                                </p>
                                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                                    — {project.feedback.author}
                                </div>
                            </motion.div>
                        )}
                    </div>

                </div>
            </main>
        </article>
    );
}
