import Link from "next/link"
import { GlitchText } from "@/components/glitch-effect"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-accent-yellow flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/abstract-noise.png')] bg-repeat" />

      <div className="relative z-10 border-4 border-black bg-white p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full text-center transform rotate-1">
        <div className="absolute -top-6 -left-6 bg-accent-pink border-4 border-black px-4 py-2 transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black text-xl">ERROR_404</span>
        </div>

        <h1 className="text-8xl md:text-9xl font-black mb-4 tracking-tighter">
          <GlitchText text="LOST?" />
        </h1>

        <p className="text-2xl font-mono mb-8 border-y-4 border-black py-4">
          THE PAGE YOU SEEK HAS BEEN CONSUMED BY THE VOID.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-black text-white text-xl font-bold py-4 px-8 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
          >
            RETURN_HOME
          </Link>
          <Link
            href="/lab"
            className="bg-accent-green text-black text-xl font-bold py-4 px-8 border-4 border-black hover:bg-accent-blue transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
          >
            ENTER_LAB
          </Link>
        </div>
      </div>
    </div>
  )
}
