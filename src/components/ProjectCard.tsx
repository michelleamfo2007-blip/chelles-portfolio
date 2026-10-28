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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="project-card group relative flex flex-col overflow-hidden"
    >
      {/* Live site hero preview */}
      <div className="project-preview relative aspect-[16/10] overflow-hidden bg-slate-100">
        <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-white/70 backdrop-blur-md border-b border-black/5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
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
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 px-6">
            <p className="font-serif italic text-xl text-slate-400 text-center">{title}</p>
          </div>
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-mono">
              {tags.slice(0, 3).join(" · ")}
            </div>
            {num && (
              <span className="font-mono text-[10px] text-slate-300 tabular-nums">
                {num}
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-serif italic font-normal text-slate-800 mb-2 leading-snug tracking-tight group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span className="text-[11px] font-mono text-slate-400 tracking-tight group-hover:text-pink-600 transition-colors">
            Visit site
          </span>
          <span className="w-9 h-9 rounded-md border border-slate-200 text-slate-500 flex items-center justify-center group-hover:border-pink-600 group-hover:text-pink-600 group-hover:bg-pink-50 transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};
