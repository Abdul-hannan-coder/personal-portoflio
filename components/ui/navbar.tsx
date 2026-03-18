"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Users, Sparkles, Layout } from 'lucide-react';

const navLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Features', href: '/features', icon: Sparkles },
    { name: 'Projects', href: '/projects', icon: Layout },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 md:py-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="container mx-auto px-4 md:px-6 pointer-events-auto"
            >
                <div className={`mx-auto transition-all duration-500 flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-[2rem] border ${scrolled
                    ? 'max-w-5xl bg-bg-secondary/40 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                    : 'max-w-7xl bg-transparent border-transparent'
                    }`}>

                    {/* Logo (Left) */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-50 flex-1">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,106,0,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,106,0,0.6)] group-hover:rotate-[5deg]">
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" />
                                <circle cx="12" cy="12" r="3" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v7m-8.66 8L9.5 13.5m11.16 3.5L14.5 13.5" />
                            </svg>
                        </div>
                        <span className="text-base sm:text-xl md:text-2xl whitespace-nowrap font-display font-black text-white tracking-tighter group-hover:text-accent-primary transition-colors duration-300 font-serif italic">Abdul Hannan</span>
                    </Link>

                    {/* Desktop Links (Center) */}
                    <div className="hidden lg:flex items-center justify-center gap-8 flex-[2]">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative flex items-center gap-1.5 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all ${pathname === link.href ? 'text-accent-primary' : 'text-text-secondary hover:text-white'}`}
                                >
                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                    {link.name}
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary rounded-full"
                                        />
                                    )}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-accent-primary rounded-full transition-all group-hover:w-full group-hover:left-0" />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions (Right) */}
                    <div className="flex items-center justify-end gap-3 md:gap-6 flex-1">
                        <Link
                            href="/#contact"
                            onClick={handleContactClick}
                            className="relative group px-4 md:px-8 py-2 md:py-3 rounded-full bg-accent-primary text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_35px_rgba(255,106,0,0.6)] transition-all overflow-hidden whitespace-nowrap flex"
                        >
                            <span className="relative z-10 group-hover:text-accent-primary transition-colors duration-300">Contact Us</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
