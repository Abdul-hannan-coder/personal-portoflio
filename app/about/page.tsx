"use client";

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/Footer';
import About from '@/components/ui/About';
import Features from '@/components/ui/Features';

export default function AboutPage() {
    return (
        <div className="relative min-h-screen flex flex-col bg-bg-primary font-sans antialiased selection:bg-accent-primary selection:text-black">
            <Navbar />
            
            <main className="flex-grow pt-10">
                <About />
                <Features />
            </main>

            <Footer />
        </div>
    );
}

