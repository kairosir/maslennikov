"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Minimal gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Subtle animated accent */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.2 25 / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-primary/80 border border-primary/20 rounded-full bg-primary/5">
            Цифровой Архив
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
        >
          <span className="text-foreground">Дима</span>
          <br />
          <span className="text-primary">Масленников</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground font-light"
        >
          Полная интерактивная энциклопедия творчества
        </motion.p>

        {/* Compact Stats */}
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
              <div className="font-serif font-semibold text-2xl sm:text-3xl text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <span className="sr-only">Прокрутить вниз</span>
      </motion.button>
    </section>
  )
}
