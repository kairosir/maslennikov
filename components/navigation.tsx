"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X } from "lucide-react"

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
            <Link
              href="/search"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Поиск</span>
            </Link>

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
