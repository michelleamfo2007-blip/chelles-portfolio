import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects, allProjectTags } from "../data/projects";

export const Work = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filterTags = useMemo(() => ["All", ...allProjectTags], []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const methodology = [
    { step: "01", title: "Discovery", desc: "Deep diving into the business logic and user needs to establish a solid foundation." },
    { step: "02", title: "Strategy", desc: "Mapping out the architecture and choosing the right tech stack for scalability." },
    { step: "03", title: "Execution", desc: "Agile development focusing on clean code, performance, and aesthetic precision." },
    { step: "04", title: "Deployment", desc: "Rigorous testing and cloud optimization for a seamless launch." }
  ];

  return (
    <div className="bg-off-white text-pink-950">
      {/* Hero — archive / index layout */}
      <section className="hero-container hero-page relative overflow-hidden flex items-center">
        <div className="absolute inset-0 hero-work-grid" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 max-w-xl pointer-events-none" aria-hidden>
          <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-pink-600/20 to-transparent hero-work-scan blur-sm" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6 pt-28 pb-16 grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-pink-light font-mono text-[11px] tracking-[0.25em] uppercase block mb-5">
              Case Studies · Archive
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[0.9] mb-6 text-white">
              <span className="italic font-light">Selected</span>
              <br />
              <span className="not-italic text-pink-light">Projects.</span>
            </h1>
            <p className="max-w-lg text-slate-300 text-base md:text-lg font-light leading-relaxed">
              Digital products where engineering precision meets refined design—
              from campus platforms to commerce systems.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 font-mono text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            aria-hidden
          >
            <div className="text-7xl md:text-8xl font-bold text-white/10 leading-none tabular-nums">
              {String(projects.length).padStart(2, "0")}
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-pink-light mt-2 mb-6">
              Shipped works
            </div>
            <ul className="space-y-2 text-left lg:text-right max-w-xs ml-auto">
              {projects.slice(0, 5).map((p, i) => (
                <li
                  key={p.link}
                  className="text-xs text-slate-400 truncate"
                  style={{ opacity: 1 - i * 0.15 }}
                >
                  <span className="text-pink-500 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {p.title}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {filterTags.map((tag) => (
              <motion.button
                key={tag}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTag(tag)}
                className={`filter-chip ${activeTag === tag ? "active" : ""}`}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.link}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <p className="text-pink-700 text-sm py-12 text-center">
              No projects match this filter.
            </p>
          )}
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
                <p className="text-pink-700 text-sm leading-relaxed">{m.desc}</p>
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
              <div className="aspect-square bg-white border border-pink-100 rounded-3xl p-12 flex flex-col justify-center shadow-xl shadow-pink-950/5">
                 <h3 className="text-3xl font-serif italic mb-6 text-pink-950">Quality without compromise.</h3>
                 <p className="text-pink-700 text-base leading-relaxed">
                    I believe that the "invisible" parts of a project—the clean code,
                    the efficient database queries, the accessible HTML—are just as
                    important as the visual interface.
                 </p>
              </div>
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
                    <div className="w-2 h-2 bg-pink-600 rounded-full group-hover:scale-150 transition-transform" />
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
          <p className="text-pink-700 text-lg mb-12 font-light">
             I'm always looking for new challenges and opportunities to push digital boundaries.
          </p>
          <Link to="/contact" className="group flex items-center gap-4 mx-auto w-fit text-pink-600 font-bold uppercase tracking-widest text-sm hover:text-pink-500 transition-colors">
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
