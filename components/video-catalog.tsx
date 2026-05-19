"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Play, 
  Clock, 
  Eye, 
  Calendar,
  X,
  ChevronDown
} from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  date: string
  year: number
  category: string
  description: string
}

const categories = [
  "Все",
  "Abandoned",
  "Экстрим",
  "Челленджи",
  "Влог",
  "Музыка",
  "Коллаборации",
]

const years = ["Все", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]

// Sample video data
const videosData: Video[] = [
  {
    id: "1",
    title: "Abandoned: Заброшенный замок в горах Германии",
    thumbnail: "/placeholder-video-1.jpg",
    duration: "45:32",
    views: "2.1M",
    date: "15 мая 2025",
    year: 2025,
    category: "Abandoned",
    description: "Исследуем загадочный замок, заброшенный более 50 лет назад...",
  },
  {
    id: "2",
    title: "24 часа в самом страшном отеле мира",
    thumbnail: "/placeholder-video-2.jpg",
    duration: "1:12:45",
    views: "1.8M",
    date: "10 мая 2025",
    year: 2025,
    category: "Экстрим",
    description: "Провожу целые сутки в отеле с паранормальной активностью...",
  },
  {
    id: "3",
    title: "Исследуем заброшенную больницу СССР",
    thumbnail: "/placeholder-video-3.jpg",
    duration: "38:21",
    views: "1.5M",
    date: "5 мая 2025",
    year: 2025,
    category: "Abandoned",
    description: "Огромный медицинский комплекс, закрытый в 90-х годах...",
  },
  {
    id: "4",
    title: "Новый музыкальный проект - Премьера",
    thumbnail: "/placeholder-video-4.jpg",
    duration: "4:15",
    views: "950K",
    date: "1 мая 2025",
    year: 2025,
    category: "Музыка",
    description: "Представляю вам мой новый музыкальный трек...",
  },
  {
    id: "5",
    title: "Abandoned: Заброшенный аэропорт",
    thumbnail: "/placeholder-video-5.jpg",
    duration: "52:18",
    views: "3.2M",
    date: "20 апреля 2025",
    year: 2025,
    category: "Abandoned",
    description: "Гигантский аэропорт, который никогда не открылся...",
  },
  {
    id: "6",
    title: "Челлендж: 48 часов без сна",
    thumbnail: "/placeholder-video-6.jpg",
    duration: "28:45",
    views: "2.8M",
    date: "15 апреля 2025",
    year: 2025,
    category: "Челленджи",
    description: "Пытаюсь продержаться двое суток без сна...",
  },
  {
    id: "7",
    title: "Влог из Японии: День 1",
    thumbnail: "/placeholder-video-7.jpg",
    duration: "22:30",
    views: "1.9M",
    date: "10 апреля 2025",
    year: 2025,
    category: "Влог",
    description: "Начинаю своё путешествие по Японии...",
  },
  {
    id: "8",
    title: "Коллаб с Niletto - За кадром",
    thumbnail: "/placeholder-video-8.jpg",
    duration: "18:22",
    views: "2.4M",
    date: "1 апреля 2025",
    year: 2025,
    category: "Коллаборации",
    description: "Показываю как мы снимали совместный клип...",
  },
  {
    id: "9",
    title: "Abandoned: Чернобыльская зона - Часть 1",
    thumbnail: "/placeholder-video-9.jpg",
    duration: "1:05:42",
    views: "5.1M",
    date: "15 декабря 2024",
    year: 2024,
    category: "Abandoned",
    description: "Легендарное путешествие в зону отчуждения...",
  },
  {
    id: "10",
    title: "Экстрим: Прыжок с парашютом ночью",
    thumbnail: "/placeholder-video-10.jpg",
    duration: "15:33",
    views: "1.7M",
    date: "10 декабря 2024",
    year: 2024,
    category: "Экстрим",
    description: "Мой первый ночной прыжок с парашютом...",
  },
  {
    id: "11",
    title: "Abandoned: Заброшенный парк развлечений",
    thumbnail: "/placeholder-video-11.jpg",
    duration: "42:15",
    views: "4.2M",
    date: "1 декабря 2024",
    year: 2024,
    category: "Abandoned",
    description: "Парк аттракционов, закрытый после трагедии...",
  },
  {
    id: "12",
    title: "Челлендж: Выживание в лесу 72 часа",
    thumbnail: "/placeholder-video-12.jpg",
    duration: "55:20",
    views: "3.8M",
    date: "20 ноября 2024",
    year: 2024,
    category: "Челленджи",
    description: "Три дня выживания с минимальным снаряжением...",
  },
]

export function VideoCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [selectedYear, setSelectedYear] = useState("Все")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const filteredVideos = videosData.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Все" || video.category === selectedCategory
    const matchesYear = selectedYear === "Все" || video.year.toString() === selectedYear
    return matchesSearch && matchesCategory && matchesYear
  })

  const activeFilters = [
    selectedCategory !== "Все" && selectedCategory,
    selectedYear !== "Все" && selectedYear,
  ].filter(Boolean)

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Все видео
          </h1>
          <p className="mt-2 text-muted-foreground">
            Полный каталог видео Димы Масленникова
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Фильтры</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* View mode toggle */}
            <div className="flex bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid3X3 className="w-5 h-5" />
                <span className="sr-only">Сетка</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="w-5 h-5" />
                <span className="sr-only">Список</span>
              </button>
            </div>
          </div>

          {/* Filter panels */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-card border border-border rounded-lg space-y-4">
                  {/* Categories */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Категория
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Years */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Год
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                            selectedYear === year
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Активные фильтры:</span>
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {filter}
                  <button
                    onClick={() => {
                      if (categories.includes(filter as string)) setSelectedCategory("Все")
                      if (years.includes(filter as string)) setSelectedYear("Все")
                    }}
                    className="hover:text-primary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={() => {
                  setSelectedCategory("Все")
                  setSelectedYear("Все")
                }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Сбросить все
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Найдено {filteredVideos.length} видео
          </p>
        </div>

        {/* Video grid/list */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <a href={`/videos/${video.id}`} className="block">
                  <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded text-xs text-foreground">
                      {video.duration}
                    </div>

                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 rounded text-xs text-primary-foreground">
                      {video.category}
                    </div>
                  </div>

                  <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {video.date}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredVideos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <a
                  href={`/videos/${video.id}`}
                  className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="relative w-48 sm:w-64 flex-shrink-0 aspect-video bg-secondary rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded text-xs text-foreground">
                      {video.duration}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <span className="flex-shrink-0 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                        {video.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views} просмотров
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {video.date}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Видео не найдены. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
