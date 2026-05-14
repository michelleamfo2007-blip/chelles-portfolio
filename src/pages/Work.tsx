import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Work = () => {
  const projects = [
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
    },
    {
      title: "Sip Bite App",
      description: "A comprehensive food and beverage discovery platform with seamless ordering and discovery features.",
      link: "sip-bite-app.vercel.app",
      tags: ["React", "Vite", "Tailwind"],
    },
    {
      title: "Bridge View Pharmacy",
      description: "Modern pharmaceutical portal focused on accessibility, prescription management, and healthcare education.",
      link: "bridge-view-pharmacy.vercel.app",
      tags: ["Next.js", "Firebase", "Design"],
    }
  ];

  const methodology = [
    { step: "01", title: "Discovery", desc: "Deep diving into the business logic and user needs to establish a solid foundation." },
    { step: "02", title: "Strategy", desc: "Mapping out the architecture and choosing the right tech stack for scalability." },
    { step: "03", title: "Execution", desc: "Agile development focusing on clean code, performance, and aesthetic precision." },
    { step: "04", title: "Deployment", desc: "Rigorous testing and cloud optimization for a seamless launch." }
  ];

  return (
    <div className="bg-black text-white selection:bg-accent selection:text-black">
      {/* Hero / Intro */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">Case Studies</span>
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.8] mb-12">
              Selected <br />
              <span className="not-italic text-accent">Projects.</span>
            </h1>
            <p className="max-w-2xl text-white/50 text-lg md:text-xl font-light leading-relaxed">
              A curated collection of digital solutions where high-performance engineering 
              meets refined design. Every project is an exercise in precision and user-centric architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-40 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Process</span>
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter">The Methodology</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {methodology.map((m, idx) => (
              <div key={idx} className="group">
                <div className="text-[10px] font-mono text-accent/40 group-hover:text-accent transition-colors mb-4">{m.step}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{m.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Quality Section */}
      <section className="py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#0f0f0f] border border-white/5 p-12 flex flex-col justify-center">
                 <div className="text-accent mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-serif italic mb-6 text-white">Quality without compromise.</h3>
                 <p className="text-white/40 text-sm leading-relaxed">
                    I believe that the "invisible" parts of a project—the clean code, 
                    the efficient database queries, the accessible HTML—are just as 
                    important as the visual interface.
                 </p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-accent">Tech Philosophy</h3>
              <ul className="space-y-8">
                {[
                  "Performance-first architecture",
                  "Accessibility as a core requirement",
                  "Scalable and maintainable codebases",
                  "Design-driven engineering approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60 group cursor-default">
                    <div className="w-1 h-1 bg-accent rounded-full group-hover:scale-[2] transition-transform" />
                    <span className="text-lg font-light group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/5 text-center bg-[#050505]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Next project?</h2>
          <p className="text-white/40 text-lg mb-12 font-light">
             I'm always looking for new challenges and opportunities to push digital boundaries.
          </p>
          <Link to="/contact" className="group flex items-center gap-4 mx-auto w-fit text-accent font-bold uppercase tracking-widest text-xs">
            Let's Collaborate 
            <div className="w-10 h-10 border border-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
