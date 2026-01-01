import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { ChaosModeToggle } from "@/components/chaos-mode-toggle"
import { CommandPalette } from "@/components/command-palette"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "DEV_AVANT_GARDE | Code & Art",
    template: "%s | DEV_AVANT_GARDE",
  },
  description: "A digital playground for code, art, and data science experiments.",
  keywords: ["Data Science", "Frontend Development", "Creative Coding", "Next.js", "React", "Visualization"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "DEV_AVANT_GARDE",
    description: "A digital playground for code and art.",
    url: "https://your-domain.com",
    siteName: "DEV_AVANT_GARDE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV_AVANT_GARDE",
    description: "A digital playground for code and art.",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <CustomCursor />
        <ChaosModeToggle />
        <CommandPalette />
        {children}
      </body>
    </html>
  )
}
