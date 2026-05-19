import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Timeline } from "@/components/timeline"
import { RecentUpdates } from "@/components/recent-updates"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Timeline />
        <StatsSection />
        <RecentUpdates />
      </main>
      <Footer />
    </>
  )
}
