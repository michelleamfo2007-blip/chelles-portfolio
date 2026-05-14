import { motion } from "motion/react";
import { Cpu, Layers, Code2, Monitor, Server, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layers className="w-6 h-6" />,
      description: "Crafting pixel-perfect, accessible, and high-performance user interfaces with modern frameworks.",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL", "State Management"]
    },
    {
      title: "Backend & Infrastructure",
      icon: <Cpu className="w-6 h-6" />,
      description: "Architecting robust server-side logic and scalable database schemas for complex data ecosystems.",
      skills: ["Node.js / Express", "PostgreSQL / Prisma", "Firebase / Auth", "REST & GraphQL", "Redis / Caching", "Python / Fast API"]
    },
    {
      title: "DevOps & Tooling",
      icon: <Code2 className="w-6 h-6" />,
      description: "Optimizing the development lifecycle through efficient CI/CD pipelines and cloud orchestration.",
      skills: ["Docker / Containers", "AWS / Vercel", "Git / GitHub Actions", "Vite / Webpack", "Unit & E2E Testing", "System Design"]
    }
  ];

  const focusAreas = [
    { title: "Performance", icon: <Zap className="w-5 h-5 text-accent" />, desc: "Obsessed with Core Web Vitals and lightning-fast load times." },
    { title: "Scalability", icon: <Globe className="w-5 h-5 text-accent" />, desc: "Designing systems that grow seamlessly with your user base." },
    { title: "Security", icon: <Shield className="w-5 h-5 text-accent" />, desc: "Implementing industry-standard protocols to protect user data." },
    { title: "Responsiveness", icon: <Monitor className="w-5 h-5 text-accent" />, desc: "Ensuring a premium experience across every device and screen." }
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-accent selection:text-black min-h-screen">
      {/* Intro Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">Capabilities</span>
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.8] mb-12">
              The <br />
              <span className="not-italic text-accent">Toolkit.</span>
            </h1>
            <p className="max-w-2xl text-white/50 text-lg md:text-xl font-light leading-relaxed">
              A specialized stack focused on speed, scalability, and aesthetic excellence. 
              I use the best tools in the industry to build digital products that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="py-20 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="group transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{cat.title}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-10 min-h-[60px]">
                   {cat.description}
                </p>
                <div className="space-y-4">
                  {cat.skills.map(skill => (
                    <div key={skill} className="flex items-center justify-between py-3 border-b border-white/5 group/skill">
                      <span className="text-sm text-white/60 group-hover/skill:text-white transition-colors">{skill}</span>
                      <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-40 border-t border-white/5 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
             <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Values</span>
             <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter">Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {focusAreas.map((area, idx) => (
               <div key={idx} className="p-10 bg-[#0f0f0f] border border-white/5 hover:border-accent/30 transition-all group">
                  <div className="mb-8 p-3 bg-accent/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-serif italic mb-4">{area.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{area.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Learning / Exploration Section */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
             <div>
                <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-6 block">Future Proof</span>
                <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-10 leading-tight">
                  Always <br /> 
                  <span className="not-italic text-accent">Evolving.</span>
                </h2>
                <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                  The digital landscape moves fast. I dedicate time every week to exploring 
                  emerging technologies like AI-driven interfaces, WebAssembly, and decentralized 
                  computing to stay at the forefront of engineering.
                </p>
                <div className="flex gap-8">
                   <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-white/30">Next Up</span>
                      <span className="text-sm font-medium">Rust & WebAssembly</span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-white/30">Learning</span>
                      <span className="text-sm font-medium">Advanced LLM Orchestration</span>
                   </div>
                </div>
             </div>
             
             <div className="relative aspect-square">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-accent/10 rounded-full animate-spin-reverse-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                      <div className="text-5xl font-serif italic text-accent mb-2">100%</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Committed to Growth</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/5 text-center bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Built to scale.</h2>
          <p className="text-white/40 text-lg mb-12 font-light">
             Whether you need a prototype or a production-ready cloud platform, I have the tools.
          </p>
          <Link to="/contact" className="bg-white text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all transform hover:scale-105 inline-block">
             Hire for Impact
          </Link>
        </div>
      </section>
    </div>
  );
};
