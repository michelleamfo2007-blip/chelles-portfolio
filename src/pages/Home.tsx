import { motion } from "motion/react";
import { Github, Linkedin, ChevronRight, Layout, Database, Sparkles, Terminal, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

export const Home = () => {
  const featuredProjects = [
    {
      title: "UCMAS Management System",
      description: "A robust administrative portal for managing student records, grading, and operational workflows with precision.",
      link: "ucmas-cape-coast-management-system.vercel.app",
      tags: ["React", "Admin Portal", "Workflow"],
    },
    {
      title: "Dev with Mercedes Portfolio",
      description: "A premium digital archive showcasing the fusion of high-performance engineering and architectural design.",
      link: "chelles-portfolio.vercel.app",
      tags: ["React", "Motion", "Premium UI"],
    },
    {
      title: "Guan Web",
      description: "A cultural heritage portal designed to preserve and showcase the linguistic and historical legacy of the Guan people.",
      link: "guan-web.vercel.app",
      tags: ["React", "Motion", "Architecture"],
    }
  ];

  const services = [
    {
      title: "Architecture",
      description: "Designing scalable, maintainable cloud-native systems using modern microservices and serverless patterns.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Frontend Engineering",
      description: "Building immersive, high-performance user interfaces with React, Next.js, and advanced motion libraries.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Creative Solutions",
      description: "Merging aesthetic elegance with robust engineering to solve complex business problems visually.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 px-1 border-l border-accent/30">
              Available for Freelance
            </span>
            <h1 className="text-[80px] md:text-[110px] lg:text-[140px] font-serif italic font-light tracking-tighter leading-[0.85] mb-10 text-white">
              Full Stack <br />
              <span className="not-italic text-accent">Developer.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed mb-12 font-light">
              Architecting seamless digital ecosystems from concept to cloud deployment. 
              Focused on performance, elegance, and user-centric architecture.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/work" className="group relative text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-4">
                <span className="pb-1 border-b border-accent/50 group-hover:border-accent transition-colors">View Projects</span>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
              <div className="flex items-center gap-6">
                <a href="https://github.com/michelleamfo2007-blip" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/michelle-amfo-906243409" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@devwithmercedes" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity text-white">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-12 bottom-12 hidden lg:block opacity-20">
          <div className="writing-mode-vertical rotate-180 text-[10px] tracking-[0.5em] font-bold uppercase text-white">
            SCROLL TO EXPLORE — SCROLL TO EXPLORE
          </div>
        </div>
      </section>

      {/* Philosophy / Brief About */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-6 block">Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter leading-tight mb-8">
                Turning complexity into <br /> 
                <span className="not-italic text-accent">effortless elegance.</span>
              </h2>
            </div>
            <div className="text-white/50 text-lg font-light leading-relaxed space-y-6">
              <p>
                I specialize in bridging the gap between sophisticated backend engineering and 
                premium frontend experiences. My approach is rooted in the belief that great 
                software should be as beautiful as it is functional.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold group">
                Learn More 
                <div className="w-0 h-px bg-white group-hover:w-8 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
            {services.map((service, idx) => (
              <div key={idx} className="p-12 bg-[#050505] hover:bg-[#0a0a0a] transition-colors group">
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Selected Archive</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter">Featured Works</h2>
            </div>
            <Link to="/work" className="hidden md:block text-white/40 text-[10px] uppercase tracking-widest hover:text-white transition-colors">
              View All Projects →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-serif italic text-white tracking-tighter mb-12 leading-[0.8]">
            Ready to <br /> 
            <span className="not-italic text-accent">innovate?</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 text-lg mb-16 font-light">
            I'm currently available for full-time roles and high-impact freelance collaborations.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all transform hover:scale-105">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer Snapshot */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <p>© 2026 DEV WITH MERCEDES — ENGINEERED WITH PRECISION</p>
          </div>
          <div className="flex gap-12">
            <a href="https://www.linkedin.com/in/michelle-amfo-906243409" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/michelleamfo2007-blip" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.tiktok.com/@devwithmercedes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
