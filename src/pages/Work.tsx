import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Work = () => {
  const projects = [
    {
      title: "Grade Guard",
      description: "A comprehensive grading and scanning platform designed for seamless academic and vendor performance tracking.",
      link: "grade-guard-flame.vercel.app",
      tags: ["React", "Typescript", "Scanning"],
    },
    {
      title: "Journee Suites",
      description: "A luxury boutique stay showcase featuring an immersive 360° virtual tour and premium architectural storytelling.",
      link: "journee-suites.vercel.app",
      tags: ["Next.js", "Tailwind CSS", "360° Tour"],
    },
    {
      title: "Okissibiri Technology",
      description: "A modern technology solutions website delivering innovation and digital services.",
      link: "okissibiri-technology.vercel.app",
      tags: ["Next.js", "Vercel", "Website"],
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
    <div className="bg-off-white text-pink-950">
      {/* Hero / Intro */}
      <section className="hero-container relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-light font-mono text-xs tracking-[0.2em] uppercase block mb-6">Case Studies</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9] mb-8 text-white">
              Selected <br />
              <span className="not-italic text-pink-light">Projects.</span>
            </h1>
            <p className="max-w-2xl text-pink-100 text-lg md:text-xl font-light leading-relaxed">
              A curated collection of digital solutions where high-performance engineering 
              meets refined design. Every project is an exercise in precision and user-centric architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section py-24 border-t border-pink-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Process</span>
            <h2 className="section-title text-3xl md:text-5xl font-serif italic tracking-tighter">The Methodology</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {methodology.map((m, idx) => (
              <div key={idx} className="card-elevated group hover:-translate-y-2 transition-transform">
                <div className="text-2xl font-mono font-bold text-pink-300 group-hover:text-pink-600 transition-colors mb-4">{m.step}</div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-3 text-pink-950">{m.title}</h3>
                <p className="text-pink-800/70 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Quality Section */}
      <section className="section py-24 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-white border border-pink-100 rounded-3xl p-12 flex flex-col justify-center shadow-xl shadow-pink-900/5">
                 <h3 className="text-3xl font-serif italic mb-6 text-pink-950">Quality without compromise.</h3>
                 <p className="text-pink-800/80 text-base leading-relaxed">
                    I believe that the "invisible" parts of a project—the clean code, 
                    the efficient database queries, the accessible HTML—are just as 
                    important as the visual interface.
                 </p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-pink-300/30 blur-3xl rounded-full" />
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-pink-700">Tech Philosophy</h3>
              <ul className="space-y-6">
                {[
                  "Performance-first architecture",
                  "Accessibility as a core requirement",
                  "Scalable and maintainable codebases",
                  "Design-driven engineering approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-pink-900 group cursor-default">
                    <div className="w-2 h-2 bg-pink-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-lg font-medium group-hover:text-pink-600 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-32 text-center bg-white border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-10 text-pink-950">Next project?</h2>
          <p className="text-pink-800/70 text-lg mb-12 font-light">
             I'm always looking for new challenges and opportunities to push digital boundaries.
          </p>
          <Link to="/contact" className="group flex items-center gap-4 mx-auto w-fit text-pink-700 font-bold uppercase tracking-widest text-sm hover:text-pink-600 transition-colors">
            Let's Collaborate 
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all shadow-md">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
