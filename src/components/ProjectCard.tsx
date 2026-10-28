import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type Props = Project & { index?: number };

export const ProjectCard = ({ title, description, link, tags, index }: Props) => {
  const href = `https://${link}`;
  const num = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="project-card group relative flex flex-col justify-between min-h-[300px] md:min-h-[340px] p-7 md:p-8 overflow-hidden"
    >
      <div className="project-card-glow" aria-hidden />
      <div className="relative z-10 flex items-start justify-between gap-4 mb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-pink-600 font-mono font-semibold">
          {tags.slice(0, 3).join(" · ")}
        </div>
        {num && (
          <span className="font-mono text-xs text-pink-300 tabular-nums group-hover:text-pink-600 transition-colors">
            {num}
          </span>
        )}
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="text-3xl md:text-4xl font-serif italic text-pink-950 mb-4 leading-[1.05] tracking-tight group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-pink-700/90 text-sm md:text-[15px] leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex justify-between items-center mt-10 pt-5 border-t border-pink-100/80">
        <span className="text-[11px] font-mono text-pink-500 tracking-tight truncate max-w-[70%] group-hover:text-pink-600 transition-colors">
          {link}
        </span>
        <span className="w-11 h-11 rounded-md bg-pink-950 text-white flex items-center justify-center group-hover:bg-pink-600 transition-colors shrink-0">
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </motion.a>
  );
};
