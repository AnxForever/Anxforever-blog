"use client"

import { Nav } from "@/components/nav"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Play, RefreshCw } from "lucide-react"
import { useParams } from "next/navigation"

export default function ExperimentPage() {
  const params = useParams()
  const id = params.slug as string

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent-green selection:text-black">
      <Nav />

      <div className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto h-screen flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 font-bold hover:text-accent-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            EXIT LAB
          </Link>
          <div className="font-mono text-accent-pink">EXP_ID: {id}</div>
        </div>

        <div className="flex-1 border border-white/20 relative bg-gray-900/50 overflow-hidden rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-24 h-24 border-4 border-accent-blue border-t-transparent rounded-full mx-auto mb-6"
              />
              <h2 className="text-2xl font-black mb-2">INITIALIZING EXPERIMENT...</h2>
              <p className="font-mono text-gray-400 text-sm">Loading WebGL Context</p>
            </div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-black/80 backdrop-blur-sm border-t border-white/10 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-accent-green transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </button>
              <button className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
            <div className="font-mono text-xs text-gray-400">RENDER_TIME: 16.7ms | FPS: 60</div>
          </div>
        </div>
      </div>
    </main>
  )
}
