import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { FeaturedPosts } from "@/components/featured-posts"
import { ExperimentsPreview } from "@/components/experiments-preview"
import { SkillsGrid } from "@/components/skills-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />
      <Hero />
      <Marquee />
      <ExperimentsPreview />
      <FeaturedPosts />
      <SkillsGrid />
      <Footer />
    </main>
  )
}
