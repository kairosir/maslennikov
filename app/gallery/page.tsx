import { Navigation } from "@/components/navigation"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Галерея | Maslennikov Archive",
  description: "Фотографии, мемы и фан-арт из архива Димы Масленникова",
}

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <PhotoGallery />
      </main>
      <Footer />
    </>
  )
}
