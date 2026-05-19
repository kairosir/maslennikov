import { Navigation } from "@/components/navigation"
import { GlobalSearch } from "@/components/global-search"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Поиск | Maslennikov Archive",
  description: "Поиск по видео, статьям и галерее архива Димы Масленникова",
}

export default function SearchPage() {
  return (
    <>
      <Navigation />
      <main>
        <GlobalSearch />
      </main>
      <Footer />
    </>
  )
}
