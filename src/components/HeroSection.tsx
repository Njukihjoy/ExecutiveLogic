import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern executive workspace"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-emerald-gradient opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-line mb-8" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary-foreground leading-[1.05]">
            Structure.
            <br />
            Clarity.
            <br />
            <span className="text-gradient-gold font-medium">Calm.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-xl leading-relaxed"
          >
            Virtual Executive Assistant for Startup Founders and CEOs
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-sm md:text-base text-primary-foreground/60 font-body font-light max-w-lg leading-relaxed"
          >
            Sitting at the intersection of executive support, customer communication, and project coordination.
          </motion.p>
          <motion.a
            href="mailto:jw.njukih@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 border border-gold text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors duration-300"
          >
            <Mail size={16} />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
