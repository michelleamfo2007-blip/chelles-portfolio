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
      {/* Hero Section */}
      <section className="hero-container hero-modern relative flex items-center overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(96,165,250,0.08),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiI+PC9jaXJjbGU+Cjwvc3ZnPg==')]" />

        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif italic text-2xl md:text-3xl text-white/90 mb-6 tracking-tight">
              Michelleeee<span className="text-pink-light">.</span>
            </p>
            <span className="text-pink-light font-mono text-[11px] tracking-[0.25em] uppercase block mb-6">
              Available for Freelance
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif tracking-tighter leading-[0.92] mb-8 text-white">
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

          {/* Abstract visual plane */}
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

      {/* Philosophy / Brief About */}
      <section className="section py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center card-elevated"
          >
            <div>
              <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-pink-950 tracking-tighter leading-tight mb-6">
                Turning complexity into <br />
                <span className="not-italic text-pink-600">effortless elegance.</span>
              </h2>
            </div>
            <div className="text-pink-800/90 text-lg leading-relaxed space-y-6">
              <p>
                I specialize in bridging the gap between sophisticated backend engineering and
                premium frontend experiences. My approach is rooted in the belief that great
                software should be as beautiful as it is functional.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-pink-600 text-sm uppercase tracking-widest font-bold group">
                Learn More
                <div className="w-6 h-px bg-pink-600 group-hover:w-12 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-20 bg-pink-50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="section-title">My Capabilities</h2>
          </div>
          <div className="grid-container">
            {services.map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="vendor-card group"
              >
                <h3 className="text-xl font-bold mb-3 text-pink-950">{service.title}</h3>
                <p className="text-pink-700 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-2 block">Selected Archive</span>
              <h2 className="section-title text-3xl md:text-4xl">Featured Works</h2>
            </div>
            <Link to="/work" className="hidden md:flex text-pink-600 text-sm font-bold uppercase tracking-widest hover:text-pink-500 transition-colors items-center gap-2">
              View All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.link}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-6 py-24 bg-pink-950 rounded-[32px] text-center relative overflow-hidden shadow-2xl shadow-pink-950/20"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-900 to-pink-800 opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-30" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter mb-8">
              Ready to innovate?
            </h2>
            <p className="max-w-xl mx-auto text-slate-300 text-lg mb-12 font-light">
              I'm currently available for full-time roles and high-impact freelance collaborations.
            </p>
            <Link to="/contact" className="inline-block bg-white text-pink-950 px-10 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-pink-100 transition-colors shadow-lg shadow-black/10">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
