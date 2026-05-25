import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Lightbulb, Quote } from "lucide-react"

export const metadata = {
  title: "Факты | Maslennikov Archive",
  description: "Интересные и малоизвестные факты о Диме Масленникове",
}

const facts = [
  {
    category: "Личное",
    items: [
      "Дима родился в Москве и вырос в творческой семье.",
      "С детства увлекался видеоиграми и компьютерами.",
      "Любит путешествовать и исследовать новые места.",
      "Увлекается историей и архитектурой заброшенных зданий.",
      "Коллекционирует артефакты, найденные во время съёмок Заброшки.",
    ],
  },
  {
    category: "Карьера",
    items: [
      "Первое видео на YouTube было загружено в 2014 году.",
      "Канал @pognalishow создан 9 марта 2014 года.",
      "До YouTube пробовал себя в различных творческих направлениях.",
      "Серия Заброшки началась как эксперимент и стала главным форматом канала.",
      "Снял более 100 выпусков Заброшки в разных странах мира.",
      "Работал с крупными брендами и медиакомпаниями.",
    ],
  },
  {
    category: "Рекорды",
    items: [
      "Самое популярное видео набрало более 50 миллионов просмотров.",
      "Канал входит в топ-10 самых популярных русскоязычных YouTube-каналов.",
      "Получил три золотые кнопки YouTube.",
      "Суммарное количество просмотров превышает 3.3 миллиарда.",
      "Аудитория канала составляет около 19.7 млн подписчиков.",
    ],
  },
  {
    category: "Интересное",
    items: [
      "Многие локации для Заброшки находит сам, изучая старые карты и форумы.",
      "Использует профессиональное оборудование для ночных съёмок.",
      "Команда проходит специальную подготовку перед опасными экспедициями.",
      "Некоторые выпуски снимались в течение нескольких дней.",
      "Часть локаций остаётся засекреченной для защиты от вандализма.",
    ],
  },
  {
    category: "Музыка",
    items: [
      "Начал заниматься музыкой в 2022 году.",
      "Пишет тексты песен самостоятельно.",
      "Музыкальные клипы снимаются в стилистике основного канала.",
      "Сотрудничал с известными музыкантами и продюсерами.",
      "Треки доступны на всех основных стриминговых платформах.",
    ],
  },
]

const quotes = [
  {
    text: "Каждое заброшенное место хранит свою историю. Наша задача — рассказать её.",
    context: "О серии Заброшки",
  },
  {
    text: "Страх — это нормально. Главное — не позволять ему управлять тобой.",
    context: "О съёмках в опасных локациях",
  },
  {
    text: "Творчество должно вдохновлять, а не просто развлекать.",
    context: "О подходе к созданию контента",
  },
]

export default function FactsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
              Интересные факты
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Малоизвестные факты о Диме Масленникове
            </p>
          </header>

          {/* Quotes */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Цитаты
            </h2>
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className="relative p-6 bg-card border border-border rounded-xl"
                >
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                  <p className="text-foreground italic pl-8 text-lg">
                    &quot;{quote.text}&quot;
                  </p>
                  <cite className="block mt-3 pl-8 text-sm text-muted-foreground not-italic">
                    — {quote.context}
                  </cite>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Facts by category */}
          {facts.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((fact, factIndex) => (
                  <div
                    key={factIndex}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      {factIndex + 1}
                    </span>
                    <p className="text-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Fun fact */}
          <section className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl text-center">
            <h2 className="font-serif font-bold text-xl text-foreground mb-2">
              Знаете ещё интересные факты?
            </h2>
            <p className="text-muted-foreground mb-4">
              Поделитесь ими с нами, и мы добавим их в архив!
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Связаться с нами
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
