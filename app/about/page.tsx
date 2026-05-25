import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Code, Users, Mail, Github, MessageCircle } from "lucide-react"

export const metadata = {
  title: "О проекте и дисклеймер | Maslennikov Archive",
  description: "Информация о проекте Maslennikov Archive и дисклеймер неофициального фан-архива",
}

const features = [
  {
    icon: Heart,
    title: "Создано с любовью",
    description: "Этот проект создан фанатами для фанатов. Мы собираем и систематизируем информацию о творчестве Димы.",
  },
  {
    icon: Code,
    title: "Открытый проект",
    description: "Мы открыты для сотрудничества и предложений по улучшению архива.",
  },
  {
    icon: Users,
    title: "Сообщество",
    description: "Присоединяйтесь к нашему сообществу и помогайте развивать проект.",
  },
]

const team = [
  {
    name: "Команда Archive",
    role: "Разработка и контент",
    description: "Группа энтузиастов, работающих над проектом в свободное время.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
              О проекте
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Maslennikov Archive — неофициальный фан-проект, посвящённый творчеству 
              Димы Масленникова
            </p>
            <p className="mx-auto mt-4 max-w-2xl rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-muted-foreground">
              Это неофициальный фан-проект. Не связан с Димой Масленниковым и его командой.
            </p>
          </header>

          {/* Mission */}
          <section className="mb-16 p-6 sm:p-8 bg-card border border-border rounded-2xl">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
              Наша миссия
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Создать удобный фан-архив творчества Димы Масленникова в одном месте. Мы хотим,
              чтобы зрители могли легко найти видео, узнать контекст форматов и погрузиться
              в историю одного из самых заметных русскоязычных YouTube-каналов.
            </p>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 text-center">
              Что мы предлагаем
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What's included */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Что включает архив
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Интерактивная хронология с 2014 года",
                "YouTube-каталог видео с плеером",
                "Поиск по страницам и видео",
                "Галерея фотографий и фан-арта",
                "Подробная биография",
                "Малоизвестные факты",
                "Заброшки / исследования заброшенных мест",
                "Экстрим, GhostBuster и проекты с подписчиками",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mb-16 scroll-mt-24 p-6 sm:p-8 bg-primary/5 border border-primary/20 rounded-xl">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
              Дисклеймер
            </h2>
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Этот сайт является неофициальным фан-проектом, созданным поклонником творчества Димы Масленникова.
              </p>
              <p>
                Сайт не имеет никакого отношения к Диме Масленникову, его команде и компании «ЛИГА».
                Все авторские права на видео, изображения, названия проектов и бренд принадлежат их законным правообладателям.
              </p>
              <p>
                Контент на сайте используется исключительно в информационных и некоммерческих целях.
                Мы уважаем интеллектуальную собственность и готовы оперативно удалить любой материал или полностью закрыть проект по первому требованию правообладателей.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 text-center">
              Связаться с нами
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@maslennikov-archive.com"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Написать на почту
              </a>
              <a
                href="https://t.me/maslennikov_archive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
              <a
                href="https://github.com/maslennikov-archive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </section>

          {/* Support */}
          <section className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
              Поддержать проект
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Если вам нравится наш проект, вы можете поддержать его развитие. 
              Все средства пойдут на улучшение архива и добавление новых функций.
            </p>
            <a
              href="https://boosty.to/maslennikov-archive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Поддержать на Boosty
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
