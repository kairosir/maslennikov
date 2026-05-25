"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Play, Image as ImageIcon, FileText, Clock, ArrowRight } from "lucide-react"

interface SearchResult {
  id: string
  type: "video" | "article" | "gallery"
  title: string
  description: string
  highlight?: string
  timestamp?: string
  year?: number
  category?: string
}

// Sample search data
const searchData: SearchResult[] = [
  {
    id: "v1",
    type: "video",
    title: "Заброшки: Заброшенный замок в горах Германии",
    description: "Исследуем загадочный замок, заброшенный более 50 лет назад...",
    highlight: "В этом видео мы отправляемся в заброшенный замок на юге Германии...",
    timestamp: "12:45",
    year: 2025,
    category: "Заброшки",
  },
  {
    id: "v2",
    type: "video",
    title: "24 часа в самом страшном отеле мира",
    description: "Провожу целые сутки в отеле с паранормальной активностью...",
    highlight: "Ночью начались странные звуки и я решил проверить коридор...",
    timestamp: "45:22",
    year: 2025,
    category: "Экстрим",
  },
  {
    id: "v3",
    type: "video",
    title: "Чернобыльская зона - Полное исследование",
    description: "Легендарное путешествие в зону отчуждения...",
    highlight: "Мы нашли документы в заброшенной школе, датированные 1986 годом...",
    timestamp: "28:15",
    year: 2024,
    category: "Заброшки",
  },
  {
    id: "a1",
    type: "article",
    title: "Биография Димы Масленникова",
    description: "Полная история жизни и творчества от начала до наших дней",
    highlight: "Дима родился в Москве и начал свой путь на YouTube в 2014 году...",
  },
  {
    id: "a2",
    type: "article",
    title: "История серии Заброшки",
    description: "Как появилась легендарная серия и что её ждёт в будущем",
    highlight: "Первый выпуск Заброшки вышел в 2019 году и сразу стал хитом...",
  },
  {
    id: "g1",
    type: "gallery",
    title: "Фотографии со съёмок Заброшки 2024",
    description: "Эксклюзивные кадры из-за кулис самых популярных выпусков",
  },
  {
    id: "g2",
    type: "gallery",
    title: "Архив мемов и фан-арта",
    description: "Лучшие работы фанатов за все годы",
  },
  {
    id: "v4",
    type: "video",
    title: "Музыкальный клип - Премьера 2024",
    description: "Официальный клип на новую песню",
    year: 2024,
    category: "Музыка",
  },
]

export function GlobalSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Заброшки замок",
    "Чернобыль",
    "24 часа челлендж",
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.length > 1) {
      setIsSearching(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.highlight?.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
        setIsSearching(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setResults([])
    }
  }, [query])

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "article":
        return <FileText className="w-4 h-4" />
      case "gallery":
        return <ImageIcon className="w-4 h-4" />
      default:
        return null
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Видео"
      case "article":
        return "Статья"
      case "gallery":
        return "Галерея"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Поиск
          </h1>
          <p className="mt-2 text-muted-foreground">
            Найдите видео, статьи и фотографии по всему архиву
          </p>
        </div>

        {/* Search input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Поиск по названию, описанию или транскрипции..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-14 pr-12 py-4 bg-card border border-border rounded-xl text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            autoFocus
          />
          {query && (
            <button
              onClick={() => {
                setQuery("")
                inputRef.current?.focus()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Recent searches */}
        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              Недавние поисковые запросы
            </h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setQuery(search)}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-secondary/80 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular categories */}
        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              Популярные категории
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Заброшки", "Экстрим", "Музыка", "Челленджи", "Влог", "Коллаборации"].map(
                (category) => (
                  <a
                    key={category}
                    href={`/videos?category=${category}`}
                    className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <span className="text-foreground">{category}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}

        {/* Loading state */}
        {isSearching && (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Search results */}
        <AnimatePresence>
          {query && !isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {results.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Найдено {results.length} результатов для &quot;{query}&quot;
                  </p>
                  <div className="space-y-3">
                    {results.map((result, index) => (
                      <motion.a
                        key={result.id}
                        href={
                          result.type === "video"
                            ? `/videos/${result.id}`
                            : result.type === "article"
                            ? `/biography`
                            : `/gallery`
                        }
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            {getTypeIcon(result.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-primary font-medium">
                                {getTypeLabel(result.type)}
                              </span>
                              {result.category && (
                                <span className="text-xs text-muted-foreground">
                                  • {result.category}
                                </span>
                              )}
                              {result.year && (
                                <span className="text-xs text-muted-foreground">
                                  • {result.year}
                                </span>
                              )}
                            </div>
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {highlightMatch(result.title, query)}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {highlightMatch(result.description, query)}
                            </p>
                            {result.highlight && (
                              <div className="mt-2 p-2 bg-secondary/50 rounded text-sm text-muted-foreground">
                                <span className="text-primary font-medium">
                                  {result.timestamp && (
                                    <span className="inline-flex items-center gap-1 mr-2">
                                      <Clock className="w-3 h-3" />
                                      {result.timestamp}
                                    </span>
                                  )}
                                </span>
                                &quot;...{highlightMatch(result.highlight, query)}...&quot;
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Ничего не найдено для &quot;{query}&quot;
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Попробуйте изменить поисковый запрос
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
