import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// Importing the actual assets provided
import imgSuit from "@assets/c84a8361-a995-43db-92d7-10b84a982d25_1768509073014.jpg";
import imgElevator from "@assets/11ae7186-78fa-4535-bda9-9f49673464b8_1768510069389.jpg";
import imgThrone from "@assets/Screenshot_20220523-125146_1768510093837.jpg";
import imgShreyansh from "@assets/IMG_7691_1768509225161.jpg";
import imgHari from "@assets/c84a8361-a995-43db-92d7-10b84a982d25_1768509245380.jpg";
import imgSarthak from "@assets/Screenshot_20220523-125146_1768509327916.jpg";
import imgAkshith from "@assets/image_1768509418497.png";
import imgDevayan from "@assets/image_1768511012796.png";
import imgLaser from "@assets/975709d9-04c6-45b1-a32a-995676c8c6ba_1768510093841.jpg";
import imgLaser2 from "@assets/IMG_6315_1768510136872.jpg";
import imgLaser3 from "@assets/IMG_6317_1768510136873.jpg";
import imgJumpsuit from "@assets/6c806d63-2d1c-4858-8357-565a5d1edd2a_1768510093843.jpg";
import imgBowling from "@assets/8c4b0d7a-78c3-446f-bac7-98e76eadd6b2_1768510093839.jpg";
import imgGokart from "@assets/6021cc65-594f-47d0-ac98-f21e7e0675f8_1768510093840.jpg";
import imgGroupStreet from "@assets/c2ec51ec-b946-4930-9426-53ad5caf5258_1768510093837.jpg";
import imgGroupMirror from "@assets/a5e0418e-d725-458e-83a1-df6382d3c24e_1768510093838.jpg";
import imgGroupNight from "@assets/92d3a763-5ca2-47b3-929a-a9dabcc832e5_1768510093841.jpg";
import imgGroupSunny from "@assets/37207e98-1c28-448a-9bf7-87db4602d3b6_1768510093840.jpg";
import imgPlayArena from "@assets/IMG_6329_1768510136874.jpg";
import imgDay2PlayPhoto from "@assets/play_day2_photo.jpg";

import heroBg from "@assets/generated_images/abstract_aggressive_geometry_warning.png";

// Slideshow data with sarcastic captions
const slideshowImages = [
  { src: imgElevator, caption: "Pre-gaming in the elevator because waiting is for losers", alt: "Elevator drinks" },
  { src: imgThrone, caption: "Sarthak practicing for his future as a disappointed king", alt: "Throne pose" },
  { src: imgGroupStreet, caption: "Lost tourists pretending they know where they're going", alt: "Street group" },
  { src: imgGroupMirror, caption: "Taking mirror selfies like it's 2012. Embarrassing.", alt: "Mirror selfie" },
  { src: imgBowling, caption: "Adults at Loco Bear pretending to be functional members of society", alt: "Bowling" },
  { src: imgGroupSunny, caption: "The squad looking for food (a recurring theme, we're basically just stomachs with legs)", alt: "Sunny group" },
  { src: imgGokart, caption: "Proof that we're just overgrown children with money and zero emotional regulation", alt: "Go kart" },
  { src: imgGroupNight, caption: "2 AM and we've already made decisions we'll regret by 10 AM", alt: "Night group" },
  { src: imgLaser, caption: "Tactical operators with the aim of a drunk potato and the strategy of a confused pigeon", alt: "Laser tag" },
  { src: imgLaser2, caption: "Why are we taking this so seriously? Nobody knows. Therapy bills incoming.", alt: "Laser tag 2" },
  { src: imgLaser3, caption: "Expendables 4: The Budget Version (Now with 100% more disappointment)", alt: "Laser tag 3" },
  { src: imgJumpsuit, caption: "Matching outfits because peer pressure is real and we have no personality", alt: "Jumpsuit gang" },
  { src: imgPlayArena, caption: "Playing games is the only exercise we get. Judge us. We dare you.", alt: "Play arena" },
];

// Devayan Jumpscare Component
const DevayanJumpscare = () => {
  const [showJumpscare, setShowJumpscare] = useState(false);

  useEffect(() => {
    const triggerJumpscare = () => {
      setShowJumpscare(true);

      // Play scary sound
      const audio = new Audio("https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3");
      audio.volume = 0.4;
      audio.play().catch(() => { });

      // Hide after 20-40 seconds (random)
      const displayTime = Math.floor(Math.random() * 20000) + 20000;
      setTimeout(() => setShowJumpscare(false), displayTime);
    };

    // Random interval between 30-90 seconds
    const scheduleNextJumpscare = () => {
      const randomDelay = Math.floor(Math.random() * 60000) + 30000;
      return setTimeout(() => {
        triggerJumpscare();
        scheduleNextJumpscare();
      }, randomDelay);
    };

    const timeoutId = scheduleNextJumpscare();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {showJumpscare && (
        <motion.div
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col md:flex-row items-center justify-center p-4 md:p-8 cursor-pointer overflow-y-auto"
          onClick={() => setShowJumpscare(false)}
        >
          <motion.div
            animate={{
              rotate: [0, -2, 2, -2, 2, 0],
              scale: [1, 1.02, 1, 1.02, 1]
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="relative mb-6 md:mb-0 md:mr-8"
          >
            <img
              src={imgDevayan}
              alt="DEVAYAN JUMPSCARE"
              className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain border-8 border-destructive shadow-[0_0_100px_rgba(255,0,0,0.8)]"
            />
          </motion.div>

          <div className="max-w-lg text-center md:text-left">
            <motion.h2
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-destructive text-4xl md:text-6xl font-black uppercase mb-4"
              style={{ textShadow: '0 0 20px red, 0 0 40px red' }}
            >
              DEVAYAN JUMP SCARE
            </motion.h2>

            <h3 className="text-white text-2xl md:text-3xl font-black mb-6 uppercase">
              The Enigma We Can't Explain
            </h3>

            <div className="space-y-4 text-left">
              <div className="bg-white/10 border-2 border-destructive p-3">
                <p className="text-primary font-black text-lg uppercase">Indiranagar Enthusiast</p>
                <p className="text-white/80 font-mono text-sm">Knows every corner of Indiranagar like the back of his hand. Suspicious? Very.</p>
              </div>

              <div className="bg-white/10 border-2 border-destructive p-3">
                <p className="text-secondary font-black text-lg uppercase">The Mystery Man</p>
                <p className="text-white/80 font-mono text-sm">We tried brainstorming who he is, but he's more of a concept than a person. Philosophy majors are confused.</p>
              </div>

              <div className="bg-white/10 border-2 border-destructive p-3">
                <p className="text-accent font-black text-lg uppercase">Basement Population: 67+</p>
                <p className="text-white/80 font-mono text-sm">Has 67 children in his basement (that we know of). The number keeps growing. We're scared.</p>
              </div>

              <div className="bg-white/10 border-2 border-destructive p-3">
                <p className="text-destructive font-black text-lg uppercase">Empire Builder</p>
                <p className="text-white/80 font-mono text-sm">Runs an illegal drug empire bigger than Pablo Escobar's (allegedly). We have no proof. He has no alibis.</p>
              </div>
            </div>

            <p className="text-white/30 text-xs mt-6 font-mono">(click anywhere to escape... temporarily)</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SarcasticButton = ({ children, className = "", onClick, ...props }: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
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

const CharacterCard = ({ name, role, desc, img, stats, objectPosition = "center" }: any) => (
  <div className="bg-white border-4 border-black p-4 brutal-shadow hover:rotate-1 transition-transform">
    <div className="aspect-square border-4 border-black mb-4 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all">
      <img src={img} alt={name} className="w-full h-full object-cover" style={{ objectPosition }} />
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

// Photo Slideshow Component
const PhotoSlideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Hover caption overlay */}
                <div
                  className={`absolute inset-0 bg-black/80 flex items-center justify-center p-8 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <p className="text-white text-2xl md:text-4xl font-black text-center uppercase">
                    {image.caption}
                  </p>
                </div>
                {/* Always visible caption bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4">
                  <p className="text-white font-mono text-center text-sm md:text-lg">
                    "{image.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black w-12 h-12 flex items-center justify-center font-black text-2xl brutal-shadow hover:bg-primary hover:text-white transition-colors z-10"
        data-testid="slideshow-prev"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black w-12 h-12 flex items-center justify-center font-black text-2xl brutal-shadow hover:bg-primary hover:text-white transition-colors z-10"
        data-testid="slideshow-next"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 border-2 border-black transition-colors ${index === selectedIndex ? 'bg-primary' : 'bg-white'
              }`}
            data-testid={`slideshow-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAcceptFate = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      alert("CONGRATULATIONS! 🎉 You've officially signed your soul away. There's no backing out now. Pack your bags, say goodbye to your liver, and prepare for the most aggressively fun trip of your mediocre life. See you in Bangalore, LOSER! ❤️");
      setShowConfirmation(false);
    }, 500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Devayan Jumpscare - Always active */}
      <DevayanJumpscare />

      {/* Navigation */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-50 flex justify-between items-center p-4">
        <div
          className="text-xl md:text-2xl font-black bg-black text-white px-2 py-1 truncate max-w-[200px] md:max-w-none cursor-pointer hover:bg-primary transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="nav-logo"
        >
          THE UNNECESSARY TRIP™
        </div>
        <div className="hidden md:flex gap-6 font-mono font-bold">
          <button onClick={() => scrollToSection('masterminds')} className="hover:underline decoration-4 decoration-primary" data-testid="nav-culprits">THE CULPRITS</button>
          <button onClick={() => scrollToSection('evidence')} className="hover:underline decoration-4 decoration-secondary" data-testid="nav-evidence">EVIDENCE</button>
          <button onClick={() => scrollToSection('itinerary')} className="hover:underline decoration-4 decoration-accent" data-testid="nav-chaos">THE CHAOS</button>
        </div>
        <button
          className="bg-secondary border-2 border-black px-4 py-2 font-bold uppercase hover:bg-black hover:text-white transition-colors text-sm md:text-base"
          onClick={() => scrollToSection('itinerary')}
          data-testid="nav-date"
        >
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
            className="bg-destructive text-white border-4 border-black p-2 mb-6 inline-block transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="font-mono text-lg md:text-xl font-bold uppercase">⚠️ URGENT: This Could've Been a WhatsApp Message But We're Extra ⚠️</span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter"
          >
            THE MOST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent stroke-black" style={{ WebkitTextStroke: '2px black' }}>UNNECESSARY</span> <br />
            BANGALORE TRIP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-mono font-bold mb-4 bg-white inline-block px-4 py-2 border-2 border-black rotate-1"
          >
            You're about to waste precious minutes of your life reading this. Worth it? Probably not.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-mono mb-10 bg-secondary inline-block px-3 py-1 border-2 border-black -rotate-1"
          >
            Buckle up buttercup, this train has no brakes.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <SarcasticButton onClick={handleAcceptFate} data-testid="accept-fate-btn">
              Accept Your Fate (No Refunds)
            </SarcasticButton>
            <span className="font-mono text-sm bg-black text-white p-2">Jan 23-27, 2026 | Because regular invites are for boring people</span>
          </div>

          <div className="bg-white border-4 border-black p-4 max-w-md mx-auto brutal-shadow">
            <p className="font-black text-lg mb-2">Why does this website exist?</p>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="bg-gray-100 p-2 border border-black">
                <strong>Option A:</strong><br />We have too much free time and no hobbies
              </div>
              <div className="bg-gray-100 p-2 border border-black">
                <strong>Option B:</strong><br />We wanted to annoy you specifically
              </div>
              <div className="bg-primary text-white p-2 border border-black">
                <strong>Option C:</strong><br />All of the above ✓
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Photo Slideshow Section */}
      <section className="border-b-4 border-black bg-black p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-8 uppercase">
            Photographic Evidence of Our <span className="text-primary">Poor Life Choices</span>
          </h2>
          <p className="text-white font-mono text-center mb-8 opacity-75">Hover for the brutal truth behind each carefully curated lie</p>
          <PhotoSlideshow />
        </div>
      </section>

      {/* The Masterminds Section */}
      <section id="masterminds" className="p-12 md:p-24 bg-accent border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading className="bg-white px-4 transform -rotate-1">The Masterminds Behind This Trainwreck</SectionHeading>
          <p className="text-xl font-bold mb-12 max-w-2xl bg-white border-2 border-black p-4">
            Introducing: The quartet nobody asked for, nobody wanted, but everyone's stuck with anyway. You're welcome.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            <CharacterCard
              name="Shreyansh"
              role="The Logistics Overlord"
              img={imgShreyansh}
              desc="Half of 'The Bakchod Duo'. The only person who actually knows what's happening. Will sell his kidney for content. Has a spreadsheet addiction that requires intervention."
              stats={["Spreadsheets for his spreadsheets for his spreadsheets", "Will send you 47 reminders (minimum)", "Has planned your bathroom breaks (yes, really)"]}
            />
            <CharacterCard
              name="Sarthak"
              role="Chief Chaos Officer"
              img={imgSarthak}
              desc="His answer to literally everything? 'Chalo daru pite hai'. Plans are merely suggestions he ignores. 'Trust me bro' - famous last words before disaster."
              stats={["'What if we just climb that?' - moments before tragedy", "'Why would we need a reservation?' - said confidently, wrongly", "Finds spots even Google is scared of"]}
            />
            <CharacterCard
              name="Hari"
              role="The Human GPS (Allegedly)"
              img={imgHari}
              desc="One half of 'The Bakchod Duo'. Claims to never need GPS because he IS the GPS. Spoiler: He's gotten us lost 47 times. But the street food finds? *Chef's kiss*"
              stats={["Pro Yulu Rider (citation needed)", "Knows shortcuts that add 2 hours", "Food Oracle but make it chaotic"]}
            />
            <CharacterCard
              name="Akshith"
              role="Corporate Disappointment"
              img={imgAkshith}
              objectPosition="top"
              desc="The shortest in the group and somehow also the shortest on brain cells after one drink. Works at 'the most prestigious firm' (his mom told him that)."
              stats={["Alcohol Tolerance: Negative infinity", "First to pass out, first to deny it", "'Krishna ji dekh rahe hain' - said while ordering another"]}
            />
          </div>
        </div>
      </section>

      {/* Why You Should Come - Threats Section */}
      <section className="p-12 md:p-24 bg-black text-white border-b-4 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">Why You Should Actually Come</h2>
          <p className="font-mono text-2xl mb-12 bg-white text-black inline-block px-4 py-2 border-2 border-white rotate-1">
            (This is a threat wrapped in an invitation. You've been warned.)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border-4 border-white p-6 hover:bg-primary transition-colors cursor-pointer" onClick={() => scrollToSection('evidence')}>
              <h3 className="font-black text-4xl mb-2">98%</h3>
              <p className="font-mono uppercase">Probability of Chaos</p>
              <p className="text-xs mt-2 opacity-75">The remaining 2% is when we're sleeping (barely)</p>
            </div>
            <div className="border-4 border-white p-6 hover:bg-secondary hover:text-black transition-colors cursor-pointer" onClick={() => scrollToSection('evidence')}>
              <h3 className="font-black text-4xl mb-2">87%</h3>
              <p className="font-mono uppercase">Laughter Quotient</p>
              <p className="text-xs mt-2 opacity-75">Your abs will hurt. Your dignity won't survive.</p>
            </div>
            <div className="border-4 border-white p-6 hover:bg-accent hover:text-black transition-colors cursor-pointer" onClick={() => scrollToSection('evidence')}>
              <h3 className="font-black text-4xl mb-2">100%</h3>
              <p className="font-mono uppercase">Regrettable Decisions</p>
              <p className="text-xs mt-2 opacity-75">Good stories guaranteed. Therapy bills not included.</p>
            </div>
          </div>

          <a
            href="https://en.wikipedia.org/wiki/Assassination_of_Mahatma_Gandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-4 border-white p-6 brutal-shadow inline-block cursor-pointer hover:bg-primary hover:text-white transition-colors"
            data-testid="track-record-link"
          >
            <p className="font-black text-2xl">Our Track Record:</p>
            <p className="font-mono text-xl">Zero boring moments since 1947</p>
          </a>
        </div>
      </section>

      {/* Past Trip Highlights */}
      <section id="evidence" className="p-12 md:p-24 bg-secondary border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Exhibit A: The Crime Scene Photos</SectionHeading>
          <p className="font-mono text-lg mb-8">Data collected from previous Bangalore disasters. Sample size: Every single time we've traumatized this city.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:-rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-black text-white px-2 py-1">March 2023</span>
              <h3 className="font-black text-xl mt-2 mb-2">The Political Car Incident™</h3>
              <p className="font-mono text-sm">Hari "accidentally" scratched a political car. Our insurance company still sends us hate mail. The less said, the better.</p>
            </div>
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-primary text-white px-2 py-1">April 2025</span>
              <h3 className="font-black text-xl mt-2 mb-2">Infinite Bread Glitch</h3>
              <p className="font-mono text-sm">Hari unlocked a culinary exploit that defies physics and restaurant economics. Scientists are baffled. We're just hungry.</p>
            </div>
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:-rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-accent text-black px-2 py-1">April 2025</span>
              <h3 className="font-black text-xl mt-2 mb-2">Legendary Brownboard Discovery</h3>
              <p className="font-mono text-sm">Hari and Sarthak unearthed a relic. Its true purpose remains a sacred mystery. The cult is growing.</p>
            </div>
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-destructive text-white px-2 py-1">March 2025</span>
              <h3 className="font-black text-xl mt-2 mb-2">Hari's First Taste</h3>
              <p className="font-mono text-sm">Fully committed to the alcoholic experience. His liver filed a restraining order. Cheers to new beginnings and bad decisions!</p>
            </div>
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:-rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-black text-white px-2 py-1">April 2025</span>
              <h3 className="font-black text-xl mt-2 mb-2">Shreyansh & Hari's "Incident"</h3>
              <p className="font-mono text-sm">Some lore are best left in the group chat graveyard, but definitely not forgotten. The witnesses are sworn to secrecy. 👀</p>
            </div>
            <div className="bg-white border-4 border-black p-4 brutal-shadow hover:rotate-1 transition-transform cursor-pointer">
              <span className="text-xs font-mono bg-primary text-white px-2 py-1">November 2025</span>
              <h3 className="font-black text-xl mt-2 mb-2">The Balloon Mindf*ck</h3>
              <p className="font-mono text-sm">We achieved peak communication without uttering a single word. Telepathy? Collective brain damage? Yes.</p>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-4 border-black text-center">
            <p className="font-mono text-lg">Also: We're shitfaced drunk every single time, spend way too much on arcades like functioning adults, and Shreyansh & Hari's cricket skills get progressively worse with each drink (which is saying something).</p>
          </div>
        </div>
      </section>

      {/* Secret Sauce */}
      <section className="p-12 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-8 uppercase">THE SECRET SAUCE (It's Mostly Alcohol)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary text-white border-4 border-black px-6 py-3 font-black text-xl brutal-shadow hover:rotate-2 transition-transform cursor-pointer">Questionable People</span>
            <span className="bg-secondary border-4 border-black px-6 py-3 font-black text-xl brutal-shadow hover:-rotate-2 transition-transform cursor-pointer">Worse Jokes</span>
            <span className="bg-accent border-4 border-black px-6 py-3 font-black text-xl brutal-shadow hover:rotate-2 transition-transform cursor-pointer">Suspicious Food</span>
            <span className="bg-black text-white border-4 border-black px-6 py-3 font-black text-xl brutal-shadow hover:-rotate-2 transition-transform cursor-pointer">Chaotic Energy</span>
            <span className="bg-destructive text-white border-4 border-black px-6 py-3 font-black text-xl brutal-shadow hover:rotate-2 transition-transform cursor-pointer">BLACKMAIL MATERIAL</span>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="border-b-4 border-black">
        <div className="bg-black text-white p-12 md:p-24 text-center border-b-4 border-white">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">The Grand Masterplan</h2>
          <p className="font-mono text-xl mb-4">4 Days of Organized Chaos | January 23-27, 2026</p>
          <p className="font-mono text-lg opacity-75">Carefully planned by Shreyansh, immediately ruined by Sarthak, reluctantly approved by Hari</p>
        </div>

        {/* Day 1 */}
        <div className="grid md:grid-cols-2">
          <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
            <span className="bg-black text-white font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">DAY 1 • JAN 24 • SATURDAY</span>
            <h3 className="text-4xl font-black uppercase mb-2">When We Pretend to be Nature Enthusiasts</h3>
            <p className="font-mono text-sm mb-6 opacity-75">Because nothing says friendship like watching animals judge our life choices</p>
            <ul className="space-y-4 font-mono">
              <li className="flex gap-4 items-start">
                <span className="font-black text-xl bg-secondary px-2">AM</span>
                <div>
                  <strong className="block text-lg">Bannerghatta National Park</strong>
                  <span className="text-sm opacity-75">Safari Adventure • Zoo Exploration • Butterfly Park (for the Instagram aesthetic we desperately need)</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-black text-xl bg-primary text-white px-2">PM</span>
                <div>
                  <strong className="block text-lg">Dinner & Night Cap (More Like Night Bottle)</strong>
                  <span className="text-sm opacity-75">Location TBD (Hari's picking, pray for us). Dress code: Exhausted from safari, dead inside. Ends at Sarthak's PG for drinks, dancing, and karaoke that will definitely get us evicted.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="h-64 md:h-auto border-b-4 md:border-b-0 border-black overflow-hidden relative">
            <img src={imgJumpsuit} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute bottom-4 right-4 bg-secondary border-2 border-black p-2 font-bold text-xs uppercase">
              Figure 1: "Sophistication" (Delusional)
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden relative order-2 md:order-1">
            <img src={imgDay2PlayPhoto} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute top-4 left-4 bg-primary text-white border-2 border-black p-2 font-bold text-xs uppercase">
              Figure 2: "Maturity" (Non-existent)
            </div>
          </div>
          <div className="p-12 border-b-4 md:border-b-0 border-black bg-accent order-1 md:order-2">
            <span className="bg-black text-white font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">DAY 2 • JAN 25 • SUNDAY</span>
            <h3 className="text-4xl font-black uppercase mb-2">The Day We Abandon Adulthood Entirely</h3>
            <p className="font-mono text-sm mb-6">Yes, we're adults. No, we don't act like it. Problem?</p>
            <ul className="space-y-4 font-mono">
              <li className="flex gap-4 items-start">
                <span className="font-black text-xl bg-white px-2">AM</span>
                <div>
                  <strong className="block text-lg">Recovery Mode (Survival Mode)</strong>
                  <span className="text-sm opacity-75">Saturday night was a war zone. Sleep in, hydrate aggressively, question your life choices. No judgment, no rush, no dignity left.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-black text-xl bg-black text-white px-2">PM</span>
                <div>
                  <strong className="block text-lg">Play Arena (Adults Playing Kids' Games)</strong>
                  <span className="text-sm opacity-75">Trampolines (defying gravity and our age), Arcade Games (getting embarrassingly competitive over meaningless prizes), VR, Laser Tag, Cricket (because ego issues).</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-black text-xl bg-primary text-white px-2">EVE</span>
                <div>
                  <strong className="block text-lg">Loco Bear (Bad Decisions Central)</strong>
                  <span className="text-sm opacity-75">Craft beers (IPAs for pretentious people, Stouts for masochists), wings that slap, burgers that hit different. Then Church Street or wherever Sarthak's Random Idea™ takes us.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Day 3 */}
        <div className="p-12 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <span className="bg-black text-white font-mono px-2 py-1 text-sm font-bold mb-4 inline-block">DAY 3 • JAN 26 • MONDAY (REPUBLIC DAY - IRONIC)</span>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-4">The Mysterious Day (We Have No Plan)</h3>
            <p className="font-mono text-xl mb-8">
              This day is intentionally left flexible because:<br />
              A) We might be physically deceased | B) Someone will have a terrible idea we'll follow anyway | C) Democracy decides (scary) | D) All of the above (likely)
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border-4 border-black p-4 hover:bg-secondary transition-colors cursor-pointer">
                <h4 className="font-black text-lg">Option 1: Cubbon Park</h4>
                <p className="font-mono text-sm">Morning walks, Government Museum, pretend we're sophisticated adults who read books and have opinions.</p>
              </div>
              <div className="border-4 border-black p-4 hover:bg-accent transition-colors cursor-pointer">
                <h4 className="font-black text-lg">Option 2: Lumbini Gardens</h4>
                <p className="font-mono text-sm">Lake vibes, boating, actually relaxing for once. Perfect for recovering from weekend carnage.</p>
              </div>
              <div className="border-4 border-black p-4 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <h4 className="font-black text-lg">Option 3: The Food Crawl</h4>
                <p className="font-mono text-sm">MTR for breakfast, Vidyarthi Bhavan for the life-changing dosa, Indian Coffee House for pretentious vibes, Hari's secret dinner weapon.</p>
              </div>
              <div className="border-4 border-black p-4 bg-gray-100 cursor-pointer">
                <h4 className="font-black text-lg">Option 4: Nandi Hills Sunrise</h4>
                <p className="font-mono text-sm">⚠️ Requires 4 AM wake up. Views are incredible. Reality: Sarthak will suggest this at midnight after 6 drinks.</p>
              </div>
              <div className="border-4 border-black p-4 bg-destructive text-white col-span-full md:col-span-2 cursor-pointer hover:scale-105 transition-transform">
                <h4 className="font-black text-xl">Option 5: Drink All Day (THE ONLY CORRECT OPTION)</h4>
                <p className="font-mono text-sm">Because sometimes, the best plan is no plan—just a continuous flow of liquid encouragement and poor decisions. Liver damage is temporary, memories are forever (or forgotten).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-12 md:p-24 bg-muted border-b-4 border-black">
        <SectionHeading>Totally Real Testimonials (We Didn't Make These Up)</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-4 border-black p-6 bg-white hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
            <p className="font-mono text-lg mb-4">"I came a cynic, I left a changed human. My therapist is thrilled about the job security, my wallet weeps, but my soul is confused!"</p>
            <div className="font-black bg-primary text-white inline-block px-2">- A Victim (Stockholm Syndrome)</div>
          </div>
          <div className="border-4 border-black p-6 bg-white hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
            <p className="font-mono text-lg mb-4">"The food! Oh, the food! I wept. Actual tears. My entire culinary philosophy has been shattered, rebuilt, and then shattered again."</p>
            <div className="font-black bg-secondary text-black inline-block px-2">- Food Convert (Now Overweight)</div>
          </div>
          <div className="border-4 border-black p-6 bg-white hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
            <p className="font-mono text-lg mb-4">"My expectations were in the Mariana Trench. These idiots not only met them but dug straight through to the other side of the planet. I'm scared."</p>
            <div className="font-black bg-accent text-black inline-block px-2">- Former Skeptic (Now Believer)</div>
          </div>
        </div>
      </section>

      {/* Places Conquered */}
      <section className="p-12 bg-black text-white border-b-4 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-8 uppercase">Places We've Traumatized Together</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-white p-4 hover:bg-primary transition-colors cursor-pointer">
              <h4 className="font-black text-xl">Koramangala</h4>
              <p className="font-mono text-sm opacity-75">Every cafe, every restaurant, every hidden spot that regrets serving us</p>
            </div>
            <div className="border-2 border-white p-4 hover:bg-secondary hover:text-black transition-colors cursor-pointer">
              <h4 className="font-black text-xl">Indiranagar</h4>
              <p className="font-mono text-sm opacity-75">Late night walks and decisions our future selves hate</p>
            </div>
            <div className="border-2 border-white p-4 hover:bg-accent hover:text-black transition-colors cursor-pointer">
              <h4 className="font-black text-xl">MG Road</h4>
              <p className="font-mono text-sm opacity-75">Where the magic happens (and by magic, we mean chaos)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-12 border-t-4 border-white text-center font-mono">
        <h2 className="text-4xl font-black mb-6 text-primary">SEE YOU IN BANGALORE (OR ELSE)</h2>
        <p className="text-xl mb-4">"When's the next trip?" - Everyone, immediately regretting asking</p>
        <p className="opacity-50 text-sm mb-8">
          © 2026 The Bakchod Duo & Co. All Rights Reserved. Some Rights Questionable.<br />
          Warning: We are not liable for any liver damage, lost dignity, empty wallets, or legendary lore created.<br />
          Side effects may include: Excessive laughter, poor decisions, and an inexplicable urge to return.<br />
          From laser tag to late-night disasters, we know how to have a "good" time.
        </p>
        <div className="flex justify-center gap-4">
          <img src={imgGokart} className="w-24 h-24 object-cover rounded-full border-4 border-white grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <img src={imgGroupNight} className="w-24 h-24 object-cover rounded-full border-4 border-white grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <img src={imgLaser} className="w-24 h-24 object-cover rounded-full border-4 border-white grayscale hover:grayscale-0 transition-all cursor-pointer" />
        </div>
        <p className="mt-8 text-xs opacity-30">P.S. If you scrolled this far, you're already committed. There's no escape now. See you soon, victim. ❤️</p>
      </footer>
    </div>
  );
}
