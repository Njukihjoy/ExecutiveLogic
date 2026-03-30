import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="impact">
        <ImpactMetrics />
      </div>
      <div id="toolkit">
        <TechStack />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  );
};

export default Index;
