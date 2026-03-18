"use client";

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-16 w-full max-w-4xl relative z-20">
            {/* Connecting Lines */}
            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-accent-primary/50 origin-right" 
            />

            <div className="flex gap-4 sm:gap-6 relative">
                {[
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/abdul-hannan-bhatti/", target: "_blank", label: "LinkedIn" },
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Abdul-hannan-coder", target: "_blank", label: "GitHub" },
                    { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/+923334688363", target: "_blank", label: "WhatsApp" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:abdulhannan.personal@gmail.com", target: "_blank", label: "Email" },     
                ].map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 1 + index * 0.1 
                        }}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group focus:outline-none"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-accent-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-40 focus:opacity-40 transition-opacity duration-300" />
                        
                        {/* Button */}
                        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-bg-secondary/50 backdrop-blur-sm text-text-secondary group-hover:text-white group-focus:text-white group-hover:bg-accent-primary group-focus:bg-accent-primary group-hover:border-accent-primary group-focus:border-accent-primary transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] group-focus:shadow-[0_0_30px_rgba(255,106,0,0.4)]">
                            {social.icon}
                        </div>

                        {/* Tooltip */}
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 group-focus:scale-100 transition-all duration-300 bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap pointer-events-none translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0">
                            {social.label}
                            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
                        </span>
                    </motion.a>
                ))}
            </div>

            {/* Connecting Lines */}
            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                className="flex-1 h-[1px] bg-gradient-to-r from-accent-primary/50 to-transparent origin-left" 
            />
        </div>
    );
}
