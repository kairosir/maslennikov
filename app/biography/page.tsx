import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Play, Award, Sparkles } from "lucide-react"

export const metadata = {
  title: "Биография | Maslennikov Archive",
  description: "Биография Димы Масленникова - от начала творческого пути до наших дней",
}

const milestones = [
  {
    year: "1996",
    title: "Рождение",
    description: "Дима Масленников родился в Москве, Россия.",
  },
  {
    year: "2014",
    title: "Начало на YouTube",
    description: "Создание YouTube-канала и первые эксперименты с видеоконтентом.",
  },
  {
    year: "2016",
    title: "Первый миллион",
    description: "Канал достигает отметки в 1 миллион подписчиков.",
  },
  {
    year: "2019",
    title: "Рождение Заброшки",
    description: "Запуск легендарной серии об исследовании заброшенных мест.",
  },
  {
    year: "2020",
    title: "10 миллионов",
    description: "Преодоление отметки в 10 миллионов подписчиков.",
  },
  {
    year: "2022",
    title: "Музыкальный дебют",
    description: "Выход первых музыкальных треков и клипов.",
  },
  {
    year: "2024",
    title: "Новые горизонты",
    description: "Расширение форматов и международное признание.",
  },
]

const achievements = [
  {
    icon: Users,
    value: "19.7 млн",
    label: "Подписчиков на YouTube",
  },
  {
    icon: Play,
    value: "3.3 млрд+",
    label: "Просмотров",
  },
  {
    icon: Award,
    value: "3x",
    label: "Золотые кнопки YouTube",
  },
  {
    icon: Sparkles,
    value: "465 видео",
    label: "и 14 Shorts",
  },
]

export default function BiographyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
              Биография
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              История жизни и творчества Димы Масленникова
            </p>
          </header>

          {/* Hero info */}
          <section className="mb-16 p-6 sm:p-8 bg-card border border-border rounded-2xl">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex-shrink-0" />
              
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground">
                  Дима Масленников
                </h2>
                <p className="text-primary mt-1">YouTube-блогер, сталкер, телеведущий, музыкант</p>
                
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Родился в 1996
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Москва, Россия
                  </span>
                  <span className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    @pognalishow, создан 9 марта 2014
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Достижения
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-xl text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div className="font-serif font-bold text-2xl text-foreground">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Biography text */}
          <section className="mb-16 prose prose-invert max-w-none">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Ранние годы
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Дмитрий Масленников родился в 1996 году в Москве. С раннего возраста проявлял 
              интерес к видеосъёмке и творчеству. Увлечение компьютерами и интернетом привело 
              его к платформе YouTube, где он начал экспериментировать с различными форматами 
              контента.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 mt-12">
              Начало карьеры
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              9 марта 2014 года был создан YouTube-канал Димы Масленникова, после чего начали
              появляться первые видео.
              Изначально это были влоги и развлекательный контент, но постепенно формат 
              эволюционировал в сторону более экстремального и исследовательского направления.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Благодаря харизме, умению удерживать внимание аудитории и готовности идти на 
              риски ради интересного контента, канал быстро набирал популярность. К 2016 году 
              Дима преодолел отметку в миллион подписчиков.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 mt-12">
              Эра Заброшки
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Поворотным моментом в карьере стал 2019 год и запуск серии Заброшки — 
              исследование заброшенных объектов по всему миру. Формат сочетал в себе 
              элементы документалистики, приключений и мистики, что мгновенно нашло 
              отклик у миллионов зрителей.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Серия Заброшки стала визитной карточкой канала. Заброшенные больницы, 
              школы, заводы, военные объекты и даже целые города — каждый выпуск 
              представлял собой захватывающее путешествие в прошлое с элементами 
              мистики и экстрима.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 mt-12">
              Музыкальное творчество
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Помимо YouTube, Дима также развивает музыкальное направление. Начиная с 
              2022 года он выпускает музыкальные треки и клипы, которые получают 
              миллионы просмотров и прослушиваний на различных платформах.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mb-6 mt-12">
              Настоящее время
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Сегодня Дима Масленников — один из самых популярных русскоязычных блогеров
              с аудиторией около 19.7 млн подписчиков и более 3.3 млрд просмотров. Он продолжает
              развивать заброшки, экстрим, GhostBuster, музыкальные проекты и форматы с подписчиками.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Ключевые даты
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    
                    <div>
                      <span className="text-sm text-primary font-medium">
                        {milestone.year}
                      </span>
                      <h3 className="font-medium text-foreground mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
