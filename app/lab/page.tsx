"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { experiments } from "@/lib/data"

const colors = ["#FF00FF", "#00FF00", "#00FFFF", "#FFFF00", "#FF0000"]

export default function LabPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent-green selection:text-black overflow-hidden relative">
      <Nav />

      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,20,1),_black_90%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />

        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen blur-xl"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              scale: Math.random() * 1 + 0.5,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              backgroundColor: colors[i % colors.length],
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-white/20 pb-8">
          <h1 className="text-[10vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            THE LAB
          </h1>
          <p className="font-mono text-sm md:text-base max-w-xs text-right hidden md:block text-accent-green">
            EXPERIMENTAL PLAYGROUND FOR DIGITAL CHAOS AND CODE POETRY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, index) => (
            <Link href={`/lab/${exp.slug}`} key={exp.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="aspect-square border border-white/10 relative group cursor-pointer overflow-hidden bg-white/5 hover:border-accent-pink/50 transition-colors duration-500"
              >
                <div className="absolute top-4 left-4 font-mono text-xs text-accent-blue opacity-70">
                  {exp.id} // {exp.tags[0]}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-black tracking-tighter group-hover:scale-125 transition-transform duration-500 z-10 group-hover:text-black mix-blend-difference text-center px-4">
                    {exp.title}
                  </h3>
                </div>

                {/* Interactive Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-pink via-accent-blue to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: hoveredIndex === index ? ["0% 0%", "100% 100%"] : "0% 0%",
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none" />

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs font-bold text-black z-20">
                  LAUNCH_EXP -&gt;
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
