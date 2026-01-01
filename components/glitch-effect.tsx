"use client"
import { useState, useEffect } from "react"

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -ml-1 text-accent-pink opacity-70 animate-pulse z-0">{text}</span>
          <span className="absolute top-0 left-0 ml-1 text-accent-blue opacity-70 animate-pulse z-0">{text}</span>
        </>
      )}
    </div>
  )
}
