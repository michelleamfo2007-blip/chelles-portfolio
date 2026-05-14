import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageCircle, MapPin, Send, MessageSquare, Clock, Phone } from "lucide-react";

export const Contact = () => {
  const faqs = [
    { q: "What is your typical project timeline?", a: "Most projects range from 4 to 12 weeks depending on complexity." },
    { q: "Are you available for full-time roles?", a: "Yes, I am open to high-impact roles in design-driven engineering teams." },
    { q: "Do you offer post-launch support?", a: "Absolutely. I provide maintenance packages to ensure your product scales safely." }
  ];

  return (
    <div className="bg-black text-white selection:bg-accent selection:text-black min-h-screen">
      {/* Hero Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">Inquiry</span>
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.8] mb-12">
              Let's build <br />
              <span className="not-italic text-accent">extraordinary.</span>
            </h1>
            <p className="max-w-2xl text-white/50 text-lg md:text-xl font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Let's create something that leaves a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Left Side: Info */}
            <div className="space-y-16">
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-accent">
                        <Mail className="w-5 h-5" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Direct Email</span>
                     </div>
                     <a href="mailto:devwithmercedes@gmail.com" className="text-lg font-medium hover:text-accent transition-colors block">
                        devwithmercedes@gmail.com
                     </a>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-accent">
                        <Phone className="w-5 h-5" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Phone & WhatsApp</span>
                     </div>
                     <a href="tel:+233537858896" className="text-lg font-medium hover:text-accent transition-colors block">
                        0537858896
                     </a>
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Social Channels</h3>
                  <div className="flex flex-wrap gap-8">
                     {[
                        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/michelle-amfo-906243409" },
                        { name: "TikTok", icon: <MessageCircle className="w-5 h-5" />, link: "https://www.tiktok.com/@devwithmercedes" },
                        { name: "GitHub", icon: <Github className="w-5 h-5" />, link: "https://github.com/michelleamfo2007-blip" }
                     ].map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors group">
                           {social.icon}
                           <span className="text-sm font-medium">{social.name}</span>
                        </a>
                     ))}
                  </div>
               </div>

               {/* Availability Indicator */}
               <div className="p-8 bg-[#0f0f0f] border border-white/5 rounded-xl flex items-center gap-6">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]" />
                  <div>
                     <div className="text-xs font-bold uppercase tracking-widest mb-1">Available for new projects</div>
                     <div className="text-white/40 text-[10px]">Response time: within 24 hours</div>
                  </div>
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-[#0f0f0f] border border-white/5 p-12 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-3xl font-serif italic mb-10 text-white">Send a Message</h3>
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest opacity-40">Your Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-sm transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest opacity-40">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-sm transition-colors" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest opacity-40">Subject</label>
                     <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-sm transition-colors appearance-none">
                        <option className="bg-black">Project Inquiry</option>
                        <option className="bg-black">Collaboration</option>
                        <option className="bg-black">Full-time Opportunity</option>
                        <option className="bg-black">Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest opacity-40">Message</label>
                     <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-sm transition-colors resize-none" />
                  </div>
                  <button disabled className="w-full h-16 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3 group">
                     Submit Inquiry
                     <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 border-t border-white/5 bg-[#050505]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-24">
               <div className="md:col-span-1">
                  <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block">Help Center</span>
                  <h2 className="text-4xl font-serif italic text-white tracking-tighter">Common <br /> Questions</h2>
               </div>
               <div className="md:col-span-2 space-y-12">
                  {faqs.map((faq, i) => (
                     <div key={i} className="group">
                        <h4 className="text-lg font-serif italic mb-4 text-white group-hover:text-accent transition-colors flex items-center gap-4">
                           <span className="text-accent/20 font-mono text-xs">0{i+1}</span>
                           {faq.q}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed pl-10 max-w-xl">
                           {faq.a}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Footer Snapshot */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <p>© 2026 CHELLE — CURRENT LOCAL TIME: {new Date().toLocaleTimeString()}</p>
          </div>
          <div className="flex gap-12 text-accent font-bold">
            <p>DESIGNED FOR IMPACT</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
