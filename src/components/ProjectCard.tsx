import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ title, description, link, tags }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card group flex flex-col justify-between h-[320px] transition-all hover:border-pink-300"
    >
      <div>
        <div className="text-[10px] uppercase tracking-widest text-pink-950 mb-4 font-mono font-bold">
          {tags.join(" / ")}
        </div>
        <h3 className="text-3xl font-serif text-pink-950 mb-3 italic leading-tight group-hover:text-pink-700 transition-colors">
          {title}
        </h3>
        <p className="text-pink-900/70 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-end mt-4 pt-4 border-t border-pink-100">
        <span className="text-[11px] font-mono text-pink-400 tracking-tight truncate max-w-[200px]">{link}</span>
        <a 
          href={`https://${link}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};
