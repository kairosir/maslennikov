"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Menu, Play, Search, X } from "lucide-react"
import { siteSearchItems } from "@/data/site-search"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/biography", label: "Биография" },
  { href: "/videos", label: "Все видео" },
  { href: "/gallery", label: "Галерея" },
  { href: "/facts", label: "Факты" },
  { href: "/about", label: "О проекте" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (normalizedQuery.length < 2) {
      return []
    }

    return siteSearchItems
      .filter((item) =>
        [item.title, item.description].join(" ").toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 30)
  }, [query])

  const openSearch = () => {
    setIsSearchOpen(true)
    window.setTimeout(() => inputRef.current?.focus(), 40)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
    setQuery("")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl text-foreground">
              MASLENNIKOV
            </span>
            <span className="text-primary font-serif text-xl">ARCHIVE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={isSearchOpen ? closeSearch : openSearch}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                <span className="sr-only">Поиск</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Меню</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="mx-auto max-w-3xl px-4 py-3 sm:px-6 lg:px-8">
              <label className="relative block">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Искать видео, страницы, факты..."
                  className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              {query.trim().length >= 2 && (
                <div className="mt-3 max-h-[22rem] overflow-y-auto rounded-lg border border-border bg-card shadow-2xl">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeSearch}
                        className="flex gap-3 border-b border-border p-3 transition-colors last:border-b-0 hover:bg-secondary"
                      >
                        <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                          {item.type === "video" ? <Play className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-1 text-sm font-medium text-foreground">{item.title}</span>
                          <span className="mt-1 line-clamp-1 text-xs text-muted-foreground">{item.description}</span>
                        </span>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-muted-foreground">
                      Ничего не найдено.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
