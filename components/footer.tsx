import Link from "next/link"
import { Youtube, Instagram, Send } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Главная", href: "/" },
    { label: "Хронология", href: "/timeline" },
    { label: "Все видео", href: "/videos" },
    { label: "Галерея", href: "/gallery" },
  ],
  content: [
    { label: "Биография", href: "/biography" },
    { label: "Факты", href: "/facts" },
    { label: "Поиск", href: "/search" },
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
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif font-bold text-xl text-foreground">
                MASLENNIKOV
              </span>
              <span className="text-primary font-serif text-xl ml-1">ARCHIVE</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Самый полный цифровой архив жизни и творчества Димы Масленникова. 
              Создан фанатами для фанатов.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Навигация</h3>
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

          {/* Content */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Контент</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
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

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
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
