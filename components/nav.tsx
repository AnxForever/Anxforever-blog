"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Command } from "lucide-react"

const links = [
  { href: "/work", label: "作品", color: "hover:bg-accent-pink" },
  { href: "/about", label: "关于", color: "hover:bg-accent-green" },
  { href: "/blog", label: "博客", color: "hover:bg-accent-blue" },
  { href: "/lab", label: "实验室", color: "hover:bg-accent-yellow" },
  { href: "/contact", label: "联系", color: "hover:bg-accent-orange" },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 md:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform bg-black text-white px-2 py-1 rotate-[-2deg]"
      >
        DEV_AVANT_GARDE
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4 items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="relative group">
            <span
              className={`block font-black text-sm tracking-widest border-2 border-black px-4 py-2 transition-all duration-200 ${
                pathname === link.href
                  ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] translate-x-[2px] translate-y-[2px]"
                  : `bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${link.color}`
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}

        {/* Command Palette Trigger */}
        <button
          onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
          className="ml-4 flex items-center gap-2 font-bold text-xs border-2 border-black px-3 py-2 bg-gray-100 hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          <Command className="w-4 h-4" />
          <span>CMD+K</span>
        </button>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden font-black text-sm tracking-widest border-2 border-black px-4 py-2 bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 mt-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-4xl font-black border-2 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${link.color.replace("hover:", "")}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
