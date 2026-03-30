import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Her precision and reliability are unmatched. She brought a level of structure and calm to our operations that transformed how our leadership team functions.",
    author: "Director of Business Process Improvement",
    role: "Senior Executive",
  },
  {
    quote: "She completely transformed our workflows. What used to take hours of coordination now runs seamlessly. I can't imagine our operations without her.",
    author: "Mrs. Mary Johnson",
    role: "Operations Leader",
  },
];

const Testimonials = () => {
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
            Words of <span className="text-gradient-gold font-medium">Trust</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card p-10 border border-border relative"
            >
              <Quote size={32} className="text-gold/30 absolute top-8 right-8" strokeWidth={1} />
              <p className="font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="gold-line mb-4" />
              <p className="font-body text-sm font-medium text-foreground">{t.author}</p>
              <p className="font-body text-xs text-muted-foreground tracking-wide uppercase mt-1">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
