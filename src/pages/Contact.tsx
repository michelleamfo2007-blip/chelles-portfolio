import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageCircle, MapPin, Send, MessageSquare, Clock, Phone } from "lucide-react";

export const Contact = () => {
  const faqs = [
    { q: "What is your typical project timeline?", a: "Most projects range from 4 to 12 weeks depending on complexity." },
    { q: "Are you available for full-time roles?", a: "Yes, I am open to high-impact roles in design-driven engineering teams." },
    { q: "Do you offer post-launch support?", a: "Absolutely. I provide maintenance packages to ensure your product scales safely." }
  ];

  return (
    <div className="bg-off-white text-pink-950 min-h-screen">
      {/* Hero Header */}
      <section className="hero-container relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-light font-mono text-xs tracking-[0.2em] uppercase block mb-6">Inquiry</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9] mb-8 text-white">
              Let's build <br />
              <span className="not-italic text-pink-light">extraordinary.</span>
            </h1>
            <p className="max-w-2xl text-pink-100 text-lg md:text-xl font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Let's create something that leaves a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Info */}
            <div className="space-y-16">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="card group hover:-translate-y-1 transition-transform">
                     <div className="flex items-center gap-3 text-pink-600 mb-4">
                        <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors"><Mail className="w-5 h-5" /></div>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Direct Email</span>
                     </div>
                     <a href="mailto:devwithmercedes@gmail.com" className="text-sm font-medium hover:text-pink-600 transition-colors block text-pink-950">
                        devwithmercedes@gmail.com
                     </a>
                  </div>
                  <div className="card group hover:-translate-y-1 transition-transform">
                     <div className="flex items-center gap-3 text-pink-600 mb-4">
                        <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors"><Phone className="w-5 h-5" /></div>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Phone & WhatsApp</span>
                     </div>
                     <a href="tel:+233537858896" className="text-sm font-medium hover:text-pink-600 transition-colors block text-pink-950">
                        0537858896
                     </a>
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-700">Social Channels</h3>
                  <div className="flex flex-wrap gap-8">
                     {[
                        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/michelle-amfo-906243409" },
                        { name: "TikTok", icon: <MessageCircle className="w-5 h-5" />, link: "https://www.tiktok.com/@devwithmercedes" },
                        { name: "GitHub", icon: <Github className="w-5 h-5" />, link: "https://github.com/michelleamfo2007-blip" }
                     ].map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-900 hover:text-pink-600 transition-colors group p-3 bg-white rounded-lg shadow-sm border border-pink-100 hover:shadow-md">
                           {social.icon}
                           <span className="text-sm font-bold uppercase tracking-widest">{social.name}</span>
                        </a>
                     ))}
                  </div>
               </div>

               {/* Availability Indicator */}
               <div className="p-8 bg-pink-950 rounded-xl flex items-center gap-6 shadow-xl shadow-pink-950/10">
                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(244,114,182,0.6)]" />
                  <div>
                     <div className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Available for new projects</div>
                     <div className="text-pink-200/80 text-[10px] uppercase tracking-widest">Response time: within 24 hours</div>
                  </div>
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="card-elevated relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-3xl font-serif italic mb-10 text-pink-950">Send a Message</h3>
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-pink-700">Your Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-pink-50 border border-pink-100 rounded-lg px-4 py-3 focus:border-pink-500 focus:bg-white outline-none text-sm transition-colors text-pink-950 placeholder:text-pink-300" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-pink-700">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-pink-50 border border-pink-100 rounded-lg px-4 py-3 focus:border-pink-500 focus:bg-white outline-none text-sm transition-colors text-pink-950 placeholder:text-pink-300" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-pink-700">Subject</label>
                     <select className="w-full bg-pink-50 border border-pink-100 rounded-lg px-4 py-3 focus:border-pink-500 focus:bg-white outline-none text-sm transition-colors text-pink-950">
                        <option>Project Inquiry</option>
                        <option>Collaboration</option>
                        <option>Full-time Opportunity</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-pink-700">Message</label>
                     <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-pink-50 border border-pink-100 rounded-lg px-4 py-3 focus:border-pink-500 focus:bg-white outline-none text-sm transition-colors resize-none text-pink-950 placeholder:text-pink-300" />
                  </div>
                  <button type="button" className="w-full h-14 bg-pink-950 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-pink-800 transition-all flex items-center justify-center gap-3 rounded-lg shadow-lg group mt-4">
                     Submit Inquiry
                     <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section py-24 bg-pink-50">
         <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-16">
               <div className="md:col-span-1">
                  <span className="text-pink-700 font-mono text-[12px] tracking-widest uppercase mb-4 block">Help Center</span>
                  <h2 className="text-4xl font-serif italic text-pink-950 tracking-tighter">Common <br /> Questions</h2>
               </div>
               <div className="md:col-span-2 space-y-8">
                  {faqs.map((faq, i) => (
                     <div key={i} className="card group">
                        <h4 className="text-lg font-serif italic mb-4 text-pink-950 flex items-center gap-4">
                           <span className="text-pink-300 font-mono text-xs font-bold">0{i+1}</span>
                           {faq.q}
                        </h4>
                        <p className="text-pink-800/70 text-sm leading-relaxed pl-10">
                           {faq.a}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
