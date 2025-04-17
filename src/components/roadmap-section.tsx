"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoadmapItem {
  phase: number
  description: string
}

export default function RoadmapSection() {
  const roadmapData: RoadmapItem[] = [
    {
      phase: 1,
      description:
        "The journey begins with the official launch of the WW3X token on the Solana blockchain. This phase focuses on building a strong early community and creating awareness around the ecosystem.",
    },
    {
      phase: 2,
      description:
        "Players can now stake their WW3X tokens to receive Country Tokens, choosing which fictional nation they want to support and aligning themselves for future battles.",
    },
    {
      phase: 3,
      description:
        "Country Token holders and early WW3X supporters will receive exclusive airdrops, distributing power among nations and preparing the stage for strategic gameplay.",
    },
    {
      phase: 4,
      description:
        "The core game mechanics go live in a closed beta, allowing the community to test battles, staking strategies, and early war systems with real incentives.",
    },
    {
      phase: 5,
      description:
        "After community feedback and refinement, the full version of the WW3X game is released globally, opening up the battlefield to everyone.",
    },
    {
      phase: 6,
      description:
        "Countries begin engaging in official war matches. Players compete for dominance, with victories determining influence, rewards, and global reputation.",
    },
    {
      phase: 7,
      description:
        "Victors claim Victory Tokens and unlock powerful NFT assets, gaining access to rare collectibles, upgrades, and additional in-game perks.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(2) // Start with phase 3 (index 2) active
  const totalPhases = roadmapData.length

  // Calculate which phases to show (5 at a time)
  const calculateVisiblePhases = () => {
    // We want to show 5 phases, with the active one in the center
    const start = Math.max(0, Math.min(activeIndex - 2, totalPhases - 5))
    return roadmapData.slice(start, start + 5)
  }

  const visiblePhases = calculateVisiblePhases()

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if (activeIndex < totalPhases - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  // Calculate the position of the active phase in the visible array
  const activeVisibleIndex = activeIndex - Math.max(0, activeIndex - 2)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/roadmap-background.jpg')" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white uppercase tracking-wider">Road Map</h2>
        </div>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#00ff4c] z-10"></div>

          {/* Timeline nodes */}
          <div className="flex justify-between relative">
            {visiblePhases.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full border-2 z-20 transition-all duration-500 ease-in-out ${
                    index === activeVisibleIndex ? "bg-[#00ff4c] border-[#00ff4c]" : "bg-gray-700 border-gray-600"
                  }`}
                ></div>

                {/* Vertical dotted line */}
                <div className="h-40 border-l border-dashed border-gray-600 mt-2"></div>

                {/* Phase box */}
                <div
                  className={`w-64 h-64 bg-[#0c1116] border border-gray-800 p-6 relative transition-all duration-500 ease-in-out ${
                    index === activeVisibleIndex ? "border-[#00ff4c]/50" : ""
                  }`}
                >
                  {/* Corner borders for active phase */}
                  <div
                    className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-opacity duration-500 ease-in-out ${
                      index === activeVisibleIndex ? "border-[#00ff4c] opacity-100" : "border-transparent opacity-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-opacity duration-500 ease-in-out ${
                      index === activeVisibleIndex ? "border-[#00ff4c] opacity-100" : "border-transparent opacity-0"
                    }`}
                  ></div>

                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-500 ease-in-out ${
                      index === activeVisibleIndex ? "text-white" : "text-gray-400"
                    }`}
                  >
                    PHASE {item.phase}
                  </h3>

                  <p
                    className={`text-sm transition-colors duration-500 ease-in-out ${
                      index === activeVisibleIndex ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className="w-12 h-12 p-0 bg-black border border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,76,0.3)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            disabled={activeIndex === totalPhases - 1}
            className="w-12 h-12 p-0 bg-[#00ff4c] text-black hover:bg-[#00ff4c]/80 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,76,0.5)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

