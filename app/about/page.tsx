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

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                
                .font-display {
                    font-family: 'Space Grotesk', sans-serif;
                }
            `}</style>
        </div>
    );
}

