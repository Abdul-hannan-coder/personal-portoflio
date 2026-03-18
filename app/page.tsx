import Hero from "@/components/ui/Hero";
import FeatureWheel from "@/components/ui/FeatureWheel";
import Features from "@/components/ui/Features";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import FAQ from "@/components/ui/FAQ";
import Testimonials from "@/components/ui/Testimonials";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-bg-primary text-text-primary font-sans">
      <Hero />
      <Features />
      <About />
      <FeatureWheel />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
