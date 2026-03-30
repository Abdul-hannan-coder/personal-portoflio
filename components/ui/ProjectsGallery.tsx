"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

import { Zap } from 'lucide-react'; // ensure this is imported if not above

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative flex flex-col h-full bg-[#0a0a0a] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,106,0,0.15)] border border-white/5 hover:border-accent-primary/30"
        >
            <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden shrink-0">
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 subheading bg-white/10 backdrop-blur-md text-white rounded-full border border-white/5">
                        {project.category}
                    </span>
                    {project.isFeatured && (
                        <span className="px-3 py-1.5 text-xs font-semibold bg-accent-primary text-black rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                            <Zap className="w-3 h-3 fill-current" /> FEATURED
                        </span>
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="relative z-20 flex flex-col flex-grow p-6 sm:p-8 pt-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-heading font-bold text-white leading-tight line-clamp-1 pr-2">
                        {project.title.split(' - ')[0]}
                    </h3>
                    <div className="text-accent-primary shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
                
                <p className="text-gray-400 mb-6 text-xs sm:text-[13px] font-medium leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                        {project.stats.slice(0, 2).map((stat, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3">
                                {stat.icon && <stat.icon className="w-4 h-4 text-accent-primary shrink-0 opacity-80" />}
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-[9px] text-gray-500 font-semibold uppercase tracking-wide leading-none mb-1 line-clamp-1">{stat.label}</span>
                                    <span className="text-sm font-bold text-white leading-none line-clamp-1">{stat.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 mt-auto">
                    <span className="px-3 py-1 bg-white/5 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-white/5">
                        {project.category}
                    </span>
                    {project.isFeatured && (
                        <span className="px-3 py-1 bg-white/5 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-white/5">
                            FEATURED
                        </span>
                    )}
                    {project.tags.slice(0, 1).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-white/5 line-clamp-1">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <Link 
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 z-30"
                >
                    <span className="sr-only">View Protocol</span>
                </Link>
            </div>
        </motion.div>
    );
};

const ProjectsGallery = () => {
    return (
        <section className="py-32 relative border-t border-white/5 overflow-hidden min-h-screen">
            {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" /> */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-center md:text-left">
                    <div className="max-w-3xl mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20"
                        >
                            <Code2 className="w-4 h-4 text-accent-primary" />
                            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">
                                Complete Portfolio
                            </span>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            All <span className="text-accent-primary font-serif italic">Deployments</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 font-normal max-w-2xl mx-auto md:mx-0"
                        >
                            Explore a comprehensive collection of my web applications, platforms, and SaaS products.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link 
                            href="/"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to Home
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGallery;
