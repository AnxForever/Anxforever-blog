"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      <div className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-20 text-black"
        >
          SELECTED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">WORKS</span>
        </motion.h1>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-20 items-center`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent-pink translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="relative overflow-hidden border-2 border-black aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="flex items-center gap-4 font-mono text-sm">
                  <span className="bg-black text-white px-2 py-1">{project.year}</span>
                  <span className="text-gray-500">{project.client}</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">{project.title}</h2>

                <p className="text-xl font-mono leading-relaxed max-w-md">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black px-3 py-1 text-xs font-bold hover:bg-accent-green hover:border-accent-green transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/work/${project.slug}`}>
                  <button className="w-fit mt-8 flex items-center gap-2 text-lg font-bold group/btn">
                    VIEW CASE STUDY
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300">-&gt;</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
