"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon, Calendar } from "lucide-react"

interface TimelinePeriod {
  year: string
  title: string
  description: string
  image: string
  color: string
  videos: number
  highlights: string[]
}

const timelineData: TimelinePeriod[] = [
  {
    year: "2014",
    title: "Начало",
    description: "Первые шаги на YouTube. Экспериментальные влоги и поиск своего стиля.",
    image: "/placeholder-2014.jpg",
    color: "from-orange-500/20",
    videos: 12,
    highlights: ["Первое видео", "Формирование стиля", "Первые подписчики"],
  },
  {
    year: "2015",
    title: "Рост",
    description: "Развитие канала и первые вирусные видео. Эксперименты с форматами.",
    image: "/placeholder-2015.jpg",
    color: "from-red-500/20",
    videos: 48,
    highlights: ["Вирусные видео", "Новые форматы", "Рост аудитории"],
  },
  {
    year: "2016",
    title: "Челленджи",
    description: "Эра челленджей и экстремального контента. Взрывной рост популярности.",
    image: "/placeholder-2016.jpg",
    color: "from-amber-500/20",
    videos: 67,
    highlights: ["Челлендж-эра", "Экстрим", "Миллион подписчиков"],
  },
  {
    year: "2017",
    title: "Экстрим",
    description: "Экстремальные эксперименты и опасные видео. Пиковая популярность.",
    image: "/placeholder-2017.jpg",
    color: "from-red-600/20",
    videos: 82,
    highlights: ["Опасные эксперименты", "Рекорды просмотров", "Коллаборации"],
  },
  {
    year: "2018",
    title: "Трансформация",
    description: "Переход к более серьезному контенту. Первые намеки на мистику.",
    image: "/placeholder-2018.jpg",
    color: "from-orange-600/20",
    videos: 71,
    highlights: ["Смена формата", "Мистический контент", "Творческий рост"],
  },
  {
    year: "2019",
    title: "Abandoned",
    description: "Рождение легендарной серии Abandoned. Исследование заброшенных мест.",
    image: "/placeholder-2019.jpg",
    color: "from-primary/20",
    videos: 58,
    highlights: ["Первый Abandoned", "Заброшенные места", "Новая эра"],
  },
  {
    year: "2020",
    title: "Расцвет",
    description: "Золотая эра Abandoned. Самые знаменитые выпуски и мировое признание.",
    image: "/placeholder-2020.jpg",
    color: "from-red-500/20",
    videos: 45,
    highlights: ["Легендарные выпуски", "Международный успех", "10М подписчиков"],
  },
  {
    year: "2021",
    title: "Мистика",
    description: "Углубление в паранормальные исследования. Новые горизонты.",
    image: "/placeholder-2021.jpg",
    color: "from-orange-500/20",
    videos: 42,
    highlights: ["Паранормальное", "Новые локации", "Документалистика"],
  },
  {
    year: "2022",
    title: "Музыка",
    description: "Музыкальные эксперименты и новые творческие направления.",
    image: "/placeholder-2022.jpg",
    color: "from-amber-600/20",
    videos: 38,
    highlights: ["Музыкальные релизы", "Творческие коллабы", "Новые проекты"],
  },
  {
    year: "2023",
    title: "Эволюция",
    description: "Продолжение развития и новые амбициозные проекты.",
    image: "/placeholder-2023.jpg",
    color: "from-red-600/20",
    videos: 35,
    highlights: ["Масштабные проекты", "Новые форматы", "Эволюция стиля"],
  },
  {
    year: "2024",
    title: "Новая эра",
    description: "Современный этап творчества. Инновации и эксперименты.",
    image: "/placeholder-2024.jpg",
    color: "from-primary/20",
    videos: 32,
    highlights: ["Инновации", "Современный контент", "Новые технологии"],
  },
  {
    year: "2025",
    title: "Настоящее",
    description: "Текущие проекты и планы на будущее.",
    image: "/placeholder-2025.jpg",
    color: "from-orange-500/20",
    videos: 18,
    highlights: ["Актуальные проекты", "Планы", "Будущее канала"],
  },
]

export function Timeline() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Путешествие через годы творчества. Выберите период, чтобы узнать больше.
          </p>
        </motion.div>

        {/* Timeline navigation */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-foreground hover:bg-secondary transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="sr-only">Прокрутить влево</span>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-foreground hover:bg-secondary transition-colors hidden sm:block"
          >
            <ChevronRight className="w-5 h-5" />
            <span className="sr-only">Прокрутить вправо</span>
          </button>

          {/* Timeline cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 px-2 sm:px-8"
          >
            {timelineData.map((period, index) => (
              <motion.button
                key={period.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedPeriod(selectedPeriod?.year === period.year ? null : period)}
                className={`flex-shrink-0 w-40 sm:w-48 group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  selectedPeriod?.year === period.year
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${period.color} to-transparent opacity-50`} />
                
                <div className="relative p-4 text-left">
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-1">
                    {period.year}
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">
                    {period.title}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {period.description}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
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
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence mode="wait">
          {selectedPeriod && (
            <motion.div
              key={selectedPeriod.year}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 overflow-hidden"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
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
