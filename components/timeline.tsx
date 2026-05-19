"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Image as ImageIcon, Calendar, X } from "lucide-react"

interface TimelinePeriod {
  year: string
  title: string
  description: string
  color: string
  videos: number
  highlights: string[]
  row: number
  col: number
}

const timelineData: TimelinePeriod[] = [
  {
    year: "2014",
    title: "Начало",
    description: "Первые шаги на YouTube. Экспериментальные влоги и поиск своего стиля.",
    color: "from-orange-500/20",
    videos: 12,
    highlights: ["Первое видео", "Формирование стиля", "Первые подписчики"],
    row: 0,
    col: 0,
  },
  {
    year: "2015",
    title: "Рост",
    description: "Развитие канала и первые вирусные видео. Эксперименты с форматами.",
    color: "from-red-500/20",
    videos: 48,
    highlights: ["Вирусные видео", "Новые форматы", "Рост аудитории"],
    row: 0,
    col: 1,
  },
  {
    year: "2016",
    title: "Челленджи",
    description: "Эра челленджей и экстремального контента. Взрывной рост популярности.",
    color: "from-amber-500/20",
    videos: 67,
    highlights: ["Челлендж-эра", "Экстрим", "Миллион подписчиков"],
    row: 0,
    col: 2,
  },
  {
    year: "2017",
    title: "Экстрим",
    description: "Экстремальные эксперименты и опасные видео. Пиковая популярность.",
    color: "from-red-600/20",
    videos: 82,
    highlights: ["Опасные эксперименты", "Рекорды просмотров", "Коллаборации"],
    row: 0,
    col: 3,
  },
  {
    year: "2018",
    title: "Трансформация",
    description: "Переход к более серьезному контенту. Первые намеки на мистику.",
    color: "from-orange-600/20",
    videos: 71,
    highlights: ["Смена формата", "Мистический контент", "Творческий рост"],
    row: 1,
    col: 0,
  },
  {
    year: "2019",
    title: "Abandoned",
    description: "Рождение легендарной серии Abandoned. Исследование заброшенных мест.",
    color: "from-primary/20",
    videos: 58,
    highlights: ["Первый Abandoned", "Заброшенные места", "Новая эра"],
    row: 1,
    col: 1,
  },
  {
    year: "2020",
    title: "Расцвет",
    description: "Золотая эра Abandoned. Самые знаменитые выпуски и мировое признание.",
    color: "from-red-500/20",
    videos: 45,
    highlights: ["Легендарные выпуски", "Международный успех", "10М подписчиков"],
    row: 1,
    col: 2,
  },
  {
    year: "2021",
    title: "Мистика",
    description: "Углубление в паранормальные исследования. Новые горизонты.",
    color: "from-orange-500/20",
    videos: 42,
    highlights: ["Паранормальное", "Новые локации", "Документалистика"],
    row: 1,
    col: 3,
  },
  {
    year: "2022",
    title: "Музыка",
    description: "Музыкальные эксперименты и новые творческие направления.",
    color: "from-amber-600/20",
    videos: 38,
    highlights: ["Музыкальные релизы", "Творческие коллабы", "Новые проекты"],
    row: 2,
    col: 0,
  },
  {
    year: "2023",
    title: "Эволюция",
    description: "Продолжение развития и новые амбициозные проекты.",
    color: "from-red-600/20",
    videos: 35,
    highlights: ["Масштабные проекты", "Новые форматы", "Эволюция стиля"],
    row: 2,
    col: 1,
  },
  {
    year: "2024",
    title: "Новая эра",
    description: "Современный этап творчества. Инновации и эксперименты.",
    color: "from-primary/20",
    videos: 32,
    highlights: ["Инновации", "Современный контент", "Новые технологии"],
    row: 2,
    col: 2,
  },
  {
    year: "2025",
    title: "Настоящее",
    description: "Текущие проекты и планы на будущее.",
    color: "from-orange-500/20",
    videos: 18,
    highlights: ["Актуальные проекты", "Планы", "Будущее канала"],
    row: 2,
    col: 3,
  },
]

export function Timeline() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null)

  // Group by rows
  const rows = [0, 1, 2].map(rowIndex => 
    timelineData.filter(item => item.row === rowIndex)
  )

  return (
    <section id="timeline" className="min-h-screen py-24 relative snap-start flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Хронология
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Путешествие через годы творчества. Нажмите на год, чтобы узнать больше.
          </p>
        </motion.div>

        {/* Web/Grid Timeline */}
        <div className="relative">
          {/* Connection lines - SVG web pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 space-y-4">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              >
                {row.map((period, colIndex) => (
                  <motion.button
                    key={period.year}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.1 + colIndex * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => setSelectedPeriod(selectedPeriod?.year === period.year ? null : period)}
                    className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
                      selectedPeriod?.year === period.year
                        ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                        : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${period.color} to-transparent opacity-50`} />
                    
                    {/* Web connection dots */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/30" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-primary/20" />
                    
                    <div className="relative p-4 text-left">
                      <div className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-1">
                        {period.year}
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">
                        {period.title}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2 hidden sm:block">
                        {period.description}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <Play className="w-3 h-3" />
                        <span>{period.videos} видео</span>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {selectedPeriod?.year === period.year && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Decorative web lines connecting the grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
            {/* Horizontal lines */}
            {[0, 1].map(i => (
              <motion.div
                key={`h-${i}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                className="absolute left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{ top: `${33 + i * 33}%` }}
              />
            ))}
            {/* Vertical lines */}
            {[0, 1, 2].map(i => (
              <motion.div
                key={`v-${i}`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.8 }}
                className="absolute top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden sm:block"
                style={{ left: `${25 + i * 25}%` }}
              />
            ))}
          </div>
        </div>

        {/* Expanded content modal */}
        <AnimatePresence mode="wait">
          {selectedPeriod && (
            <motion.div
              key={selectedPeriod.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 relative">
                <button
                  onClick={() => setSelectedPeriod(null)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left column - Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-serif font-bold text-4xl sm:text-5xl text-primary">
                        {selectedPeriod.year}
                      </span>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-foreground">
                          {selectedPeriod.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedPeriod.videos} видео за год
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {selectedPeriod.description}
                    </p>

                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Ключевые моменты:
                    </h4>
                    <ul className="space-y-2">
                      {selectedPeriod.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/videos?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Смотреть видео
                      </a>
                      <a
                        href={`/gallery?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Галерея
                      </a>
                      <a
                        href={`/timeline/${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        Подробнее
                      </a>
                    </div>
                  </div>

                  {/* Right column - Featured videos placeholder */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-4">
                      Популярные видео {selectedPeriod.year}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="group relative aspect-video bg-secondary rounded-lg overflow-hidden cursor-pointer"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/90 to-transparent">
                            <p className="text-xs text-foreground truncate">
                              Видео #{i} - {selectedPeriod.year}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
