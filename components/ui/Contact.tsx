"use client";

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { Label } from '@/components/ui/label';
import { Check, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      console.log('Form submitted:', { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-16 bg-bg-primary">
      {/* Background Decorative Orbs adjusted to Orange Theme */}
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 106, 0, 0.4), transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 140, 42, 0.4), transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="border border-white/5 bg-[#0A0604]/50 mx-auto max-w-6xl overflow-hidden rounded-[3rem] shadow-2xl shadow-[0_0_50px_rgba(255,106,0,0.05)] backdrop-blur-md hover:border-accent-primary/20 transition-all duration-500">
          <div className="grid md:grid-cols-2 lg:items-center">
            {/* Form Section */}
            <div className="relative p-8 md:p-12 lg:p-14" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="flex items-baseline gap-3">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                    GET IN<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary italic font-serif normal-case tracking-normal ml-3">Touch</span>
                    </h2>
                </div>
                <p className="text-gray-400 mt-4 text-base font-medium leading-relaxed max-w-xs">
                    Let's build intelligent workflows to automate your processes.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-white/50">NAME</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="h-12 bg-white/5 border-white/10 focus:border-accent-primary/50 transition-all text-white placeholder:text-gray-600 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-white/50">EMAIL</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      required
                      className="h-12 bg-white/5 border-white/10 focus:border-accent-primary/50 transition-all text-white placeholder:text-gray-600 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-white/50">MESSAGE</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    placeholder="How can we help automate your work?"
                    required
                    className="h-28 resize-none bg-white/5 border-white/10 focus:border-accent-primary/50 transition-all text-white placeholder:text-gray-600 rounded-xl"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={cn(
                        "w-full h-14 text-sm font-semibold transition-all duration-500 rounded-xl uppercase tracking-wide border border-white/5",
                        isSubmitted ? "bg-[#4ADE80] hover:bg-[#22c55e] text-black shadow-[0_0_20px_rgba(74,222,128,0.3)]" : "bg-bg-primary hover:bg-white/5 text-white hover:border-accent-primary/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]"
                    )}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span 
                            key="submitting"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                          <Loader2 className="w-4 h-4 animate-spin text-accent-primary" />
                          Initiating...
                        </motion.span>
                      ) : isSubmitted ? (
                        <motion.span 
                            key="submitted"
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2"
                        >
                          <Check className="w-5 h-5 text-black" />
                          Protocol Secured
                        </motion.span>
                      ) : (
                        <motion.span 
                            key="default"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-accent-primary"
                        >
                          Initialize Protocol <Send className="w-4 h-4 ml-1" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* Visual/Globe Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center overflow-hidden"
            >
              <article className={cn(
                "relative mx-auto h-[350px] sm:h-[400px] md:h-[450px] w-full max-w-[450px] overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-500",
                "bg-gradient-to-br from-bg-primary to-bg-secondary text-white shadow-2xl group hover:border-accent-primary/20"
              )}>
                <div className="relative z-20 max-w-[280px] p-8">
                  <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase leading-[1.1]">
                    GLOBAL AUTOMATION
                  </h3>
                </div>
                
                <div className="absolute -right-1/4 -bottom-1/4 z-10 w-[90%] h-[90%] flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  <Earth
                    scale={1}
                    className="w-full h-full"
                  />
                </div>
              </article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
