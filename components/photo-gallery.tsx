"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  title: string
  year: number
  category: string
  description?: string
}

const categories = ["Все", "Съёмки", "За кадром", "Мемы", "Фан-арт", "Постеры"]
const years = ["Все", "2025", "2024", "2023", "2022", "2021", "2020", "2019"]

// Sample gallery data
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/placeholder-gallery-1.jpg",
    title: "Abandoned: Замок Германии - Кадр 1",
    year: 2025,
    category: "Съёмки",
    description: "Главный зал заброшенного замка",
  },
  {
    id: "2",
    src: "/placeholder-gallery-2.jpg",
    title: "За кадром съёмок Abandoned",
    year: 2025,
    category: "За кадром",
    description: "Команда готовится к съёмке",
  },
  {
    id: "3",
    src: "/placeholder-gallery-3.jpg",
    title: "Популярный мем 2025",
    year: 2025,
    category: "Мемы",
  },
  {
    id: "4",
    src: "/placeholder-gallery-4.jpg",
    title: "Фан-арт от @artist",
    year: 2024,
    category: "Фан-арт",
    description: "Работа победителя конкурса фан-арта",
  },
  {
    id: "5",
    src: "/placeholder-gallery-5.jpg",
    title: "Постер Abandoned Season 5",
    year: 2024,
    category: "Постеры",
  },
  {
    id: "6",
    src: "/placeholder-gallery-6.jpg",
    title: "Чернобыль - Эксклюзивный кадр",
    year: 2024,
    category: "Съёмки",
    description: "Заброшенная школа в Припяти",
  },
  {
    id: "7",
    src: "/placeholder-gallery-7.jpg",
    title: "Команда на съёмках",
    year: 2024,
    category: "За кадром",
  },
  {
    id: "8",
    src: "/placeholder-gallery-8.jpg",
    title: "Мем: Дима и привидение",
    year: 2024,
    category: "Мемы",
  },
  {
    id: "9",
    src: "/placeholder-gallery-9.jpg",
    title: "Цифровой арт",
    year: 2023,
    category: "Фан-арт",
  },
  {
    id: "10",
    src: "/placeholder-gallery-10.jpg",
    title: "Abandoned - Больница",
    year: 2023,
    category: "Съёмки",
    description: "Коридор заброшенной больницы",
  },
  {
    id: "11",
    src: "/placeholder-gallery-11.jpg",
    title: "Подготовка к экспедиции",
    year: 2023,
    category: "За кадром",
  },
  {
    id: "12",
    src: "/placeholder-gallery-12.jpg",
    title: "Официальный постер 2023",
    year: 2023,
    category: "Постеры",
  },
]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [selectedYear, setSelectedYear] = useState("Все")
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === "Все" || image.category === selectedCategory
    const matchesYear = selectedYear === "Все" || image.year.toString() === selectedYear
    return matchesCategory && matchesYear
  })

  const currentIndex = lightboxImage
    ? filteredImages.findIndex((img) => img.id === lightboxImage.id)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setLightboxImage(filteredImages[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentIndex + 1])
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Галерея
          </h1>
          <p className="mt-2 text-muted-foreground">
            Фотографии, мемы и фан-арт
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Categories */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Категория
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Years */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Год
            </label>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredImages.length} изображений
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setLightboxImage(image)}
              className="group relative aspect-square bg-secondary rounded-lg overflow-hidden"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <ZoomIn className="w-8 h-8 text-foreground mb-2" />
                <p className="text-sm text-foreground text-center line-clamp-2">
                  {image.title}
                </p>
                <span className="text-xs text-muted-foreground mt-1">
                  {image.category} • {image.year}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-background/80 rounded text-xs text-foreground">
                {image.category}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Изображения не найдены. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Закрыть</span>
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
                <span className="sr-only">Предыдущее</span>
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
                <span className="sr-only">Следующее</span>
              </button>
            )}

            {/* Image container */}
            <motion.div
              key={lightboxImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for image */}
              <div className="aspect-video bg-card rounded-lg overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Изображение</span>
                </div>
              </div>

              {/* Image info */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-foreground">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {lightboxImage.category} • {lightboxImage.year}
                  </p>
                  {lightboxImage.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {lightboxImage.description}
                    </p>
                  )}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
              </div>

              {/* Counter */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
