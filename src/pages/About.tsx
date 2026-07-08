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
    { icon: <Target className="w-6 h-6" />, title: "Precision", desc: "Every pixel and every line of code serves a specific, measurable purpose." },
    { icon: <Zap className="w-6 h-6" />, title: "Performance", desc: "Speed is not a feature; it's a fundamental requirement for modern digital products." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Aesthetics", desc: "Beauty and functionality are not mutually exclusive; they are synergistic." }
  ];

  const techLove = [
    "React", "TypeScript", "Next.js", "Motion", "Tailwind", "Node.js", "PostgreSQL", "AWS"
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
            <span className="text-pink-light font-mono text-xs tracking-[0.2em] uppercase block mb-6">The Architect</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9] mb-8 text-white">
              Dev with <br />
              <span className="not-italic text-pink-light">Mercedes.</span>
            </h1>
            <p className="max-w-2xl text-pink-100 text-lg md:text-xl font-light leading-relaxed">
              I am Michelle Nhyira Amfo, a developer dedicated to crafting seamless digital ecosystems. 
              My journey is defined by a relentless pursuit of performance, elegance, and user-centric architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative group">
              <div className="aspect-[4/5] bg-pink-100 rounded-2xl p-2 overflow-hidden shadow-2xl shadow-pink-900/10">
                <img 
                  src={michelleImg} 
                  alt="Michelle Nhyira Amfo" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent rounded-2xl" />
                
                {/* Decorative Elements */}
                <div className="absolute bottom-10 left-10">
                   <div className="text-[10px] font-mono text-pink-200 uppercase tracking-widest mb-2 font-bold">Based in</div>
                   <div className="flex items-center gap-2 text-sm font-serif italic text-white">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      Accra, Ghana
                   </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center animate-spin-slow shadow-lg border border-pink-100">
                 <div className="text-[9px] font-mono text-pink-700 uppercase tracking-tighter text-center font-bold">
                    Engineering <br /> Excellence
                 </div>
              </div>
            </div>

            <div className="card-elevated">
              <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-6 block">Biography</span>
              <h2 className="text-3xl md:text-5xl font-serif italic text-pink-950 tracking-tighter mb-10 leading-tight">
                Michelle Nhyira Amfo
              </h2>
              <div className="space-y-6 text-pink-900/80 text-lg leading-relaxed font-light">
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
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-pink-100 mt-8">
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 text-pink-600 text-xs uppercase tracking-widest font-bold">
                         <Briefcase className="w-4 h-4" />
                         Role
                      </div>
                      <div className="text-pink-950 text-sm font-bold">Full Stack Engineer</div>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 text-pink-600 text-xs uppercase tracking-widest font-bold">
                         <GraduationCap className="w-4 h-4" />
                         Focus
                      </div>
                      <div className="text-pink-950 text-sm font-bold">Software Engineering</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section py-24 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-3 gap-8">
              {principles.map((p, idx) => (
                <div key={idx} className="card group hover:-translate-y-2 transition-transform">
                   <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-pink-950">{p.title}</h3>
                   <p className="text-pink-800/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section py-24 bg-white border-t border-pink-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="max-w-xl mb-16">
              <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Timeline</span>
              <h2 className="section-title text-3xl md:text-5xl font-serif italic tracking-tighter">My Journey</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="card-elevated group">
                   <div className="text-3xl font-serif italic text-pink-600 mb-6">{m.year}</div>
                   <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-pink-950">{m.title}</h3>
                   <p className="text-pink-800/70 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Tech Stack Visualizer */}
      <section className="section py-24 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 card-elevated">
              <div className="max-w-md">
                 <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Toolbox</span>
                 <h2 className="text-3xl md:text-4xl font-serif italic text-pink-950 tracking-tighter mb-6">Technologies I swear by.</h2>
                 <p className="text-pink-800/70 text-base leading-relaxed">
                    I believe in using the right tool for the job. These are the core technologies 
                    that power my most successful projects.
                 </p>
              </div>
              <div className="flex flex-wrap gap-4 max-w-2xl">
                 {techLove.map((tech) => (
                   <div key={tech} className="px-6 py-3 bg-pink-100 border border-pink-200 rounded-full text-xs uppercase tracking-widest font-bold text-pink-900 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all cursor-default">
                      {tech}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Beyond the Code */}
      <section className="section py-24 bg-white border-t border-pink-100">
         <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-12">
                  <div>
                    <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Personal</span>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-pink-950 tracking-tighter">Beyond the Code</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { icon: <Globe className="w-6 h-6" />, label: "Global Citizen", desc: "Inspired by world cultures." },
                       { icon: <Code2 className="w-6 h-6" />, label: "Open Source", desc: "Contributing to the future." },
                       { icon: <Coffee className="w-6 h-6" />, label: "Fuel", desc: "Powered by good coffee." },
                       { icon: <Heart className="w-6 h-6" />, label: "Design", desc: "Passionate about minimalism." }
                     ].map((item, i) => (
                       <div key={i} className="card group hover:-translate-y-1 transition-transform">
                          <div className="text-pink-600 mb-4 bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">{item.icon}</div>
                          <div className="text-sm font-bold uppercase tracking-widest text-pink-950 mb-2">{item.label}</div>
                          <div className="text-pink-800/60 text-xs leading-relaxed uppercase font-medium">{item.desc}</div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="p-12 bg-pink-950 border border-pink-900 rounded-3xl shadow-xl shadow-pink-950/20">
                  <h3 className="text-2xl font-serif italic text-pink-light mb-6">My Mission</h3>
                  <p className="text-pink-100/90 text-lg leading-relaxed font-light italic">
                    "To empower businesses through digital solutions that are not only 
                    technically superior but also visually stunning. I aim to create 
                    software that users don't just use—they experience."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy Callout */}
      <section className="section py-32 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
           <Heart className="w-16 h-16 text-pink-500 mx-auto mb-10 opacity-80" />
           <h3 className="text-4xl md:text-6xl font-serif italic text-pink-950 tracking-tighter leading-tight mb-12">
             "I don't just build websites. I engineer digital legacies that feel alive."
           </h3>
           <Link to="/contact" className="inline-block border-2 border-pink-600 text-pink-700 hover:bg-pink-600 hover:text-white px-10 py-4 text-xs uppercase tracking-widest font-bold transition-all rounded-full">
              Work with me
           </Link>
        </div>
      </section>
    </div>
  );
};
