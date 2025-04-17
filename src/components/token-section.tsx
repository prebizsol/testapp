"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TokenSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    // Add holographic effect
    const interval = setInterval(() => {
      if (contentRef.current) {
        const glitchDuration = 100
        contentRef.current.style.opacity = "0.8"
        contentRef.current.style.textShadow = "0 0 8px rgba(0, 255, 76, 0.8), 0 0 12px rgba(0, 255, 76, 0.5)"

        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.opacity = "1"
            contentRef.current.style.textShadow = "0 0 5px rgba(0, 255, 76, 0.6), 0 0 10px rgba(0, 255, 76, 0.4)"
          }
        }, glitchDuration)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Holographic background effect */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[#00ff4c]/5 mix-blend-overlay z-0"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00ff4c" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="h-full w-full animate-scan-line"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight relative">
              <span className="relative inline-block">
                The Power of
                <span className="block text-[#00ff4c] animate-pulse-slow">Tokens</span>
                in a World at War
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </span>
            </h2>
          </div>

          {/* Right side - Content */}
          <div
            ref={contentRef}
            className="lg:w-2/3 text-gray-300 space-y-6 transition-all duration-300"
            style={{
              textShadow: "0 0 5px rgba(0, 255, 76, 0.6), 0 0 10px rgba(0, 255, 76, 0.4)",
            }}
          >
            <p className="text-lg">
              In this war-driven ecosystem, tokens fuel your influence, military strength, and strategic decisions. From
              staking to battle rewards, each token plays a crucial role in shaping your path to victory.
            </p>

            <div className="space-y-4">
              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                <h3 className="text-[#00ff4c] font-bold text-xl mb-2">WW3X (Core Token)</h3>
                <p>
                  The foundation of the ecosystem. Required to access country tokens and participate in high-level
                  strategies.
                </p>
              </div>

              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                <h3 className="text-[#00ff4c] font-bold text-xl mb-2">Country Tokens (10 Unique Tokens)</h3>
                <p>
                  Represent each nation's strength and resources. Used for staking, purchasing military units, and
                  influencing battles.
                </p>
              </div>

              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                <h3 className="text-[#00ff4c] font-bold text-xl mb-2">Victory Tokens</h3>
                <p>
                  Earned through battles and strategic decisions. Used to unlock exclusive rewards, upgrades, and
                  powerful assets.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/tokenomics">
                <Button
                  className={`relative bg-black border border-[#00ff4c] text-[#00ff4c] px-6 py-2 rounded-sm transition-all duration-300 overflow-hidden ${
                    isButtonHovered ? "shadow-[0_0_15px_rgba(0,255,76,0.5)]" : ""
                  }`}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  {/* Animated background on hover */}
                  <div
                    className={`absolute inset-0 bg-[#00ff4c]/10 transition-transform duration-300 ${
                      isButtonHovered ? "translate-x-0" : "-translate-x-full"
                    }`}
                  ></div>
                  <span className="relative z-10">Learn more about tokenomics</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

