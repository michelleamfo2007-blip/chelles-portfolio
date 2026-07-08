import { motion } from "motion/react";
import { Github, Linkedin, ChevronRight, Layout, Database, Sparkles, Terminal, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

export const Home = () => {
  const featuredProjects = [
    {
      title: "Journee Suites",
      description: "A luxury boutique stay showcase featuring an immersive 360° virtual tour and premium architectural storytelling.",
      link: "journee-suites.vercel.app",
      tags: ["Next.js", "Tailwind CSS", "360° Tour"],
    },
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
      <section className="hero-container relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-pink-light/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-pink-400/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-light font-mono text-xs tracking-[0.2em] uppercase block mb-6 px-2 border-l-2 border-pink-light/50">
              Available for Freelance
            </span>
            <h1 className="text-5xl sm:text-[60px] md:text-[90px] lg:text-[120px] font-serif italic font-light tracking-tighter leading-[0.9] mb-8 text-white">
              Full Stack <br />
              <span className="not-italic text-pink-light">Developer.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-pink-100/80 leading-relaxed mb-10 font-light">
              Architecting seamless digital ecosystems from concept to cloud deployment. 
              Focused on performance, elegance, and user-centric architecture.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/work" className="group relative bg-white text-pink-950 px-6 py-3 rounded-md font-bold uppercase tracking-widest flex items-center gap-3 transition-transform hover:scale-105 shadow-lg shadow-pink-950/20">
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-6">
                <a href="https://github.com/michelleamfo2007-blip" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-pink-light transition-colors text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/michelle-amfo-906243409" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-pink-light transition-colors text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@devwithmercedes" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-pink-light transition-colors text-white">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
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
            <div className="text-pink-900/80 text-lg leading-relaxed space-y-6">
              <p>
                I specialize in bridging the gap between sophisticated backend engineering and 
                premium frontend experiences. My approach is rooted in the belief that great 
                software should be as beautiful as it is functional.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-pink-700 text-sm uppercase tracking-widest font-bold group">
                Learn More 
                <div className="w-6 h-px bg-pink-700 group-hover:w-12 transition-all" />
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
                <p className="text-pink-800/70 text-sm leading-relaxed">{service.description}</p>
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
            <Link to="/work" className="hidden md:flex text-pink-700 text-sm font-bold uppercase tracking-widest hover:text-pink-500 transition-colors items-center gap-2">
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
                key={idx}
              >
                {/* Note: In the next step, we'll update ProjectCard.tsx as well. For now it uses its internal styling */}
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
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-900 to-pink-800 opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter mb-8">
              Ready to innovate?
            </h2>
            <p className="max-w-xl mx-auto text-pink-100/70 text-lg mb-12 font-light">
              I'm currently available for full-time roles and high-impact freelance collaborations.
            </p>
            <Link to="/contact" className="inline-block bg-white text-pink-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pink-100 transition-colors shadow-lg shadow-black/10">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
