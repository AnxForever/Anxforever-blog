"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useParams, notFound } from "next/navigation"
import { posts } from "@/lib/data"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts.find((p) => p.slug === slug)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  if (!post) {
    notFound()
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-4 bg-accent-pink z-50 origin-left border-b-4 border-black"
      />

      <header className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block bg-accent-yellow border-4 border-black px-6 py-2 font-black text-xl mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-2"
        >
          {post.category} // {post.date}
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-black uppercase leading-[1.1] mb-12 drop-shadow-[8px_8px_0px_rgba(0,255,255,1)]">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-4 items-center font-mono text-sm border-y-4 border-black py-6 bg-gray-50">
          <div className="bg-black text-white px-3 py-1">阅读时间: 5 分钟</div>
          <span className="text-2xl">×</span>
          <div className="bg-black text-white px-3 py-1">作者: V0</div>
        </div>

        {/* Floating Element */}
        <motion.div
          style={{ rotate }}
          className="absolute top-20 right-0 w-32 h-32 md:w-64 md:h-64 border-8 border-black border-dashed rounded-full flex items-center justify-center opacity-20 pointer-events-none"
        >
          <div className="w-full text-center font-black text-xl">SCROLL</div>
        </motion.div>
      </header>

      <article className="px-4 md:px-12 max-w-4xl mx-auto pb-32">
        <div className="bg-black text-white p-8 md:p-12 mb-12 shadow-[16px_16px_0px_0px_rgba(255,0,255,1)] transform -rotate-1">
          <p className="text-xl md:text-2xl font-bold leading-relaxed font-mono">"{post.content}"</p>
        </div>

        <div className="prose prose-xl prose-headings:font-black prose-p:font-mono prose-p:text-black prose-strong:bg-accent-yellow prose-strong:px-1">
          <p>
            这里是文章的正文内容。在真实的博客中，这里会包含详细的段落、代码块和图片。
            为了保持新野兽派的风格，我们使用了粗体标题、单等宽字体段落和高对比度的强调色。
          </p>

          <div className="my-12 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black mb-4 uppercase">设计即功能</h3>
            <p className="text-sm font-mono bg-accent-pink inline-block px-2 border-2 border-black text-white font-bold">
              - 史蒂夫·乔布斯 (Remixed)
            </p>
          </div>

          <p>
            为什么坚持使用安全、易读的蓝色和灰色？为什么不使用霓虹粉和电光绿？
            打破网格，重叠元素，使用激进的排版来表达观点。这就是我们的哲学。
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
