import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_aggressive_geometry_warning.png";
import partyImg from "@assets/generated_images/sarcastic_party_blower_deadpan_face.png";
import officeImg from "@assets/generated_images/chaotic_office_panic_smiling.png";

const SarcasticButton = ({ children, className = "", ...props }: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-primary text-white border-4 border-black font-bold uppercase py-4 px-8 text-xl brutal-shadow transition-transform ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ children, className = "" }: any) => (
  <h2 className={`text-4xl md:text-6xl font-black uppercase mb-8 border-b-4 border-black inline-block ${className}`}>
    {children}
  </h2>
);

export default function Home() {
  const [rsvpCount, setRsvpCount] = useState(0);

  const handleUselessClick = () => {
    setRsvpCount(prev => prev + 1);
    alert("Your click has been noted and discarded.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-50 flex justify-between items-center p-4">
        <div className="text-2xl font-black bg-black text-white px-2 py-1">THE EVENT™</div>
        <div className="hidden md:flex gap-6 font-mono font-bold">
          <a href="#why" className="hover:underline decoration-4 decoration-primary">WHY?</a>
          <a href="#agenda" className="hover:underline decoration-4 decoration-secondary">AGENDA</a>
          <a href="#rsvp" className="hover:underline decoration-4 decoration-accent">REGRET</a>
        </div>
        <button className="bg-secondary border-2 border-black px-4 py-2 font-bold uppercase hover:bg-black hover:text-white transition-colors">
          Do Not Click
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative border-b-4 border-black min-h-[90vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 z-0" 
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover' }}
        />
        
        <div className="relative z-10 max-w-4xl">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border-4 border-black p-2 mb-4 inline-block transform -rotate-2"
          >
            <span className="font-mono text-lg font-bold">⚠️ MANDATORY FUN ALERT ⚠️</span>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-black leading-[0.85] mb-6 tracking-tighter"
          >
            YOU ARE <br/>
            <span className="text-primary text-stroke-black">INVITED.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl font-mono font-bold mb-10 bg-secondary inline-block px-2 border-2 border-black"
          >
            (Whether you like it or not)
          </motion.p>

          <SarcasticButton onClick={handleUselessClick}>
            Accept Fate
          </SarcasticButton>
        </div>
      </header>

      {/* The "Why" Section */}
      <section id="why" className="grid md:grid-cols-2 border-b-4 border-black">
        <div className="p-12 md:p-24 bg-accent flex flex-col justify-center border-r-4 border-black">
           <div className="bg-white border-4 border-black p-4 rotate-1 brutal-shadow mb-8">
            <img src={partyImg} alt="Enthusiasm" className="w-full h-auto grayscale contrast-125" />
           </div>
           <p className="font-mono text-sm text-center font-bold bg-white border-2 border-black inline-block mx-auto px-2">
             Fig 1: Actual footage of employee satisfaction
           </p>
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
          <SectionHeading>WHY ARE WE HERE?</SectionHeading>
          <p className="text-xl md:text-2xl font-bold mb-6">
            Management read a Medium article about "Synergy" and now we have to do this.
          </p>
          <ul className="list-disc pl-6 space-y-4 font-mono text-lg">
            <li>Free pizza (limit 1 slice per person)</li>
            <li>Awkward icebreakers</li>
            <li>Mandatory clapping</li>
            <li>PowerPoint presentations with 400 slides</li>
          </ul>
        </div>
      </section>

      {/* The Agenda Section */}
      <section id="agenda" className="border-b-4 border-black bg-black text-white p-12 md:p-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading className="text-white border-white mb-16">THE SCHEDULE</SectionHeading>
          
          <div className="space-y-8">
            {[
              { time: "09:00 AM", title: "Forced Interaction", desc: "Look at the person to your left. Now look to your right. Apologize to both." },
              { time: "10:30 AM", title: "The Keynote", desc: "A 90-minute speech about 'Doing More With Less' delivered by someone who does Less With More." },
              { time: "12:00 PM", title: "Sad Lunch", desc: "Lukewarm sandwiches. The vegetarian option is just bread." },
              { time: "02:00 PM", title: "Team Building", desc: "Trust falls onto a concrete floor." },
              { time: "05:00 PM", title: "Escape", desc: "First one to the elevator wins." },
            ].map((item, i) => (
              <motion.div 
                whileHover={{ x: 10, backgroundColor: "#FF00FF", color: "#000" }}
                key={i} 
                className="flex flex-col md:flex-row gap-8 border-4 border-white p-6 transition-colors"
              >
                <div className="font-mono text-2xl font-bold min-w-[150px]">{item.time}</div>
                <div>
                  <h3 className="text-3xl font-black uppercase mb-2">{item.title}</h3>
                  <p className="font-mono text-lg opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Fun" Section */}
      <section className="grid md:grid-cols-2 border-b-4 border-black">
        <div className="p-12 md:p-24 flex flex-col justify-center bg-secondary border-b-4 md:border-b-0 md:border-r-4 border-black">
          <SectionHeading>TEAM BUILDING</SectionHeading>
          <p className="text-2xl font-bold mb-8">
            "We're like a family." <br/>
            <span className="text-sm font-mono bg-white inline-block px-1 mt-2">
              (A dysfunctional one that only talks through lawyers)
            </span>
          </p>
          <div className="bg-white border-4 border-black p-8 brutal-shadow">
            <h4 className="font-black text-xl mb-4">ACTIVITY: THE KNOT</h4>
            <p className="font-mono mb-4">Hold hands with everyone. Tangle yourselves up. Realize this is a metaphor for our codebase.</p>
            <SarcasticButton className="w-full text-sm py-2">I refuse</SarcasticButton>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img 
            src={officeImg} 
            alt="Chaos" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1" 
          />
          <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute bottom-8 right-8 bg-white border-4 border-black p-4 rotate-3">
             <span className="font-black text-2xl">FUN IS MANDATORY</span>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="p-12 md:p-24 bg-muted flex flex-col items-center text-center">
        <div className="max-w-2xl w-full bg-white border-4 border-black p-8 md:p-12 brutal-shadow">
          <h2 className="text-5xl font-black mb-2">RSVP</h2>
          <p className="font-mono mb-8 text-muted-foreground">Please tell us you're coming so we can ignore your dietary restrictions.</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); alert("Error: 418 I'm a teapot. Your RSVP is lost forever."); }}>
            <div>
              <label className="block font-black uppercase mb-2">Name (or Alias)</label>
              <input type="text" className="w-full bg-gray-100 border-4 border-black p-4 font-mono focus:outline-none focus:bg-secondary transition-colors" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block font-black uppercase mb-2">Excitement Level</label>
              <select className="w-full bg-gray-100 border-4 border-black p-4 font-mono focus:outline-none focus:bg-secondary transition-colors appearance-none">
                <option>Low</option>
                <option>Very Low</option>
                <option>Non-existent</option>
                <option>I am actively weeping</option>
              </select>
            </div>

            <div>
               <label className="block font-black uppercase mb-2">Any Allergies?</label>
               <div className="flex gap-4">
                 <label className="flex items-center gap-2 font-mono border-2 border-black p-2 bg-white cursor-pointer hover:bg-accent">
                   <input type="radio" name="allergies" className="accent-black w-6 h-6" /> Yes
                 </label>
                 <label className="flex items-center gap-2 font-mono border-2 border-black p-2 bg-white cursor-pointer hover:bg-accent">
                   <input type="radio" name="allergies" className="accent-black w-6 h-6" checked readOnly /> No (Incorrect)
                 </label>
               </div>
            </div>

            <SarcasticButton className="w-full mt-8">
              SUBMIT (TO AUTHORITY)
            </SarcasticButton>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-12 border-t-4 border-white text-center font-mono">
        <p className="mb-4 text-2xl font-black">THE EVENT™</p>
        <p className="opacity-50 text-sm">
          © {new Date().getFullYear()} CorpName Inc. All Rights Reserved.<br/>
          Any resemblance to actual enjoyment is purely coincidental.
        </p>
      </footer>
    </div>
  );
}
