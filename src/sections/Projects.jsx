import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa6";
const projects = [
  {
    title: "Netflix Clone",
  description:
    "A full-stack Netflix-inspired streaming platform featuring secure authentication, dynamic movie browsing, personalized watchlists, and responsive UI powered by the TMDB API.",
  image: "/projects/project6.png",
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TMDB API",
    "JWT",
    "Tailwind CSS",
  ],
  link: "https://netflix-clone-198v.onrender.com",
  github: "https://github.com/popprash/netflix_clone"
  },
  {
    title: "X Clone",
    description:
      "A full-stack social media platform inspired by X (formerly Twitter), featuring user authentication, post creation, likes, comments, profiles, and a responsive interface for seamless social interactions.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://twitter-clone-2sfc.onrender.com",
    github: "https://github.com/popprash/twitter_clone",
  },
  {
    title: "Movie Discovery",
    description:
      "A modern movie discovery application powered by the TMDB API. Built a custom trending section using Appwrite by tracking user searches and surfacing the most popular movies in real time.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "Appwrite",
      "TMDB API",
      "Tailwind CSS",
      "Vite",
    ],
    link: "https://movie-application-ecru.vercel.app/",
    github: "https://github.com/popprash/Movie_application",
  },
  {
    title: "DevEvents",
    description:
      "A Next.js platform that helps developers discover upcoming technology conferences, hackathons, and community events, with event details and seamless slot booking.",
    image: "/projects/project3.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    link: "https://dev-events-nextjs16-2-9.vercel.app/",
    github: "https://github.com/popprash/dev_events_nextjs16.2.9",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered conversational assistant built with LangGraph and LangSmith, using the Groq API for fast inference. Supports multi-step reasoning with observable agent workflows.",
    image: "/projects/project4.png",
    tags: [
      "LangGraph",
      "LangSmith",
      "Groq",
      "Python",
      "Streamlit",
      "Rag"
    ],
    link: "https://chatbot-prashant.streamlit.app/",
    github: "https://github.com/popprash/chatbot_using_langgraph",
  },
  {
    title: "Product Store",
    description:
      "A full-stack MERN application for managing products with complete CRUD functionality, responsive UI, REST APIs, and persistent MongoDB storage.",
    image: "/projects/project5.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://product-store-gray-ten.vercel.app/",
    github: "https://github.com/popprash/Product_Store",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};