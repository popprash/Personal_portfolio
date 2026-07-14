import {
  Code2,
  Brain,
  Rocket,
  GraduationCap,
} from "lucide-react";

const journey = [
  {
    icon: GraduationCap,
    year: "2024",
    title: "Started My Development Journey",
    description:
      "Began learning programming fundamentals, JavaScript, React, Git, and modern web development while building my first projects.",
  },
  {
    icon: Code2,
    year: "2025",
    title: "Full Stack Development",
    description:
      "Built multiple full-stack applications using React, Next.js, Node.js, Express, MongoDB, JWT Authentication, and REST APIs while focusing on writing clean and maintainable code.",
  },
  {
    icon: Brain,
    year: "2026",
    title: "Exploring Agentic AI",
    description:
      "Started building AI-powered applications using LangGraph, LangSmith, Groq, RAG, and Streamlit while learning agent workflows, observability, and LLM integrations.",
  },
  {
    icon: Rocket,
    year: "Today",
    title: "Building & Growing",
    description:
      "Continuously improving through real-world projects, open-source learning, and modern technologies while preparing for Software Engineering opportunities.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Learning through
            <span className="font-serif italic font-normal text-white">
              {" "}
              building real projects.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Every project has been an opportunity to learn something new—from
            building modern web applications to exploring Agentic AI. Here's a
            snapshot of my journey so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-5 md:left-1/2 -translate-x-1/2
                    w-10 h-10 rounded-full bg-primary
                    flex items-center justify-center
                    timeline-glow z-20"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[46%] glass rounded-2xl p-6 glow-border animate-fade-in ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                    style={{
                      animationDelay: `${(index + 1) * 150}ms`,
                    }}
                  >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-semibold mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};