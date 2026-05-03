"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Webhook } from 'lucide-react';
import { faqItems } from '@/lib/portfolio';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>('');

  const handleValueChange = (value: string) => {
    setOpenItem(value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const data = faqItems;

  return (
    <section id="faq" className="relative flex w-full flex-col items-center justify-center py-24 bg-bg-primary">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-accent-primary">QUESTIONS</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find quick answers to common questions about our AI automation services and features.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 text-white"
          >
            {data.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`p-1 ${openItem === faq.id
                    ? 'border-accent-primary/50 shadow-[0_0_20px_rgba(255,106,0,0.15)]'
                    : 'border-white/10 hover:border-accent-primary/30 hover:shadow-[0_0_20px_rgba(255,106,0,0.1)]'
                  } h-fit rounded-xl border bg-bg-primary transition-all duration-500`}
              >
                <AccordionItem
                  value={faq.id}
                  className={`bg-bg-primary group rounded-lg border px-5 ${openItem === faq.id
                      ? 'border-accent-primary/30'
                      : 'border-transparent group-hover:border-accent-primary/10'
                    } transition-all duration-700`}
                >
                  <AccordionTrigger className="group cursor-pointer hover:no-underline [&>svg]:hidden py-6">
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`text-left text-base font-medium pr-8 ${openItem === faq.id
                            ? 'text-accent-primary'
                            : 'text-white group-hover:text-accent-primary'
                          } transition-all duration-700`}
                      >
                        {faq.question}
                      </span>
                      <div className="ml-4 shrink-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={openItem === faq.id ? "spin" : "idle"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Webhook
                              className={`w-6 h-6 ${openItem === faq.id
                                  ? 'animate-spin text-accent-primary'
                                  : 'group-hover:animate-spin text-accent-primary/60 group-hover:text-accent-primary'
                                }`}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className={`border-t border-dashed ${openItem === faq.id
                        ? 'border-accent-primary/50'
                        : 'border-white/10 group-hover:border-accent-primary/50'
                      } pt-4 pb-6`}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-text-secondary leading-relaxed font-medium"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
