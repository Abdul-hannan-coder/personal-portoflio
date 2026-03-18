"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/abdul-hannan-bhatti/", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/Abdul-hannan-coder", label: "GitHub" },
    { Icon: FaWhatsapp, href: "https://wa.me/+923334688363", label: "WhatsApp" },
    { Icon: Mail, href: "mailto:abdulhannan.personal@gmail.com", label: "Email" },
];

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none -mr-32 -mb-32 md:-mr-48 md:-mb-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main footer content */}
                <div className="py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        {/* Brand + tagline + socials */}
                        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Link href="/" className="flex items-center gap-3 mb-6 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-transform group-hover:scale-105 duration-300">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" />
                                        <circle cx="12" cy="12" r="3" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v7m-8.66 8L9.5 13.5m11.16 3.5L14.5 13.5" />
                                    </svg>
                                </div>
                                <span className="text-xl sm:text-xl font-display font-black text-white tracking-tighter group-hover:text-accent-primary transition-colors font-serif italic">Abdul Hannan</span>
                            </Link>
                            <p className="text-gray-500 text-sm font-medium max-w-md leading-relaxed mb-8">
                                Engineering immersive digital experiences. AI Automation, Full-stack development, and products that scale.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {socialLinks.map(({ Icon, href, label }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300 hover:scale-110"
                                    >
                                        <Icon size={20} className="shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right">
                            <h4 className="text-white font-display font-bold text-sm uppercase tracking-[0.2em] mb-6">Navigate</h4>
                            <ul className="space-y-4">
                                {navLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-accent-primary transition-colors inline-flex items-center justify-center lg:justify-end gap-2 group py-1"
                                        >
                                            {label}
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all translate-y-0.5 group-hover:translate-y-0 text-accent-primary" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 text-center sm:text-left order-2 sm:order-1">
                        &copy; {new Date().getFullYear()} FronixTech. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 order-1 sm:order-2">
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
