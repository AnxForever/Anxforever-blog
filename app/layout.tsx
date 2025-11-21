import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { ChaosModeToggle } from "@/components/chaos-mode-toggle"
import { CommandPalette } from "@/components/command-palette"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DEV_AVANT_GARDE",
  description: "A digital playground for code and art.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.variable} font-sans antialiased`}>
        <CustomCursor />
        <ChaosModeToggle />
        <CommandPalette />
        {children}
      </body>
    </html>
  )
}
