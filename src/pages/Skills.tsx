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
    { title: "Performance", icon: <Zap className="w-6 h-6 text-pink-600" />, desc: "Obsessed with Core Web Vitals and lightning-fast load times." },
    { title: "Scalability", icon: <Globe className="w-6 h-6 text-pink-600" />, desc: "Designing systems that grow seamlessly with your user base." },
    { title: "Security", icon: <Shield className="w-6 h-6 text-pink-600" />, desc: "Implementing industry-standard protocols to protect user data." },
    { title: "Responsiveness", icon: <Monitor className="w-6 h-6 text-pink-600" />, desc: "Ensuring a premium experience across every device and screen." }
  ];

  return (
    <div className="bg-off-white text-pink-950">
      {/* Intro Header */}
      <section className="hero-container relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-light font-mono text-xs tracking-[0.2em] uppercase block mb-6">Capabilities</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9] mb-8 text-white">
              The <br />
              <span className="not-italic text-pink-light">Toolkit.</span>
            </h1>
            <p className="max-w-2xl text-pink-100 text-lg md:text-xl font-light leading-relaxed">
              A specialized stack focused on speed, scalability, and aesthetic excellence. 
              I use the best tools in the industry to build digital products that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="section py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="card-elevated group transition-all hover:shadow-2xl hover:shadow-pink-900/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-700 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-pink-950">{cat.title}</h3>
                </div>
                <p className="text-pink-800/70 text-sm leading-relaxed mb-8 min-h-[60px]">
                   {cat.description}
                </p>
                <div className="list-container">
                  {cat.skills.map(skill => (
                    <div key={skill} className="list-item group/skill">
                      <div className="w-2 h-2 rounded-full bg-pink-200 mr-4 group-hover/skill:bg-pink-600 transition-colors" />
                      <span className="list-item-title text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section py-24 bg-pink-50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-16">
             <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Values</span>
             <h2 className="section-title text-3xl md:text-5xl font-serif italic tracking-tighter">Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {focusAreas.map((area, idx) => (
               <div key={idx} className="card p-8 group hover:-translate-y-2 transition-transform">
                  <div className="mb-6 p-4 bg-pink-100 w-fit rounded-xl group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-serif text-pink-950 italic mb-3">{area.title}</h3>
                  <p className="text-pink-800/70 text-sm leading-relaxed">{area.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Learning / Exploration Section */}
      <section className="section py-32 bg-white border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-6 block">Future Proof</span>
                <h2 className="text-4xl md:text-6xl font-serif italic text-pink-950 tracking-tighter mb-8 leading-tight">
                  Always <br /> 
                  <span className="not-italic text-pink-600">Evolving.</span>
                </h2>
                <p className="text-pink-800/70 text-lg font-light leading-relaxed mb-10">
                  The digital landscape moves fast. I dedicate time every week to exploring 
                  emerging technologies like AI-driven interfaces, WebAssembly, and decentralized 
                  computing to stay at the forefront of engineering.
                </p>
                <div className="flex flex-wrap gap-8">
                   <div className="flex flex-col gap-2 p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <span className="text-[10px] uppercase tracking-widest text-pink-500">Next Up</span>
                      <span className="text-sm font-bold text-pink-950">Rust & WebAssembly</span>
                   </div>
                   <div className="flex flex-col gap-2 p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <span className="text-[10px] uppercase tracking-widest text-pink-500">Learning</span>
                      <span className="text-sm font-bold text-pink-950">Advanced LLM Orchestration</span>
                   </div>
                </div>
             </div>
             
             <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border border-pink-200 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border border-pink-300/50 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center bg-white p-12 rounded-full shadow-2xl shadow-pink-900/10 border border-pink-50">
                      <div className="text-6xl font-serif italic text-pink-600 mb-2">100%</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-pink-400">Committed to Growth</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-32 text-center bg-pink-950">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-10">Built to scale.</h2>
          <p className="text-pink-200/80 text-lg mb-12 font-light">
             Whether you need a prototype or a production-ready cloud platform, I have the tools.
          </p>
          <Link to="/contact" className="bg-white text-pink-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pink-100 transition-colors inline-block shadow-xl shadow-black/20">
             Hire for Impact
          </Link>
        </div>
      </section>
    </div>
  );
};
