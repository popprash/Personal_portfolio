import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiAppwrite,
  SiStreamlit,
} from "react-icons/si";

import { TbBrain } from "react-icons/tb";

const technologies = [
  {
    name: "React",
    icon: SiReact,
    description: "Building modern interactive interfaces.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Full-stack React applications.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Type-safe JavaScript development.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Modern utility-first styling.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Scalable backend services.",
  },
  {
    name: "Express",
    icon: SiExpress,
    description: "REST APIs and backend logic.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL database for full-stack apps.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Relational database design.",
  },
  {
    name: "Appwrite",
    icon: SiAppwrite,
    description: "Authentication & backend services.",
  },
  {
    name: "LangGraph",
    icon: TbBrain,
    description: "Building Agentic AI workflows.",
  },
  {
    name: "Streamlit",
    icon: SiStreamlit,
    description: "Rapid AI application development.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Containerizing applications.",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version control and collaboration.",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Code hosting and open collaboration.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "Language for web"

  },
  {
    name: "Linux",
    icon: SiLinux,
    description: "Daily development environment.",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    description: "Frontend deployment platform.",
  },
];

export const TechStack = () => {
  return (
    <section id="tech_stack" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-175 h-175 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            Tech Stack
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I
            <span className="font-serif italic text-white">
              {" "}
              build with.
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground leading-8">
            The tools and technologies I use to build modern web applications,
            AI-powered products, and scalable full-stack experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:glow-border animate-fade-in"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <div
                  className="
                    w-20 h-20
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    animate-float
                  "
                >
                  <Icon className="text-5xl text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>

                <p className="text-muted-foreground leading-7 text-sm">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};