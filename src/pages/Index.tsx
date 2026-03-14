import HeroSection from "@/components/HeroSection";
import BIProjectsSection from "@/components/BIProjectsSection";
import GithubSection from "@/components/GithubSection";
import { CONFIG } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-6">
      <HeroSection />
      
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-border" />
      </div>

      <BIProjectsSection projects={CONFIG.biProjects} />

      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-border" />
      </div>

      <GithubSection username={CONFIG.githubUser} />

      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground">
          {CONFIG.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Index;
