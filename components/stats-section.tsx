"use client"

import { motion } from "framer-motion"
import { TrendingUp, Flame, Star, Sparkles } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
  trend?: string
}

const stats: Stat[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: "19.7 млн",
    label: "Подписчиков",
    trend: "Округлённо",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    value: "3.3 млрд+",
    label: "Просмотров",
    trend: "Более 3.3 млрд",
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "465 видео",
    label: "и 14 Shorts",
    trend: "По каталогу сайта",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    value: "с 2014",
    label: "9 марта 2014",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <div className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
              {stat.trend && (
                <div className="text-xs text-primary mt-2">
                  {stat.trend}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
