import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projectPreviewUrl, type Project } from "../data/projects";

type Props = Project & { index?: number };

export const ProjectCard = ({ title, description, link, tags, index, image }: Props) => {
  const href = `https://${link}`;
  const preview = projectPreviewUrl(link, image);
  const num = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="project-card group relative flex flex-col overflow-hidden"
    >
      <div className="project-card-glow" aria-hidden />

      {/* Live site hero preview */}
      <div className="project-preview relative aspect-[16/10] overflow-hidden bg-pink-950">
        <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-pink-950/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="ml-2 font-mono text-[9px] tracking-wide text-slate-400 truncate">
            {link}
          </span>
        </div>

        {!imgFailed ? (
          <img
            src={preview}
            alt={`${title} website preview`}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-900 to-pink-950 px-6">
            <p className="font-serif italic text-2xl text-pink-light/80 text-center">{title}</p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-7">
        <div>
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-pink-600 font-mono font-semibold">
              {tags.slice(0, 3).join(" · ")}
            </div>
            {num && (
              <span className="font-mono text-xs text-pink-300 tabular-nums group-hover:text-pink-600 transition-colors">
                {num}
              </span>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif italic text-pink-950 mb-3 leading-[1.05] tracking-tight group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          <p className="text-pink-700/90 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center pt-4 border-t border-pink-100/80">
          <span className="text-[11px] font-mono text-pink-500 tracking-tight truncate max-w-[70%] group-hover:text-pink-600 transition-colors">
            Visit site
          </span>
          <span className="w-10 h-10 rounded-md bg-pink-950 text-white flex items-center justify-center group-hover:bg-pink-600 transition-colors shrink-0">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};
