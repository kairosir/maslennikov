"use client"

import { motion } from "framer-motion"
import { ChevronDown, Flame, Sparkles, Star, TrendingUp } from "lucide-react"

const heroStats = [
  {
    icon: TrendingUp,
    value: "12.5M",
    label: "Подписчиков",
  },
  {
    icon: Flame,
    value: "2.1B",
    label: "Просмотров",
  },
  {
    icon: Star,
    value: "548",
    label: "Видео",
  },
  {
    icon: Sparkles,
    value: "12+",
    label: "Лет на YouTube",
  },
]

export function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "100%" }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-primary border border-primary/30 rounded-full">
            Цифровой Архив 2014 — 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-balance"
        >
          <span className="text-foreground">Дима</span>
          <br />
          <span className="text-primary">Масленников</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          Полная интерактивная энциклопедия творчества. От первых видео до легендарных Заброшки-выпусков.
        </motion.p>

        <motion.a
          href="/about#disclaimer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-5 inline-flex max-w-2xl rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs leading-5 text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
        >
          Важная информация: это неофициальный фан-проект. Не связан с Димой Масленниковым и его командой.
        </motion.a>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {heroStats.map((stat, i) => {
            const Icon = stat.icon

            return (
              <div key={i} className="rounded-lg border border-border bg-background/45 p-4 text-center backdrop-blur-sm">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="font-serif font-bold text-2xl text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToTimeline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <span className="sr-only">Прокрутить вниз</span>
      </motion.button>
    </section>
  )
}
