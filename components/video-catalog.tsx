"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Play, Search, X } from "lucide-react"
import { useSearchParams } from "next/navigation"
import videosData from "@/data/pognali-videos.json"

type YouTubeVideo = (typeof videosData)[number]

export function VideoCatalog() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null)

  useEffect(() => {
    const videoId = searchParams.get("video")
    if (!videoId) {
      return
    }

    const foundVideo = videosData.find((video) => video.id === videoId)
    if (foundVideo) {
      setActiveVideo(foundVideo)
    }
  }, [searchParams])

  const filteredVideos = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    if (!normalizedQuery) {
      return videosData
    }

    return videosData.filter((video) =>
      [video.title, video.views, video.published, video.duration].join(" ").toLowerCase().includes(normalizedQuery),
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
              YouTube-каталог
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
              Все видео с канала
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Здесь размещены ссылки на публичные ролики канала @pognalishow. При нажатии открывается встроенный
              YouTube-плеер, сами видео остаются на YouTube.
            </p>
          </div>

          <label className="relative block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск по названию видео..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>Показано {filteredVideos.length} из {videosData.length} видео</span>
          <a
            href="https://www.youtube.com/@pognalishow/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            Открыть канал
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredVideos.map((video, index) => (
            <motion.button
              key={video.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.015, 0.24) }}
              onClick={() => setActiveVideo(video)}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>
                </div>
                {video.duration && (
                  <span className="absolute bottom-2 right-2 rounded bg-background/95 px-2 py-0.5 text-xs text-foreground">
                    {video.duration}
                  </span>
                )}
              </div>

              <h2 className="mt-3 line-clamp-2 min-h-[2.75rem] font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                {video.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
                {video.views && <span>{video.views}</span>}
                {video.published && <span>• {video.published}</span>}
              </div>
            </motion.button>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground">
            Видео не найдены. Попробуйте другой запрос.
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.98 }}
              className="w-full max-w-6xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border p-4">
                <div className="min-w-0">
                  <h2 className="line-clamp-1 font-medium text-foreground">{activeVideo.title}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {activeVideo.views} {activeVideo.published ? `• ${activeVideo.published}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-md text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                  aria-label="Закрыть плеер"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
                >
                  Открыть на YouTube
                  <ExternalLink className="h-4 w-4" />
                </a>
                <span className="text-xs text-muted-foreground">
                  Плеер загружается с YouTube.
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
