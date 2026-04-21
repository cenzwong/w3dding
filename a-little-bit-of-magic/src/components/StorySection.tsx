import React from 'react';
import { motion } from 'motion/react';

export const StorySection: React.FC<{
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  reverse?: boolean;
}> = ({ title, subtitle, content, image, reverse }) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-serif italic text-accent leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="font-serif italic text-xl md:text-2xl text-purple-400/80 mt-2">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-px bg-accent-dim mt-4" />
          </div>
          
          <div className="prose prose-invert">
            <p className="text-slate-300 leading-relaxed text-lg font-light">
              {content}
            </p>
          </div>
        </motion.div>

        {/* Image Side */}
        {image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="design-frame p-3 relative">
               <div className="corner-decor -top-1 -left-1 w-10 h-10 border-r-0 border-b-0" />
               <div className="corner-decor -bottom-1 -right-1 w-10 h-10 border-l-0 border-t-0" />
               <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-accent-dim shadow-2xl">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export const ParchmentDivider: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <div className="flex items-center justify-center py-12 px-6">
      <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-accent-dim to-transparent" />
      {text && (
        <span className="mx-4 font-serif italic text-xl text-accent/60 whitespace-nowrap uppercase tracking-widest">
          {text}
        </span>
      )}
      <div className="h-px w-full max-w-[200px] bg-gradient-to-l from-transparent via-accent-dim to-transparent" />
    </div>
  );
};
