import { Navigation } from "@/components/navigation"
import { VideoCatalog } from "@/components/video-catalog"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Все видео | Maslennikov Archive",
  description: "Полный каталог видео Димы Масленникова с фильтрами по категориям и годам",
}

export default function VideosPage() {
  return (
    <>
      <Navigation />
      <main>
        <VideoCatalog />
      </main>
      <Footer />
    </>
  )
}
