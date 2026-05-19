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
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <Link href="/" className="inline-block">
              <span className="font-serif font-bold text-lg text-foreground">
                MASLENNIKOV
              </span>
              <span className="text-primary font-serif text-lg ml-1">ARCHIVE</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Цифровой архив творчества Димы Масленникова. Создан фанатами для фанатов.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
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
              <h3 className="text-sm font-medium text-foreground mb-3">Навигация</h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maslennikov Archive. Неофициальный фан-проект.
          </p>
          <p className="text-xs text-muted-foreground">
            Создано с любовью к творчеству Димы
          </p>
        </div>
      </div>
    </footer>
  )
}
