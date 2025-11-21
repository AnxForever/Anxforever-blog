"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-white">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-5 pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-[1.5px] border-black" />
        ))}
      </div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 right-10 w-96 h-96 bg-accent-green rounded-none blur-2xl opacity-60"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-pink rounded-none blur-2xl opacity-60"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent-blue rounded-none blur-3xl opacity-40"
      />

      <div className="z-10 flex flex-col items-center relative">
        {/* Small label like reference design */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-20 left-0 bg-accent-pink border-4 border-black px-4 py-2 rotate-[-2deg]"
        >
          <span className="font-black text-sm tracking-wider">HELLO WORLD</span>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter"
        >
          <span className="inline-block text-black">DIG</span>
          <span className="inline-block text-stroke">IT</span>
          <span className="inline-block text-black">AL</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-4 md:h-6 bg-accent-green border-4 border-black w-full my-2 origin-left"
        />

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter"
        >
          <span className="inline-block bg-accent-pink text-white px-4 border-4 border-black">AL</span>
          <span className="inline-block bg-accent-orange text-white px-4 border-4 border-black mx-2">CH</span>
          <span className="inline-block bg-accent-blue text-white px-4 border-4 border-black">E</span>
          <span className="inline-block text-stroke ml-2">MIST</span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-32 right-8 md:right-32 bg-black text-white p-6 font-mono text-sm md:text-base max-w-xs border-brutal-green rotate-2 hover:rotate-0 transition-transform duration-300"
      >
        <p className="text-accent-green mb-2">// system status</p>
        <p>const creativity = Infinity;</p>
        <p>let bugs = 0;</p>
        <p className="mt-2 text-gray-400">/* ready to deploy */</p>
      </motion.div>

      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10 left-10 flex items-center gap-3 font-black text-base border-4 border-black bg-accent-yellow px-4 py-2 cursor-pointer hover:bg-accent-pink transition-colors"
      >
        <ArrowDownRight className="w-6 h-6" strokeWidth={3} />
        SCROLL
      </motion.button>
    </section>
  )
}
