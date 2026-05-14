import { motion } from "motion/react";

export const ProjectCard = ({ title, description, link, tags }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-[#0f0f0f] border border-white/5 p-8 flex flex-col justify-between h-[320px] transition-all hover:border-accent/30"
    >
      <div>
        <div className="text-[10px] uppercase tracking-widest text-accent mb-4 font-mono">
          {tags.join(" / ")}
        </div>
        <h3 className="text-4xl font-serif text-white mb-4 italic leading-tight">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-end">
        <span className="text-[11px] font-mono opacity-30 tracking-tight">{link}</span>
        <a 
          href={`https://${link}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-accent hover:text-black hover:border-accent transition-all"
        >
          →
        </a>
      </div>
    </motion.div>
  );
};
