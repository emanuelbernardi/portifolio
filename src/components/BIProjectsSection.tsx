import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface BIProject {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const BICard = ({ project, index }: { project: BIProject; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    whileHover={{ y: -4 }}
    className="group card-surface flex flex-col overflow-hidden p-2"
  >
    <div className="relative aspect-video overflow-hidden inner-radius">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/20 transition-opacity group-hover:opacity-0" />
    </div>

    <div className="flex flex-1 flex-col p-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink size={14} />
        </a>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const BIProjectsSection = ({ projects }: { projects: BIProject[] }) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-section-label text-primary mb-6">Projetos de BI</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <BICard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BIProjectsSection;
