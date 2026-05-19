"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Image as ImageIcon, Calendar, X } from "lucide-react"

interface TimelinePeriod {
  year: string
  title: string
  description: string
  videos: number
  highlights: string[]
}

const timelineData: TimelinePeriod[] = [
  {
    year: "2014",
    title: "Начало",
    description: "Первые шаги на YouTube. Экспериментальные влоги и поиск своего стиля.",
    videos: 12,
    highlights: ["Первое видео", "Формирование стиля", "Первые подписчики"],
  },
  {
    year: "2015",
    title: "Рост",
    description: "Развитие канала и первые вирусные видео. Эксперименты с форматами.",
    videos: 48,
    highlights: ["Вирусные видео", "Новые форматы", "Рост аудитории"],
  },
  {
    year: "2016",
    title: "Челленджи",
    description: "Эра челленджей и экстремального контента. Взрывной рост популярности.",
    videos: 67,
    highlights: ["Челлендж-эра", "Экстрим", "Миллион подписчиков"],
  },
  {
    year: "2017",
    title: "Экстрим",
    description: "Экстремальные эксперименты и опасные видео. Пиковая популярность.",
    videos: 82,
    highlights: ["Опасные эксперименты", "Рекорды просмотров", "Коллаборации"],
  },
  {
    year: "2018",
    title: "Трансформация",
    description: "Переход к более серьезному контенту. Первые намеки на мистику.",
    videos: 71,
    highlights: ["Смена формата", "Мистический контент", "Творческий рост"],
  },
  {
    year: "2019",
    title: "Abandoned",
    description: "Рождение легендарной серии Abandoned. Исследование заброшенных мест.",
    videos: 58,
    highlights: ["Первый Abandoned", "Заброшенные места", "Новая эра"],
  },
  {
    year: "2020",
    title: "Расцвет",
    description: "Золотая эра Abandoned. Самые знаменитые выпуски и мировое признание.",
    videos: 45,
    highlights: ["Легендарные выпуски", "Международный успех", "10М подписчиков"],
  },
  {
    year: "2021",
    title: "Мистика",
    description: "Углубление в паранормальные исследования. Новые горизонты.",
    videos: 42,
    highlights: ["Паранормальное", "Новые локации", "Документалистика"],
  },
  {
    year: "2022",
    title: "Музыка",
    description: "Музыкальные эксперименты и новые творческие направления.",
    videos: 38,
    highlights: ["Музыкальные релизы", "Творческие коллабы", "Новые проекты"],
  },
  {
    year: "2023",
    title: "Эволюция",
    description: "Продолжение развития и новые амбициозные проекты.",
    videos: 35,
    highlights: ["Масштабные проекты", "Новые форматы", "Эволюция стиля"],
  },
  {
    year: "2024",
    title: "Новая эра",
    description: "Современный этап творчества. Инновации и эксперименты.",
    videos: 32,
    highlights: ["Инновации", "Современный контент", "Новые технологии"],
  },
  {
    year: "2025",
    title: "Настоящее",
    description: "Текущие проекты и планы на будущее.",
    videos: 18,
    highlights: ["Актуальные проекты", "Планы", "Будущее канала"],
  },
]

export function Timeline() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null)

  return (
    <section id="timeline" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Хронология
          </h2>
          <p className="mt-4 text-muted-foreground">
            Нажмите на год, чтобы узнать больше
          </p>
        </motion.div>

        {/* Grid Timeline */}
        <div className="relative">
          {/* Grid of years */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {timelineData.map((period, index) => (
              <motion.button
                key={period.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPeriod(selectedPeriod?.year === period.year ? null : period)}
                className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 ${
                  selectedPeriod?.year === period.year
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <div className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-1">
                  {period.year}
                </div>
                <div className="text-xs sm:text-sm text-primary font-medium">
                  {period.title}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {period.videos} видео
                </div>

                {/* Active dot */}
                {selectedPeriod?.year === period.year && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Decorative connecting lines */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <svg className="w-full h-full opacity-20" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary/30" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence mode="wait">
          {selectedPeriod && (
            <motion.div
              key={selectedPeriod.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 relative">
                <button
                  onClick={() => setSelectedPeriod(null)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Info */}
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-serif font-bold text-5xl text-primary">
                        {selectedPeriod.year}
                      </span>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-foreground">
                          {selectedPeriod.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedPeriod.videos} видео
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedPeriod.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {selectedPeriod.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`/videos?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Видео
                      </a>
                      <a
                        href={`/gallery?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Галерея
                      </a>
                      <a
                        href={`/timeline/${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        Подробнее
                      </a>
                    </div>
                  </div>

                  {/* Featured videos */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                      Популярные видео
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="group relative aspect-video bg-secondary/50 rounded-xl overflow-hidden cursor-pointer border border-border/30"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/80 to-transparent">
                            <p className="text-xs text-foreground truncate">
                              Видео #{i}
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
