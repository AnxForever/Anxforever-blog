"use client"

import type React from "react"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-white selection:bg-accent-pink selection:text-white">
      <Nav />

      <div className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Text */}
          <div>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[10vw] leading-[0.8] font-black tracking-tighter mb-12 text-black"
            >
              LET'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-pink">
                COLLIDE
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-mono max-w-md mb-12"
            >
              Have a crazy idea? A project that defies logic? Or just want to argue about tabs vs spaces? Send a signal.
            </motion.p>

            <div className="flex flex-col gap-4 font-mono text-lg">
              <a href="mailto:hello@example.com" className="hover:text-accent-pink transition-colors">
                hello@example.com
              </a>
              <a href="#" className="hover:text-accent-blue transition-colors">
                @twitter_handle
              </a>
              <a href="#" className="hover:text-accent-green transition-colors">
                github.com/username
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 p-8 md:p-12 border-2 border-black relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-black" />
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-black" />

            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-3xl font-black uppercase mb-2">信号已接收</h3>
                <p className="font-mono text-gray-600">我会以光速回复你。</p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-sm font-bold underline hover:text-accent-pink"
                >
                  发送另一条
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="font-mono font-bold uppercase text-sm">身份 / IDENTITY</label>
                  <input
                    required
                    type="text"
                    placeholder="你的名字"
                    className="bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-4 text-xl font-bold placeholder:text-gray-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono font-bold uppercase text-sm">坐标 / COORDINATES</label>
                  <input
                    required
                    type="email"
                    placeholder="你的邮箱"
                    className="bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-4 text-xl font-bold placeholder:text-gray-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono font-bold uppercase text-sm">传输内容 / TRANSMISSION</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="告诉我一切..."
                    className="bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-4 text-xl font-bold placeholder:text-gray-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="bg-black text-white py-6 px-8 font-bold text-xl uppercase tracking-widest hover:bg-accent-pink transition-colors mt-4 group flex justify-between items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{formStatus === "submitting" ? "传输中..." : "发送信息"}</span>
                  <span className="group-hover:translate-x-2 transition-transform">-&gt;</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
