"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { GlitchText } from "@/components/glitch-effect"
import { posts } from "@/lib/data"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      <div className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-20 text-black drop-shadow-[10px_10px_0px_rgba(0,255,0,1)]"
        >
          <GlitchText text="THOUGHTS" />
        </motion.h1>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(255,0,255,1)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-mono text-sm transform translate-x-2 -translate-y-2 group-hover:bg-accent-yellow group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                  {post.category}
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-gray-500 group-hover:text-black transition-colors">
                    // {post.date}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-accent-pink transition-colors">
                      →
                    </span>
                    <span className="font-bold font-mono">READ_FILE</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
