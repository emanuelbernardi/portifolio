import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const langColors: Record<string, string> = {
  Python: "hsl(210 80% 60%)",
  JavaScript: "hsl(50 90% 55%)",
  TypeScript: "hsl(210 90% 55%)",
  SQL: "hsl(30 80% 55%)",
  Shell: "hsl(120 40% 50%)",
  "Jupyter Notebook": "hsl(25 90% 55%)",
};

const GithubSection = ({ username }: { username: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-section-label text-primary mb-6">Open Source</p>

        {loading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-surface h-36 animate-pulse p-4" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -2 }}
                className="card-surface group flex flex-col justify-between p-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Repository
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="mt-1.5 text-sm font-semibold text-foreground">{repo.name}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {repo.description || "Sem descrição"}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                  {repo.language && (
                    <span className="ml-auto flex items-center gap-1.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ background: langColors[repo.language] || "hsl(240 5% 40%)" }}
                      />
                      {repo.language}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Ver todos os repositórios →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
