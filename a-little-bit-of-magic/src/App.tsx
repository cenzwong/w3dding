import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MagicBackground, Sparkles } from './components/MagicBackground';
import { StorySection, ParchmentDivider } from './components/StorySection';
import { CountdownTimer } from './components/CountdownTimer';
import { RSVPSection, VenueInfo } from './components/RSVPSection';
import { Music, ArrowDown } from 'lucide-react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <MagicBackground>
      <div ref={containerRef} className="relative">
        
        {/* Floating Audio Toggle - Concept */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-6 right-6 z-50 p-3 glass rounded-full text-orange-200"
          title="Toggle Magic Music"
        >
          <Music className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
        </motion.button>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden p-6 md:p-12">
          <Sparkles />
          
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="design-frame relative w-full h-full flex flex-col items-center justify-between p-10 md:p-20 text-center"
          >
            {/* Corner Decor */}
            <div className="corner-decor -top-2 -left-2 border-r-0 border-b-0" />
            <div className="corner-decor -bottom-2 -right-2 border-l-0 border-t-0" />

            <div className="mt-12 md:mt-0">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-accent font-serif uppercase tracking-[0.5em] text-[10px] md:text-sm mb-8"
              >
                A Little Bit of Magic is about to happen
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-serif italic text-white mb-8 tracking-tight magic-text"
              >
                Evelyn & <br />Julian
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-slate-300 font-serif italic text-base md:text-lg max-w-lg mx-auto"
              >
                "Join us for a quiet spark that turns an ordinary moment into something extraordinary."
              </motion.p>
            </div>

            <div className="mb-12 md:mb-0 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">The Date</p>
                <p className="text-2xl md:text-3xl font-serif italic text-accent">October 24, 2026</p>
                <p className="text-sm text-slate-400">Saturday at 4:30 PM</p>
              </div>
              <div className="h-px w-24 bg-accent/20 mx-auto" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-accent/40"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </section>

        {/* Countdown Section */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-purple-400 font-sans uppercase tracking-[0.2em] text-[11px] mb-8">The magic begins in...</h3>
            <CountdownTimer targetDate="2026-10-24T16:30:00" />
            <motion.button
              whileHover={{ backgroundColor: '#EAB308', color: '#020617' }}
              className="mt-12 px-8 py-3 border border-accent text-accent uppercase tracking-widest text-sm transition-all duration-300"
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              I'll be there to witness the magic
            </motion.button>
          </div>
        </section>

        <ParchmentDivider text="Our Magic Story" />

        {/* Story Section 1 */}
        <StorySection 
          title="The Spark"
          subtitle="A tale of magic"
          content="Join us for a quiet spark that turns an ordinary moment into something extraordinary. What started as a chance meeting grew into a collection of moments that weave together the tapestry of our lives. We invite you to be part of the next chapter."
          image="https://picsum.photos/seed/wedding-1/1000/1200"
        />

        {/* Story Section 2 */}
        <StorySection 
          title="The Journey"
          subtitle="Hand in hand"
          content="They say magic isn't something you find, it's something you create. Through whispers and laughter, shared dreams and silent understandings, we have built a world that is uniquely ours. A world full of wonder, wait, and absolute joy."
          image="https://picsum.photos/seed/wedding-2/1000/1200"
          reverse
        />

        <ParchmentDivider text="The Celebration" />

        {/* Venue Info */}
        <VenueInfo />

        <ParchmentDivider text="Reservation" />

        {/* RSVP Section */}
        <RSVPSection />

        {/* Footer */}
        <footer className="py-12 border-t border-orange-400/10 text-center opacity-40">
          <p className="font-calligraphy text-xl text-orange-200">With Love, Always.</p>
          <p className="text-[10px] uppercase tracking-widest mt-2">{new Date().getFullYear()} — Made with Magic</p>
        </footer>
      </div>
    </MagicBackground>
  );
}
