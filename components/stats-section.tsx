"use client"

import { motion } from "framer-motion"
import { TrendingUp, Flame, Star, Sparkles, Radio } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
  trend?: string
}

const stats: Stat[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: "12.5M",
    label: "Подписчиков",
    trend: "+125K",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    value: "2.1B",
    label: "Просмотров",
    trend: "+50M",
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "548",
    label: "Видео",
    trend: "+3",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    value: "12",
    label: "Лет",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Divider line with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-[#39FF14]" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#39FF14]">
              LIVE STATS
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Статистика
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-xl bg-[#1E2229]/50 border border-[#2A2F38] hover:border-[#39FF14]/30 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#39FF14]/10 text-[#39FF14] mb-4 border border-[#39FF14]/20">
                {stat.icon}
              </div>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-white">
                {stat.value}
              </div>
              <div className="text-sm text-[#A0A5B5] mt-1">
                {stat.label}
              </div>
              {stat.trend && (
                <div className="text-xs text-[#39FF14] mt-2 font-mono">
                  {stat.trend} за месяц
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
