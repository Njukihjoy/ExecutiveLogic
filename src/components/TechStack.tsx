import { motion } from "framer-motion";
import { Mail, MessageSquare, Video, Layout, CheckSquare, Headphones, Calendar, Monitor } from "lucide-react";

const categories = [
  {
    title: "Communication",
    tools: [
      { name: "Gmail", icon: Mail },
      { name: "Outlook", icon: Mail },
      { name: "Slack", icon: MessageSquare },
      { name: "Zoom", icon: Video },
    ],
  },
  {
    title: "Project & Operations",
    tools: [
      { name: "Notion", icon: Layout },
      { name: "Asana", icon: CheckSquare },
      { name: "Trello", icon: Layout },
      { name: "Zendesk", icon: Headphones },
      { name: "Gorgias", icon: Monitor },
    ],
  },
  {
    title: "Scheduling",
    tools: [
      { name: "Calendly", icon: Calendar },
      { name: "Google Calendar", icon: Calendar },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-28 lg:py-36 bg-background">
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
            The Modern <span className="text-gradient-gold font-medium">Toolkit</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-sm tracking-wide uppercase">
            Technology that powers seamless operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-6 tracking-wide">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-4 border border-border hover:border-gold/50 transition-colors duration-300 bg-card"
                  >
                    <tool.icon size={18} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-sm text-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
