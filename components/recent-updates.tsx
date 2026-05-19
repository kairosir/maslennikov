"use client"

import { motion } from "framer-motion"
import { Play, Clock, Eye, ArrowRight, Radio } from "lucide-react"
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
    <section className="py-24 lg:py-32 bg-[#1E2229]/30 relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Radio className="w-4 h-4 text-[#39FF14]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#39FF14]">
                LATEST UPLOADS
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Последние видео
            </h2>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-sm text-[#39FF14] hover:brightness-125 transition-all group font-mono"
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
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link href={`/videos/${video.id}`} className="block">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[#252A32] rounded-xl overflow-hidden mb-3 border border-[#2A2F38] group-hover:border-[#39FF14]/50 transition-all group-hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#39FF14] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                      <Play className="w-5 h-5 text-[#0A0B0D] ml-0.5" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#121417]/90 rounded text-xs text-white font-mono">
                    {video.duration}
                  </div>

                  {/* Category */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#39FF14] rounded text-xs text-[#0A0B0D] font-medium">
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-medium text-white line-clamp-2 group-hover:text-[#39FF14] transition-colors leading-snug">
                  {video.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-[#A0A5B5] font-mono">
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
