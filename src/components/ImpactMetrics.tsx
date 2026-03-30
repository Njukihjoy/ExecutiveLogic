import { motion } from "framer-motion";
import { Inbox, Clock, Globe } from "lucide-react";

const metrics = [
  {
    icon: Inbox,
    stat: "70%",
    label: "Inbox Time Reduced",
    description: "Strategic triage system that eliminates noise and surfaces what matters.",
  },
  {
    icon: Clock,
    stat: "8 hrs",
    label: "Recovered Weekly",
    description: "Buffer-time implementation and calendar consolidation that gives you back your day.",
  },
  {
    icon: Globe,
    stat: "3",
    label: "Time Zones Managed",
    description: "Seamless coordination of stakeholders across global operations.",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-28 lg:py-36 bg-champagne">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Impact <span className="text-gradient-gold font-medium">Metrics</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-sm tracking-wide uppercase">
            Measurable results, not just task completion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card p-10 text-center border border-border hover:border-gold transition-colors duration-500 group"
            >
              <metric.icon className="mx-auto mb-6 text-gold" size={28} strokeWidth={1.5} />
              <p className="font-display text-5xl font-light text-foreground group-hover:text-gradient-gold transition-colors duration-300">
                {metric.stat}
              </p>
              <p className="mt-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
