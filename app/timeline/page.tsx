import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Хронология | Maslennikov Archive",
  description: "Интерактивная хронология творчества Димы Масленникова с 2014 года",
}

export default function TimelinePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
              Хронология
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Путешествие через все годы творчества Димы Масленникова
            </p>
          </div>
        </div>
        <Timeline />
      </main>
      <Footer />
    </>
  )
}
