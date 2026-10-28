import { motion } from "motion/react";
import { Github, Linkedin, ChevronRight, Layout, Database, Sparkles, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export const Home = () => {
  const services = [
    {
      title: "Architecture",
      description: "Designing scalable, maintainable cloud-native systems using modern microservices and serverless patterns.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Frontend Engineering",
      description: "Building immersive, high-performance user interfaces with React, Next.js, and advanced motion libraries.",
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: "Backend Engineering",
      description: "Developing secure, high-performance server-side applications and robust APIs to power scalable digital products.",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-off-white text-pink-950">
      {/* Hero */}
      <section className="hero-container hero-modern relative flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif italic text-2xl md:text-3xl text-white/90 mb-5 tracking-tight">
              Michelleeee<span className="text-pink-light">.</span>
            </p>
            <span className="inline-flex items-center gap-2 text-pink-light font-mono text-[11px] tracking-[0.25em] uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-sm bg-pink-500 animate-pulse" />
              Available for Freelance
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-serif tracking-tighter leading-[0.9] mb-8 text-white">
              <span className="italic font-light">Full Stack</span>
              <br />
              <span className="not-italic font-medium text-pink-light">Developer.</span>
            </h1>
            <p className="max-w-md text-base md:text-lg text-slate-300/90 leading-relaxed mb-10 font-light">
              Architecting seamless digital ecosystems from concept to cloud—
              performance, elegance, and user-centric systems.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link
                to="/work"
                className="group bg-pink-600 hover:bg-pink-500 text-white px-7 py-3.5 rounded-md font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-colors"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <div className="flex items-center gap-5">
                <a href="https://github.com/michelleamfo2007-blip" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-light transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/michelle-amfo-906243409" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-light transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@devwithmercedes" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-light transition-colors" aria-label="TikTok">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[340px] sm:h-[420px] lg:h-[520px] w-full"
            aria-hidden
          >
            <div className="hero-blob hero-float absolute right-[8%] top-[6%] w-[72%] h-[72%]">
              <div className="hero-blob-ring" />
              <div className="hero-blob-core" />
            </div>
            <div className="hero-blob hero-float-alt absolute left-[2%] bottom-[4%] w-[48%] h-[48%]" style={{ animationDelay: "-2s" }}>
              <div className="hero-blob-ring opacity-40" />
              <div className="hero-blob-core" style={{ borderRadius: "58% 42% 40% 60% / 45% 55% 45% 55%" }} />
            </div>
            <div className="hero-blob hero-float absolute right-[2%] bottom-[18%] w-[28%] h-[28%]" style={{ animationDelay: "-4s" }}>
              <div className="hero-blob-ring opacity-30" />
              <div className="hero-blob-core" style={{ borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%" }} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-600/20 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 relative overflow-hidden border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-10 md:gap-16 items-end"
          >
            <div className="md:col-span-5">
              <span className="text-pink-600 font-mono text-[11px] tracking-[0.25em] uppercase mb-5 block">Philosophy</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-pink-950 tracking-tighter leading-[1.05]">
                Complexity into{" "}
                <span className="not-italic text-pink-600">elegance.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 text-pink-800 text-lg leading-relaxed space-y-6 font-light">
              <p>
                I bridge sophisticated backend engineering and premium frontend experiences.
                Great software should be as beautiful as it is functional.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-pink-600 text-xs uppercase tracking-widest font-bold group">
                Learn More
                <span className="w-6 h-px bg-pink-600 group-hover:w-12 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-28 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-14">
            <span className="text-pink-600 font-mono text-[11px] tracking-[0.25em] uppercase mb-3 block">Services</span>
            <h2 className="text-3xl md:text-4xl font-serif italic tracking-tighter text-pink-950">What I build</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-pink-200/60 border border-pink-200/60 overflow-hidden rounded-sm">
            {services.map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                key={service.title}
                className="bg-white p-8 md:p-10 group hover:bg-pink-950 transition-colors duration-300"
              >
                <span className="font-mono text-[10px] text-pink-400 group-hover:text-pink-400 tracking-widest mb-6 block">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-pink-950 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-pink-700 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-14 gap-6">
            <div>
              <span className="text-pink-600 font-mono text-[11px] tracking-[0.25em] uppercase mb-3 block">Selected Archive</span>
              <h2 className="text-3xl md:text-5xl font-serif italic tracking-tighter text-pink-950">Featured Works</h2>
            </div>
            <Link to="/work" className="hidden md:inline-flex text-pink-600 text-xs font-bold uppercase tracking-widest hover:text-pink-500 transition-colors items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                key={project.link}
                className="h-full"
              >
                <ProjectCard {...project} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative overflow-hidden rounded-sm bg-pink-950 px-8 py-20 md:px-16 md:py-28 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.35),transparent_55%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white tracking-tighter mb-6">
              Ready to innovate?
            </h2>
            <p className="max-w-lg mx-auto text-slate-300 text-base md:text-lg mb-10 font-light">
              Available for full-time roles and high-impact freelance collaborations.
            </p>
            <Link to="/contact" className="inline-block bg-pink-600 hover:bg-pink-500 text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs transition-colors">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
