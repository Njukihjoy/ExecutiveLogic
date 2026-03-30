import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="gold-line mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Ready to Reclaim <span className="text-gradient-gold font-medium">Your Time?</span>
          </h2>
          <p className="mt-6 font-body text-muted-foreground leading-relaxed">
            Available for long-term partnerships or project-based engagement. 
            Let's discuss how structured support can transform your operations.
          </p>
          <motion.a
            href="mailto:jw.njukih@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-10 px-10 py-5 bg-emerald-gradient text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            <Mail size={16} />
            jw.njukih@gmail.com
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 lg:px-16 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground font-body text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Executive Logic. All rights reserved.</p>
          <p>Virtual Executive Assistant & Operations Specialist</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
