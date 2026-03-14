import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONFIG } from "@/data/content";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-section-label text-primary mb-4">Portfólio</p>
          <h1 className="text-display text-foreground">{CONFIG.name}</h1>
          <p className="mt-2 text-xl font-medium text-muted-foreground">{CONFIG.role}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {CONFIG.bio}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={`https://github.com/${CONFIG.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${CONFIG.email}`}
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail size={14} />
              Email
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {CONFIG.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
