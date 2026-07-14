import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Building maintainable, readable, and scalable applications with modern best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Creating fast, responsive experiences optimized for speed and accessibility.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies, AI tools, and better ways to build software.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Transforming ideas into practical, user-focused products through thoughtful engineering.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building meaningful digital experiences,
              <span className="font-serif italic font-normal text-white">
                one project at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Prashant Chhetry, a Full Stack Developer passionate about
                building modern web applications with React, Next.js,
                TypeScript, Node.js, and MongoDB. I enjoy turning ideas into
                fast, responsive, and user-friendly digital experiences.
              </p>

              <p>
                Recently, I've been exploring Agentic AI, AI integrations, and
                modern web architectures while continuously improving my
                development workflow. I love learning new technologies by
                building real-world projects and solving practical problems.
              </p>

              <p>
                My goal is simple—write clean, maintainable code, keep learning
                every day, and build products that create real value for users.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe great software comes from curiosity, continuous
                learning, and attention to detail—not just writing code, but
                solving meaningful problems."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
