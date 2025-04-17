"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Phase {
  number: number
  points: string[]
}

export default function RoadmapSlider() {
  const phases: Phase[] = [
    {
      number: 1,
      points: ["WW3X Token Release", "Country Tokens Deployment", "Smart Contract Audits", "Community Onboarding"],
    },
    {
      number: 2,
      points: [
        "Staking Mechanism Live",
        "Victory Token Distribution",
        "Early Supporter Airdrops",
        "Leaderboard Activation",
      ],
    },
    {
      number: 3,
      points: ["War Simulation Events", "Alliance Formation System", "Country Token Utility", "First Battle Rewards"],
    },
    {
      number: 4,
      points: ["Country-Specific Units", "Strategic War Mechanics", "Upgradeable Weapons", "Special Event Battles"],
    },
    {
      number: 5,
      points: ["War-Based NFT Assets", "Marketplace for Trading", "NFT-Based Unit Boosts", "Limited Edition Rewards"],
    },
    {
      number: 6,
      points: ["Voting Mechanism Live", "Country Policy Updates", "Strategic Player Roles", "Game Economy Adjustments"],
    },
    {
      number: 7,
      points: [
        "New Countries Introduced",
        "Massive Battle Events",
        "Extended War Mechanics",
        "Cross-Platform Expansion",
      ],
    },
  ]

  const [activePhase, setActivePhase] = useState(3) // Start with phase 3 (index 2) as active
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrevious = () => {
    setActivePhase((prev) => (prev > 0 ? prev - 1 : prev))
    resetAutoScroll()
  }

  const handleNext = () => {
    setActivePhase((prev) => (prev < phases.length - 1 ? prev + 1 : prev))
    resetAutoScroll()
  }

  const handlePhaseClick = (index: number) => {
    setActivePhase(index)
    resetAutoScroll()
  }

  const resetAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }

    if (isAutoScrolling) {
      autoScrollTimerRef.current = setInterval(() => {
        setActivePhase((prev) => {
          const next = prev + 1
          return next < phases.length ? next : 0
        })
      }, 5000)
    }
  }

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollTimerRef.current = setInterval(() => {
        setActivePhase((prev) => {
          const next = prev + 1
          return next < phases.length ? next : 0
        })
      }, 5000)
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isAutoScrolling, phases.length])

  const getPhaseStyles = (index: number) => {
    const distance = Math.abs(activePhase - index)

    if (distance === 0) {
      return "z-30 scale-100 opacity-100 translate-x-0"
    } else if (distance === 1) {
      return index < activePhase ? "z-20 -translate-x-8 scale-90 opacity-70" : "z-20 translate-x-8 scale-90 opacity-70"
    } else if (distance === 2) {
      return index < activePhase
        ? "z-10 -translate-x-16 scale-80 opacity-40"
        : "z-10 translate-x-16 scale-80 opacity-40"
    } else {
      return index < activePhase ? "z-0 -translate-x-24 scale-70 opacity-0" : "z-0 translate-x-24 scale-70 opacity-0"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/roadmap-background.jpg')" }}
        ></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Our Roadmap</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
          </h2>
        </div>

        <div className="flex items-center justify-center mb-16">
          <Button
            variant="outline"
            size="icon"
            className="mr-4 rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10 z-40"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="relative flex items-center justify-center h-[400px]">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#00ff4c]/30 z-10">
              {phases.map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 w-3 h-3 rounded-full -translate-y-1/2 transition-all duration-500 ${
                    index <= activePhase ? "bg-[#00ff4c] shadow-[0_0_10px_rgba(0,255,76,0.7)]" : "bg-[#00ff4c]/30"
                  }`}
                  style={{ left: `${(index / (phases.length - 1)) * 100}%` }}
                />
              ))}
            </div>

            {/* Phase cards */}
            <div className="relative w-full max-w-4xl">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] transition-all duration-700 ease-in-out cursor-pointer ${getPhaseStyles(index)}`}
                  onClick={() => handlePhaseClick(index)}
                >
                  <div
                    className={`bg-black/80 border border-[#00ff4c]/30 p-6 rounded-md transition-all duration-300 h-[280px] relative ${
                      activePhase === index ? "shadow-[0_0_20px_rgba(0,255,76,0.3)]" : ""
                    }`}
                  >
                    {/* Corner borders that appear on hover or active */}
                    <div
                      className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff4c] transition-opacity duration-300 ${activePhase === index ? "opacity-100" : "opacity-0"}`}
                    ></div>
                    <div
                      className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff4c] transition-opacity duration-300 ${activePhase === index ? "opacity-100" : "opacity-0"}`}
                    ></div>

                    <div className="text-center mb-6">
                      <div className="inline-block relative">
                        <div
                          className={`text-3xl font-bold ${activePhase === index ? "text-[#00ff4c]" : "text-white"} transition-colors duration-300`}
                        >
                          PHASE {phase.number}
                        </div>
                        {activePhase === index && (
                          <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00ff4c] rounded-full shadow-[0_0_5px_rgba(0,255,76,0.7)]"></div>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {phase.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className={`flex items-center transition-all duration-300 ${
                            activePhase === index ? "text-white" : "text-gray-400"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${activePhase === index ? "bg-[#00ff4c]" : "bg-gray-500"}`}
                          ></div>
                          <span className={activePhase === index ? "text-shadow-sm" : ""}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="ml-4 rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10 z-40"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10"
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          >
            {isAutoScrolling ? "Pause Auto-Scroll" : "Resume Auto-Scroll"}
          </Button>
        </div>
      </div>
    </section>
  )
}

