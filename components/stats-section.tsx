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
    trend: "+125K за месяц",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    value: "2.1B",
    label: "Просмотров",
    trend: "+50M за месяц",
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "548",
    label: "Видео",
    trend: "+3 за месяц",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    value: "12",
    label: "Лет на YouTube",
  },
]

export function StatsSection() {
  return (
    <section className="min-h-screen py-24 border-y border-border snap-start flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Статистика канала
          </h2>
          <p className="mt-4 text-muted-foreground">
            Цифры, которые говорят сами за себя
          </p>
        </motion.div>

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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <div className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
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
