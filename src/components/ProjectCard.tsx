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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="project-card group relative flex flex-col justify-between min-h-[260px] md:min-h-[280px] p-6 md:p-7 overflow-hidden"
    >
      <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-mono">
          {tags.slice(0, 3).join(" · ")}
        </div>
        {num && (
          <span className="font-mono text-[10px] text-slate-300 tabular-nums">
            {num}
          </span>
        )}
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="text-xl md:text-2xl font-serif italic font-normal text-slate-800 mb-3 leading-snug tracking-tight group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light max-w-md">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex justify-between items-center mt-8 pt-4 border-t border-slate-100">
        <span className="text-[11px] font-mono text-slate-400 tracking-tight truncate max-w-[70%] group-hover:text-pink-600 transition-colors">
          {link}
        </span>
        <span className="w-9 h-9 rounded-md border border-slate-200 text-slate-500 flex items-center justify-center group-hover:border-pink-600 group-hover:text-pink-600 group-hover:bg-pink-50 transition-all shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  );
};
