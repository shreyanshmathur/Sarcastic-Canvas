import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Importing the actual assets provided
import imgSuit from "@assets/c84a8361-a995-43db-92d7-10b84a982d25_1768509073014.jpg";
import imgElevator from "@assets/11ae7186-78fa-4535-bda9-9f49673464b8_1768509073013.jpg";
import imgThrone from "@assets/Screenshot_20220523-125146_1768509073013.jpg";
import imgShreyansh from "@assets/IMG_7691_1768509225161.jpg";
import imgHari from "@assets/c84a8361-a995-43db-92d7-10b84a982d25_1768509245380.jpg";
import imgLaser from "@assets/975709d9-04c6-45b1-a32a-995676c8c6ba_1768509073019.jpg";
import imgJumpsuit from "@assets/6c806d63-2d1c-4858-8357-565a5d1edd2a_1768509073021.jpg";
import imgBowling from "@assets/8c4b0d7a-78c3-446f-bac7-98e76eadd6b2_1768509073016.jpg";
import imgGokart from "@assets/6021cc65-594f-47d0-ac98-f21e7e0675f8_1768509073018.jpg";
import imgGroupStreet from "@assets/c2ec51ec-b946-4930-9426-53ad5caf5258_1768509073014.jpg";
import imgGroupMirror from "@assets/a5e0418e-d725-458e-83a1-df6382d3c24e_1768509073014.jpg";
import imgGroupNight from "@assets/92d3a763-5ca2-47b3-929a-a9dabcc832e5_1768509073019.jpg";
import imgGroupSunny from "@assets/37207e98-1c28-448a-9bf7-87db4602d3b6_1768509073017.jpg";

import heroBg from "@assets/generated_images/abstract_aggressive_geometry_warning.png";


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

const CharacterCard = ({ name, role, desc, img, stats }: any) => (
  <div className="bg-white border-4 border-black p-4 brutal-shadow hover:rotate-1 transition-transform">
    <div className="aspect-square border-4 border-black mb-4 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-black bg-black text-white inline-block px-2 mb-2 uppercase">{name}</h3>
    <p className="font-mono font-bold text-primary mb-2 uppercase">{role}</p>
    <p className="font-mono text-sm mb-4 border-t-2 border-black pt-2">{desc}</p>
    {stats && (
      <ul className="text-xs font-mono space-y-1 bg-gray-100 p-2 border-2 border-black">
        {stats.map((s: string, i: number) => <li key={i}>• {s}</li>)}
      </ul>
    )}
  </div>
);

export default function Home() {
  const handleUselessClick = () => {
    alert("RSVP Confirmed: You have no choice anyway.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-50 flex justify-between items-center p-4">
        <div className="text-xl md:text-2xl font-black bg-black text-white px-2 py-1 truncate max-w-[200px] md:max-w-none">
          THE UNNECESSARY TRIP™
        </div>
        <div className="hidden md:flex gap-6 font-mono font-bold">
          <a href="#masterminds" className="hover:underline decoration-4 decoration-primary">THE CULPRITS</a>
          <a href="#evidence" className="hover:underline decoration-4 decoration-secondary">EVIDENCE</a>
          <a href="#itinerary" className="hover:underline decoration-4 decoration-accent">THE CHAOS</a>
        </div>
        <button className="bg-secondary border-2 border-black px-4 py-2 font-bold uppercase hover:bg-black hover:text-white transition-colors text-sm md:text-base">
          Jan 23-27
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative border-b-4 border-black min-h-[90vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 z-0" 
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover' }}
        />
        
        <div className="relative z-10 max-w-5xl">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary border-4 border-black p-2 mb-6 inline-block transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="font-mono text-lg md:text-xl font-bold uppercase">Urgent: This could've been a text</span>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter"
          >
            THE MOST <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent stroke-black" style={{ WebkitTextStroke: '2px black' }}>UNNECESSARY</span> <br/>
            BANGALORE TRIP
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-mono font-bold mb-10 bg-white inline-block px-4 py-2 border-2 border-black rotate-1"
          >
            60 Slides. 4 Days. Zero Dignity.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <SarcasticButton onClick={handleUselessClick}>
              Accept Fate
            </SarcasticButton>
            <span className="font-mono text-sm bg-black text-white p-1">Jan 23-27, 2026</span>
          </div>
        </div>
      </header>

      {/* The Masterminds Section */}
      <section id="masterminds" className="p-12 md:p-24 bg-accent border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading className="bg-white px-4 transform -rotate-1">The Masterminds</SectionHeading>
          <p className="text-xl font-bold mb-12 max-w-2xl bg-white border-2 border-black p-4">
            Introducing: The trio nobody asked for but everyone's stuck with.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CharacterCard 
              name="Shreyansh"
              role="The Logistics Guy"
              img={imgShreyansh}
              desc="Half of 'The Bakchod Duo'. Spreadsheets for his spreadsheets. Has already planned bathroom breaks for the entire trip."
              stats={["Navigation Wizard", "Budget Master (splits bill in 2 mins)", "Calendar Color-Coder"]}
            />
            <CharacterCard 
              name="Sarthak"
              role="Designated Bartender"
              img={imgElevator}
              desc="Answer to everything: 'Chalo daru pite hai'. Spontaneity Level: 1000. Plans are merely suggestions."
              stats={["Climbs Random Things", "Finds Spots Google Doesn't Know", "Motto: 'Trust me bro'"]}
            />
            <CharacterCard 
              name="Hari"
              role="Adventure Architect"
              img={imgHari}
              desc="The Local Legend. Street Food Connoisseur. Knows which tourist traps to expertly avoid."
              stats={["Food Oracle", "Never Uses GPS", "Pro Yulu Rider (Questionable skills)"]}
            />
             <CharacterCard 
              name="Akshith"
              role="Corporate Professional"
              img={imgSuit}
              desc="Works at the 'most prestigious firm'. Vertically challenged. First to pass out, guaranteed."
              stats={["Alcohol Tolerance: -5", "The Krishna Excuse", "Sort Of Professional"]}
            />
          </div>
        </div>
      </section>

      {/* Why Section - With Evidence */}
      <section id="evidence" className="grid md:grid-cols-2 border-b-4 border-black">
        <div className="p-12 md:p-24 bg-white flex flex-col justify-center border-r-4 border-black">
           <SectionHeading>SCIENTIFIC EVIDENCE</SectionHeading>
           <div className="space-y-6">
             <div className="bg-gray-100 p-6 border-4 border-black">
               <h3 className="font-black text-3xl mb-2">98%</h3>
               <p className="font-mono uppercase">Probability of Chaos</p>
             </div>
             <div className="bg-primary p-6 border-4 border-black text-white transform translate-x-4">
               <h3 className="font-black text-3xl mb-2">100%</h3>
               <p className="font-mono uppercase">Unforgettable Moments</p>
             </div>
             <div className="bg-secondary p-6 border-4 border-black transform -translate-x-2">
               <h3 className="font-black text-3xl mb-2">Zero</h3>
               <p className="font-mono uppercase">Boring Moments Since 1947</p>
             </div>
           </div>
        </div>
        <div className="relative overflow-hidden group min-h-[500px]">
          <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 bg-black">
            <img src={imgJumpsuit} className="w-full h-full object-cover border-2 border-white hover:scale-110 transition-transform duration-500" />
            <img src={imgGroupNight} className="w-full h-full object-cover border-2 border-white hover:scale-110 transition-transform duration-500" />
            <img src={imgGroupMirror} className="w-full h-full object-cover border-2 border-white hover:scale-110 transition-transform duration-500" />
            <img src={imgGroupSunny} className="w-full h-full object-cover border-2 border-white hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-white border-4 border-black p-4 rotate-3 shadow-[8px_8px_0px_0px_rgba(255,0,255,1)]">
               <span className="font-black text-xl md:text-3xl uppercase">Receipts</span>
             </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="border-b-4 border-black">
        <div className="bg-black text-white p-12 md:p-24 text-center border-b-4 border-white">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">The Itinerary</h2>
          <p className="font-mono text-xl">Carefully planned chaos by Shreyansh, random additions by Sarthak.</p>
        </div>

        {/* Day 1 */}
        <div className="grid md:grid-cols-2">
           <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
             <span className="bg-black text-white font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">JAN 24 • SATURDAY</span>
             <h3 className="text-4xl font-black uppercase mb-6">Pretend Nature Enthusiasts</h3>
             <ul className="space-y-4 font-mono">
               <li className="flex gap-4 items-start">
                 <span className="font-black text-xl">AM</span>
                 <div>
                   <strong className="block text-lg">Bannerghatta National Park</strong>
                   <span className="text-sm opacity-75">Safari adventure. Lions, tigers, and bears (maybe). Butterfly park for the aesthetic.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <span className="font-black text-xl">PM</span>
                 <div>
                   <strong className="block text-lg">Dinner & Vibes</strong>
                   <span className="text-sm opacity-75">Location TBD (Hari's picking). Unplanned karaoke at Sarthak's PG.</span>
                 </div>
               </li>
             </ul>
           </div>
           <div className="h-64 md:h-auto border-b-4 md:border-b-0 border-black overflow-hidden relative">
              <img src={imgJumpsuit} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 bg-secondary border-2 border-black p-2 font-bold text-xs uppercase">
                Figure 1: "Nature"
              </div>
           </div>
        </div>

        {/* Day 2 */}
        <div className="grid md:grid-cols-2">
           <div className="h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden relative order-2 md:order-1">
              <img src={imgBowling} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 left-4 bg-primary text-white border-2 border-black p-2 font-bold text-xs uppercase">
                Figure 2: "Maturity"
              </div>
           </div>
           <div className="p-12 border-b-4 md:border-b-0 border-black bg-accent order-1 md:order-2">
             <span className="bg-black text-white font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">JAN 25 • SUNDAY</span>
             <h3 className="text-4xl font-black uppercase mb-6">Unlock Inner Child</h3>
             <ul className="space-y-4 font-mono">
               <li className="flex gap-4 items-start">
                 <span className="font-black text-xl">AM</span>
                 <div>
                   <strong className="block text-lg">Recovery Mode</strong>
                   <span className="text-sm opacity-75">Saturday night was spirited. Sleep in. Hydrate. No judgment.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <span className="font-black text-xl">PM</span>
                 <div>
                   <strong className="block text-lg">Play Arena & Loco Bear</strong>
                   <span className="text-sm opacity-75">Trampolines, Go-karts, VR. Followed by craft beers (IPAs for the bold, Stouts for the adventurous).</span>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        {/* Day 3 */}
        <div className="p-12 bg-secondary border-black text-center">
            <span className="bg-white border-2 border-black font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">JAN 26 • MONDAY</span>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8">The Mysterious Day</h3>
            <p className="font-mono text-xl max-w-2xl mx-auto mb-8">
              Intentionally left flexible because A) We might be tired, B) Someone will have a brilliant idea, or C) We just drink all day (Best Option).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="bg-white border-2 border-black px-3 py-1 font-bold">Cubbon Park</span>
               <span className="bg-white border-2 border-black px-3 py-1 font-bold">Food Crawl</span>
               <span className="bg-white border-2 border-black px-3 py-1 font-bold">Nandi Hills (Lol no)</span>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-12 md:p-24 bg-white border-b-4 border-black">
        <SectionHeading>Real Testimonials</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-4 border-black p-6 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-lg mb-4">"I came a cynic, I left a changed human. My therapist is thrilled, my wallet less so."</p>
            <div className="font-black bg-primary text-white inline-block px-2">- A Victim</div>
          </div>
          <div className="border-4 border-black p-6 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-100">
            <p className="font-mono text-lg mb-4">"My expectations were in the Mariana Trench. You guys dug straight through to the other side."</p>
            <div className="font-black bg-secondary text-black inline-block px-2">- Another Victim</div>
          </div>
          <div className="border-4 border-black p-6 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-lg mb-4">"When's the next trip?"</p>
            <div className="font-black bg-accent text-black inline-block px-2">- Everyone</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-12 border-t-4 border-white text-center font-mono">
        <h2 className="text-4xl font-black mb-6 text-primary">SEE YOU IN BANGALORE</h2>
        <p className="opacity-50 text-sm mb-8">
          © 2026 The Bakchod Duo & Co. All Rights Reserved.<br/>
          Warning: We are not liable for any liver damage or lost dignity.
        </p>
        <img src={imgGokart} className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white grayscale hover:grayscale-0 transition-all" />
      </footer>
    </div>
  );
}
