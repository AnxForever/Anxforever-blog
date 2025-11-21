"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams, notFound } from "next/navigation"
import { projects } from "@/lib/data"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      <div className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-bold hover:text-accent-pink transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          返回作品列表
        </Link>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[8vw] leading-[0.9] font-black tracking-tighter mb-8 text-black uppercase"
        >
          {project.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-100 border-2 border-black relative mb-8 overflow-hidden group">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                [PREVIEW]
              </div>
            </div>

            <div className="prose prose-lg max-w-none font-mono">
              <p className="text-xl font-bold mb-4">{project.description}</p>
              <p>
                这是一个关于 {project.title}{" "}
                的详细案例研究。在实际应用中，这里将包含完整的设计过程、技术挑战和解决方案。
                设计遵循新野兽派美学，具有高对比度元素、大胆的排版和原始的布局结构。
              </p>
              <p>我们使用了 {project.tags.join(", ")} 等技术栈来实现这个项目，确保了最佳的性能和用户体验。</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-black text-xl mb-2">客户 / CLIENT</h3>
              <p className="font-mono">{project.client}</p>
            </div>
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-black text-xl mb-2">年份 / YEAR</h3>
              <p className="font-mono">{project.year}</p>
            </div>
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-black text-xl mb-2">角色 / ROLE</h3>
              <p className="font-mono">首席开发, UI/UX 设计</p>
            </div>
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-black text-xl mb-2">技术栈 / TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-black text-white px-2 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
