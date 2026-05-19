"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/videos", label: "Видео" },
  { href: "/gallery", label: "Галерея" },
  { href: "/biography", label: "Биография" },
  { href: "/facts", label: "Факты" },
  { href: "/about", label: "О проекте" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121417]/95 backdrop-blur-xl border-b border-[#2A2F38]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <span className="font-serif font-bold text-lg text-white tracking-tight">
              MASLENNIKOV
            </span>
            <span className="font-serif text-lg text-[#39FF14] glow-text transition-all group-hover:brightness-125">
              ARCHIVE
            </span>
          </Link>

          {/* Center Navigation with Search */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <AnimatePresence mode="wait">
              {searchOpen ? (
                <motion.form
                  key="search"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 400 }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSearch}
                  className="relative"
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#39FF14]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Поиск по архиву..."
                    className="w-full pl-10 pr-10 py-2 bg-[#1E2229] border border-[#39FF14]/30 rounded-full text-sm text-white placeholder:text-[#A0A5B5] focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false)
                      setSearchQuery("")
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A5B5] hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="nav"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1"
                >
                  {/* Search button - positioned before nav items */}
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-[#39FF14] hover:bg-[#39FF14]/10 rounded-full transition-all mr-2 border border-transparent hover:border-[#39FF14]/30"
                  >
                    <Search className="w-4 h-4" />
                    <span>Поиск</span>
                  </button>

                  <div className="w-px h-4 bg-[#2A2F38] mx-2" />

                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-sm text-[#A0A5B5] hover:text-white hover:bg-[#1E2229] rounded-full transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile - Search & Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#39FF14] hover:bg-[#39FF14]/10 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Поиск</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#A0A5B5] hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Меню</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <form onSubmit={handleSearch} className="pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#39FF14]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Поиск по архиву..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#1E2229] border border-[#39FF14]/30 rounded-full text-sm text-white placeholder:text-[#A0A5B5] focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                  />
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121417]/98 backdrop-blur-xl border-b border-[#2A2F38]/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-3 text-[#A0A5B5] hover:text-white hover:bg-[#1E2229] rounded-lg transition-colors"
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
