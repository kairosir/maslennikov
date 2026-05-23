import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Timeline } from "@/components/timeline"
import { RecentUpdates } from "@/components/recent-updates"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Timeline />
        <RecentUpdates />
      </main>
      <Footer />
    </>
  )
}
