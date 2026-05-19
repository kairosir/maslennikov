"use client"

import { motion } from "framer-motion"
import { Play, Clock, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Video {
  id: string
  title: string
  duration: string
  views: string
  date: string
  category: string
}

const recentVideos: Video[] = [
  {
    id: "1",
    title: "Abandoned: Заброшенный замок в горах",
    duration: "45:32",
    views: "2.1M",
    date: "2 дня назад",
    category: "Abandoned",
  },
  {
    id: "2",
    title: "24 часа в самом страшном отеле",
    duration: "1:12:45",
    views: "1.8M",
    date: "5 дней назад",
    category: "Экстрим",
  },
  {
    id: "3",
    title: "Исследуем заброшенную больницу",
    duration: "38:21",
    views: "1.5M",
    date: "1 неделю назад",
    category: "Abandoned",
  },
  {
    id: "4",
    title: "Новый музыкальный проект",
    duration: "4:15",
    views: "950K",
    date: "2 недели назад",
    category: "Музыка",
  },
]

export function RecentUpdates() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
              Последние видео
            </h2>
            <p className="mt-2 text-muted-foreground">
              Свежий контент
            </p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
          >
            Все видео
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentVideos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/videos/${video.id}`} className="block">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-secondary/50 rounded-xl overflow-hidden mb-3 border border-border/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded-md text-xs text-foreground font-medium">
                    {video.duration}
                  </div>

                  {/* Category */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 rounded-md text-xs text-primary-foreground font-medium">
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {video.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.date}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
