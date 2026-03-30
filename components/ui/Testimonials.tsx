"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "The AI automation transformed our internal operations, streamlining our data management. The smart workflows keep our processes perfectly optimized effortlessly.",
        image: "/Rifak.jpeg",
        name: "Briana Patton",
        role: "Operations Manager",
    },
    {
        text: "Deploying these AI and automation systems was smooth and quick. The intelligent bots made scaling our customer support completely effortless.",
        image: "/imran.jpeg",
        name: "Bilal Ahmed",
        role: "Startup Founder",
    },
    {
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our systems run at peak efficiency around the clock.",
        image: "/Baptiste.jpeg",
        name: "Saman Malik",
        role: "Head of Marketing",
    },
    {
        text: "The seamless integration of N8N workflows enhanced our software's capabilities. Highly recommend for its smart automation and robust reliability.",
        image: "/Enzo.jpeg",
        name: "Omar Raza",
        role: "Technical Architect",
    },
    {
        text: "Its robust tracking and quick support have transformed our lead generation, making our sales pipeline significantly faster and more efficient.",
        image: "/hamza.png",
        name: "Zainab Hussain",
        role: "Sales Director",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined our CRM structure, improving overall revenue forecasting dramatically.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our team's productivity improved instantly with a user-friendly design and excellent smart routing that adapts to our ever-changing business logic.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        name: "Farhan Siddiqui",
        role: "Agency Owner",
    },
    {
        text: "They delivered an AI solution that exceeded expectations, understanding our specific needs and enhancing our daily operational throughput immensely.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
        name: "Sana Sheikh",
        role: "Real Estate Broker",
    },
    {
        text: "Using these custom solutions, our overhead costs significantly decreased while maintaining perfect accuracy all year round. Absolutely incredible.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
        name: "Hassan Ali",
        role: "Tech Entrepreneur",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0d0d0d] shadow-[0_20px_50px_-10px_rgba(255,106,0,0.1)] max-w-sm w-full hover:border-accent-primary/30 transition-colors duration-300" key={i}>
                                    <div className="text-gray-400 text-sm leading-relaxed">{text}</div>
                                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full object-cover border-2 border-accent-primary/20"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold text-white">{name}</div>
                                            <div className="subheading text-xs">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="max-w-7xl pt-10 lg:pt-32 mx-auto px-6 mb-32 relative bg-bg-primary">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-accent-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="subheading bg-accent-primary/10 text-accent-primary px-4 py-1.5 rounded-full border border-accent-primary/20">
                            Testimonials
                        </div>
                    </div>

                    <h2 className="heading-xl text-white mb-6">
                        Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">clients</span> <br className="hidden sm:block" /> everywhere
                    </h2>
                    <p className="text-lg text-gray-400 mt-6 font-medium leading-relaxed">
                        See how our platform is transforming business automation and operational efficiency for thousands of happy customers.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={27} />
                </div>
            </div>
        </section>
    );
}
