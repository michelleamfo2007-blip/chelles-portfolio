import { motion } from "motion/react";
import michelleImg from "../assets/michelle.jpg";
import { Link } from "react-router-dom";
import { Heart, Briefcase, GraduationCap, MapPin, Sparkles, Target, Zap, Coffee, Code2, Globe } from "lucide-react";

export const About = () => {
  const milestones = [
    { year: "2024", title: "Full Stack Certification", desc: "Advanced engineering and cloud architecture." },
    { year: "2025", title: "Lead Developer", desc: "Spearheading high-impact digital products." },
    { year: "2026", title: "Founder, Dev with Mercedes", desc: "Building a bridge between design and engineering." }
  ];

  const principles = [
    { icon: <Target className="w-5 h-5" />, title: "Precision", desc: "Every pixel and every line of code serves a specific, measurable purpose." },
    { icon: <Zap className="w-5 h-5" />, title: "Performance", desc: "Speed is not a feature; it's a fundamental requirement for modern digital products." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Aesthetics", desc: "Beauty and functionality are not mutually exclusive; they are synergistic." }
  ];

  const techLove = [
    "React", "TypeScript", "Next.js", "Motion", "Tailwind", "Node.js", "PostgreSQL", "AWS"
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
            <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">The Architect</span>
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.8] mb-12">
              Dev with <br />
              <span className="not-italic text-accent">Mercedes.</span>
            </h1>
            <p className="max-w-2xl text-white/50 text-lg md:text-xl font-light leading-relaxed">
              I am Michelle Nhyira Amfo, a developer dedicated to crafting seamless digital ecosystems. 
              My journey is defined by a relentless pursuit of performance, elegance, and user-centric architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="relative group">
              <div className="aspect-[4/5] bg-[#0f0f0f] p-px border border-white/5 overflow-hidden relative">
                <img 
                  src={michelleImg} 
                  alt="Michelle Nhyira Amfo" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Decorative Elements */}
                <div className="absolute bottom-8 left-8">
                   <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">Based in</div>
                   <div className="flex items-center gap-2 text-sm font-serif italic">
                      <MapPin className="w-4 h-4 text-accent" />
                      Accra, Ghana
                   </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center animate-pulse">
                 <div className="text-[8px] font-mono text-accent uppercase tracking-tighter text-center">
                    Engineering <br /> Excellence
                 </div>
              </div>
            </div>

            <div>
              <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-6 block">Biography</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter mb-10 leading-tight">
                Michelle Nhyira Amfo
              </h2>
              <div className="space-y-8 text-white/50 text-lg leading-relaxed font-light">
                <p>
                  As an architect of seamless digital ecosystems, I believe that high-performance engineering 
                  and refined design are inseparable. Every line of code exists to serve a purpose, and every 
                  visual element is a bridge to user understanding.
                </p>
                <p>
                  With a deep technical background and an editorial eye, I specialize in building 
                  applications that scale gracefully from concept to cloud, ensuring that complexity 
                  is hidden behind a veil of simplicity.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-12 border-t border-white/5">
                   <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                         <Briefcase className="w-4 h-4 text-accent" />
                         Role
                      </div>
                      <div className="text-white text-sm font-medium">Full Stack Engineer</div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                         <GraduationCap className="w-4 h-4 text-accent" />
                         Focus
                      </div>
                      <div className="text-white text-sm font-medium">Architecture & Motion</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-12">
              {principles.map((p, idx) => (
                <div key={idx} className="p-10 border border-white/5 hover:border-accent/30 transition-all group">
                   <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                      {p.icon}
                   </div>
                   <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{p.title}</h3>
                   <p className="text-white/40 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-40 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-xl mb-24">
              <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Timeline</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter">My Journey</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-12 bg-black hover:bg-[#0a0a0a] transition-colors group">
                   <div className="text-2xl font-serif italic text-accent mb-6">{m.year}</div>
                   <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{m.title}</h3>
                   <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Tech Stack Visualizer */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              <div className="max-w-md">
                 <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Toolbox</span>
                 <h2 className="text-4xl font-serif italic text-white tracking-tighter mb-6">Technologies I swear by.</h2>
                 <p className="text-white/40 text-sm leading-relaxed">
                    I believe in using the right tool for the job. These are the core technologies 
                    that power my most successful projects.
                 </p>
              </div>
              <div className="flex flex-wrap gap-4 max-w-2xl">
                 {techLove.map((tech) => (
                   <div key={tech} className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all cursor-default">
                      {tech}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Beyond the Code */}
      <section className="py-40 bg-[#050505] border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <div>
                    <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Personal</span>
                    <h2 className="text-5xl font-serif italic text-white tracking-tighter">Beyond the Code</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { icon: <Globe className="w-5 h-5" />, label: "Global Citizen", desc: "Inspired by world cultures." },
                       { icon: <Code2 className="w-5 h-5" />, label: "Open Source", desc: "Contributing to the future." },
                       { icon: <Coffee className="w-5 h-5" />, label: "Fuel", desc: "Powered by good coffee." },
                       { icon: <Heart className="w-5 h-5" />, label: "Design", desc: "Passionate about minimalism." }
                     ].map((item, i) => (
                       <div key={i} className="space-y-3">
                          <div className="text-accent">{item.icon}</div>
                          <div className="text-xs font-bold uppercase tracking-widest">{item.label}</div>
                          <div className="text-white/40 text-[10px] leading-relaxed uppercase">{item.desc}</div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="p-12 bg-black border border-white/5 rounded-2xl">
                  <h3 className="text-xl font-serif italic text-accent mb-6">My Mission</h3>
                  <p className="text-white/50 text-lg leading-relaxed font-light">
                    "To empower businesses through digital solutions that are not only 
                    technically superior but also visually stunning. I aim to create 
                    software that users don't just use—they experience."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <Heart className="w-12 h-12 text-accent mx-auto mb-12 opacity-50" />
           <h3 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter leading-tight mb-12">
             "I don't just build websites. I engineer digital legacies that feel alive."
           </h3>
           <Link to="/contact" className="inline-block border border-white/20 hover:border-accent hover:text-accent px-10 py-4 text-[10px] uppercase tracking-widest font-bold transition-all">
              Work with me
           </Link>
        </div>
      </section>
    </div>
  );
};
