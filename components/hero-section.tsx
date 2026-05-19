"use client"

import { motion } from "framer-motion"
import { ChevronDown, Radio } from "lucide-react"

export function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121417]/50 to-[#121417]" />
      
      {/* Animated glow orb */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(57, 255, 20, 0.02) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"
          />
          <span className="text-xs font-mono tracking-widest uppercase text-[#39FF14]">
            ARCHIVE ONLINE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
        >
          <span className="text-white">Дима</span>
          <br />
          <span className="text-[#39FF14] glow-text">Масленников</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-[#A0A5B5] font-light"
        >
          Полная интерактивная энциклопедия творчества
        </motion.p>

        {/* Stats with glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "12+", label: "лет" },
            { value: "500+", label: "видео" },
            { value: "10M+", label: "подписчиков" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono font-bold text-2xl sm:text-3xl text-[#39FF14]">
                {stat.value}
              </div>
              <div className="text-xs text-[#A0A5B5] mt-1 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToTimeline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#39FF14]/50 hover:text-[#39FF14] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <span className="sr-only">Прокрутить вниз</span>
      </motion.button>
    </section>
  )
}
