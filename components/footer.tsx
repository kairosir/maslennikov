import Link from "next/link"
import { Youtube, Instagram, Send } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Главная", href: "/" },
    { label: "Биография", href: "/biography" },
    { label: "Факты", href: "/facts" },
    { label: "О проекте", href: "/about" },
  ],
  social: [
    { label: "YouTube", href: "https://youtube.com/@dimamaslennikov", icon: Youtube },
    { label: "Instagram", href: "https://instagram.com/dimamaslennikov", icon: Instagram },
    { label: "Telegram", href: "https://t.me/dimamaslennikov", icon: Send },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#2A2F38] bg-[#121417] relative">
      {/* Glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <Link href="/" className="inline-block group">
              <span className="font-serif font-bold text-lg text-white">
                MASLENNIKOV
              </span>
              <span className="font-serif text-lg text-[#39FF14] ml-1 glow-text group-hover:brightness-125 transition-all">
                ARCHIVE
              </span>
            </Link>
            <p className="mt-3 text-sm text-[#A0A5B5] leading-relaxed">
              Цифровой архив творчества Димы Масленникова. Создан фанатами для фанатов.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#A0A5B5] hover:text-[#39FF14] hover:bg-[#1E2229] border border-transparent hover:border-[#39FF14]/30 rounded-lg transition-all"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-12">
            <div>
              <h3 className="text-xs font-mono text-[#39FF14] uppercase tracking-wider mb-4">
                Навигация
              </h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A0A5B5] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A2F38] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0A5B5] font-mono">
            © {new Date().getFullYear()} Maslennikov Archive
          </p>
          <p className="text-xs text-[#A0A5B5]">
            Неофициальный фан-проект
          </p>
        </div>
      </div>
    </footer>
  )
}
