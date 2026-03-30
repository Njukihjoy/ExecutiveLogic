import { motion } from "framer-motion";
import { Briefcase, Shield, TrendingUp, Plane } from "lucide-react";

const experiences = [
  {
    icon: Plane,
    title: "Independent Travel Manager",
    company: "Dreamport",
    description: "Expert GDS and flight booking management, delivering premium travel coordination for discerning clients.",
  },
  {
    icon: Shield,
    title: "Call Centre Compliance",
    company: "Nani Recruitment",
    description: "Maintained rigorous compliance standards and confidentiality across high-volume operations.",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    company: "Cross-functional",
    description: "Identified and implemented workflow optimizations that reduced friction and elevated output quality.",
  },
  {
    icon: Briefcase,
    title: "Executive Support",
    company: "Startup & CEO Focus",
    description: "End-to-end executive assistance including inbox management, scheduling, stakeholder communication, and project tracking.",
  },
];

const Experience = () => {
  return (
    <section className="py-28 lg:py-36 bg-emerald-gradient">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            Professional <span className="text-gradient-gold font-medium">Blueprint</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-body text-sm tracking-wide uppercase">
            A diverse foundation of operational excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 border border-primary-foreground/10 hover:border-gold/40 transition-all duration-500 backdrop-blur-sm"
            >
              <exp.icon size={24} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-primary-foreground">{exp.title}</h3>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-gold mt-1 mb-3">
                {exp.company}
              </p>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
