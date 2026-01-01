"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { GlitchText } from "@/components/glitch-effect"
import { posts } from "@/lib/data"

const INITIAL_DISPLAY_COUNT = 4

export default function BlogPage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedPosts = isExpanded ? posts : posts.slice(0, INITIAL_DISPLAY_COUNT)
  const hasMorePosts = posts.length > INITIAL_DISPLAY_COUNT

  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter mb-10 md:mb-20 text-black drop-shadow-[6px_6px_0px_rgba(0,255,0,1)] md:drop-shadow-[10px_10px_0px_rgba(0,255,0,1)]"
        >
          <GlitchText text="THOUGHTS" />
        </motion.h1>

        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <AnimatePresence>
          {displayedPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border-2 md:border-4 border-black p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(255,0,255,1)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 bg-black text-white px-2 md:px-4 py-1 md:py-2 font-mono text-xs md:text-sm transform translate-x-1 md:translate-x-2 -translate-y-1 md:-translate-y-2 group-hover:bg-accent-yellow group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                  {post.category}
                </div>

                <div className="flex flex-col gap-2 md:gap-4">
                  <span className="font-mono text-xs md:text-sm text-gray-500 group-hover:text-black transition-colors">
                    // {post.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-5xl font-black uppercase group-hover:text-accent-blue transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 md:mt-4">
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-accent-pink transition-colors text-sm md:text-base">
                      →
                    </span>
                    <span className="font-bold font-mono text-sm md:text-base">READ_FILE</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
          </AnimatePresence>
        </div>

        {/* 展开/收起按钮 */}
        {hasMorePosts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8 md:mt-12"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative bg-black text-white px-6 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg uppercase tracking-wider border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,255,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,0,255,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2 md:gap-3">
                {isExpanded ? "收起内容" : `查看全部 (${posts.length})`}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </span>
            </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  )
}
