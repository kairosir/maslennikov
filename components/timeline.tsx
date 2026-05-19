"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Image as ImageIcon, Calendar, X, Radio } from "lucide-react"

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
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-[#39FF14]" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#39FF14]">
              TIMELINE DATA
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Хронология
          </h2>
          <p className="mt-4 text-[#A0A5B5]">
            Нажмите на год для детальной информации
          </p>
        </motion.div>

        {/* Grid Timeline */}
        <div className="relative">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {timelineData.map((period, index) => (
              <motion.button
                key={period.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedPeriod(selectedPeriod?.year === period.year ? null : period)}
                className={`relative p-4 sm:p-5 rounded-xl text-left transition-all duration-300 ${
                  selectedPeriod?.year === period.year
                    ? "bg-[#1E2229] border-2 border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                    : "bg-[#1E2229]/50 border border-[#2A2F38] hover:border-[#39FF14]/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.1)]"
                }`}
              >
                <div className="font-mono font-bold text-2xl sm:text-3xl text-white mb-1">
                  {period.year}
                </div>
                <div className="text-xs sm:text-sm text-[#39FF14] font-medium">
                  {period.title}
                </div>
                <div className="mt-2 text-xs text-[#A0A5B5] font-mono">
                  {period.videos} видео
                </div>

                {/* Active indicator */}
                {selectedPeriod?.year === period.year && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="bg-[#1E2229] border border-[#2A2F38] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#39FF14]/5 to-transparent" />
                
                <button
                  onClick={() => setSelectedPeriod(null)}
                  className="absolute top-4 right-4 p-2 text-[#A0A5B5] hover:text-white hover:bg-[#252A32] transition-colors rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Info */}
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-mono font-bold text-5xl text-[#39FF14] glow-text">
                        {selectedPeriod.year}
                      </span>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-white">
                          {selectedPeriod.title}
                        </h3>
                        <p className="text-sm text-[#A0A5B5] font-mono">
                          {selectedPeriod.videos} видео
                        </p>
                      </div>
                    </div>

                    <p className="text-[#A0A5B5] mb-6 leading-relaxed">
                      {selectedPeriod.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {selectedPeriod.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-sm text-[#A0A5B5]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`/videos?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14] text-[#0A0B0D] text-sm font-medium rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]"
                      >
                        <Play className="w-4 h-4" />
                        Видео
                      </a>
                      <a
                        href={`/gallery?year=${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#2A2F38] text-white text-sm font-medium rounded-lg hover:border-[#39FF14]/50 hover:bg-[#252A32] transition-colors"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Галерея
                      </a>
                      <a
                        href={`/timeline/${selectedPeriod.year}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#2A2F38] text-white text-sm font-medium rounded-lg hover:border-[#39FF14]/50 hover:bg-[#252A32] transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        Подробнее
                      </a>
                    </div>
                  </div>

                  {/* Featured videos */}
                  <div>
                    <h4 className="text-xs font-mono text-[#39FF14] mb-4 uppercase tracking-wider">
                      Популярные видео
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="group relative aspect-video bg-[#252A32] rounded-lg overflow-hidden cursor-pointer border border-[#2A2F38] hover:border-[#39FF14]/50 transition-colors"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                              <Play className="w-4 h-4 text-[#0A0B0D] ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#121417] to-transparent">
                            <p className="text-xs text-white truncate font-mono">
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
