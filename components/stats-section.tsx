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
    <section className="py-24 lg:py-32 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Статистика
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/30 border border-border/30"
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
                <div className="text-xs text-primary/80 mt-2 font-medium">
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
