import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, MapPin, Car } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="py-20 px-6 max-w-lg mx-auto text-center" id="rsvp">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="rsvp-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="design-frame p-8 md:p-12 rounded-none space-y-8 relative"
          >
            <div className="corner-decor -top-1 -left-1 w-8 h-8 border-r-0 border-b-0" />
            <div className="corner-decor -bottom-1 -right-1 w-8 h-8 border-l-0 border-t-0" />
            
            <div className="space-y-4">
              <Sparkles className="w-8 h-8 text-accent mx-auto" />
              <h2 className="text-3xl md:text-4xl font-serif italic text-accent">
                Witness the Magic
              </h2>
              <p className="text-slate-400 text-sm">
                Please join us in this extraordinary moment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A78BFA] ml-2">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-[#020617]/50 border border-accent-dim rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A78BFA] ml-2">Attendance</label>
                <select className="w-full bg-[#020617]/50 border border-accent-dim rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors">
                  <option value="yes">I'll be there to witness the magic</option>
                  <option value="no">Sending my magic from afar</option>
                </select>
              </div>
              <motion.button
                whileHover={{ backgroundColor: '#EAB308', color: '#020617' }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-transparent border border-accent text-accent font-bold py-4 rounded-none uppercase tracking-widest text-sm transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Casting Spell...' : 'Confirm My Presence'}
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 bg-accent/20 animate-pulse" />
                )}
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-12"
          >
            <div className="w-20 h-20 bg-accent-dim rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
              <Heart className="w-10 h-10 text-accent fill-accent" />
            </div>
            <h2 className="text-4xl font-serif italic text-accent">Thank You</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              The stars have been aligned. <br />
              We can't wait to share this magical journey with you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const VenueInfo: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="design-frame p-8 rounded-none space-y-6 relative">
        <div className="corner-decor -top-1 -left-1 w-8 h-8 border-r-0 border-b-0" />
        <div className="corner-decor -bottom-1 -right-1 w-8 h-8 border-l-0 border-t-0" />
        
        <div className="flex items-center gap-4 text-accent">
          <MapPin className="w-6 h-6" />
          <h3 className="text-xl font-serif italic uppercase tracking-widest">The Sanctuary</h3>
        </div>
        <div className="space-y-4">
          <p className="text-slate-300 text-lg">
            Follow the stars to our secret venue. Nestled where the forest whispers to the moon.
          </p>
        </div>
        <button className="text-accent text-sm underline underline-offset-4 hover:text-white transition-colors">
          View on Map
        </button>
        <div className="text-right mt-8 border-t border-accent-dim pt-4">
           <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Guest Note</p>
           <p className="text-xs font-serif italic text-accent/70 leading-relaxed">
             Follow the stars to the Conservatory.<br />
             14 magical parking spots reserved for those traveling by chariot (or car).
           </p>
        </div>
      </div>

      <div className="relative h-[400px] rounded-none overflow-hidden border border-accent-dim">
        <img 
          src="https://picsum.photos/seed/venue-forest/800/600?blur=1" 
          alt="Venue"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
           <p className="text-[10px] uppercase tracking-[0.3em] text-accent/80 mb-2">Location</p>
           <h4 className="text-2xl font-serif italic text-white">The Enchanted Estate</h4>
        </div>
      </div>
    </section>
  );
};
