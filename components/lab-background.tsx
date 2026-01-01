"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

const colors = ["#FF00FF", "#00FF00", "#00FFFF", "#FFFF00", "#FF0000"]

export function LabBackground() {
  // 使用 useMemo 生成稳定的随机值，避免 hydration 不匹配
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      initialX: Math.random() * 1000,
      initialY: Math.random() * 1000,
      initialScale: Math.random() * 0.5 + 0.5,
      initialOpacity: Math.random() * 0.5,
      animateX: Math.random() * 1000,
      animateY: Math.random() * 1000,
      animateScale: Math.random() * 1 + 0.5,
      duration: Math.random() * 20 + 10,
      width: Math.random() * 400 + 100,
      height: Math.random() * 400 + 100,
      color: colors[i % colors.length],
    }))
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,20,1),_black_90%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full mix-blend-screen blur-xl"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            scale: particle.initialScale,
            opacity: particle.initialOpacity,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            scale: particle.animateScale,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            width: particle.width,
            height: particle.height,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  )
}
