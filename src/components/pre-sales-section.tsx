"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PreSalesSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return { hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-black relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image and countdown */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
              <Image
                src="/images/futuristic-soldier.png"
                alt="WW3X Soldier"
                width={600}
                height={600}
                className="w-full object-cover"
              />

              {/* Countdown overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                <p className="text-[#00ff4c] text-center mb-2">Pre-Sales is Ending in:</p>
                <div className="flex justify-center space-x-4 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                    <div className="text-xs uppercase">Hours</div>
                  </div>
                  <div className="text-3xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                    <div className="text-xs uppercase">Minutes</div>
                  </div>
                  <div className="text-3xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                    <div className="text-xs uppercase">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Pre-Sale is live now.</h2>
            <p className="text-gray-300 mb-8">
              With a limited supply, high demand, and a powerful ecosystem, this is your chance to invest early and
              secure your position before the next wave. Get in now, before it's too late.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md hover:border-[#00ff4c]/60 hover:shadow-[0_0_10px_rgba(0,255,76,0.2)] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[#00ff4c] font-bold mb-1">Massive Growth Potential</h3>
                <p className="text-gray-400 text-sm">Early investors benefit from token value appreciation</p>
              </div>

              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md hover:border-[#00ff4c]/60 hover:shadow-[0_0_10px_rgba(0,255,76,0.2)] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[#00ff4c] font-bold mb-1">Secure & Transparent</h3>
                <p className="text-gray-400 text-sm">Built on blockchain with audited smart contracts</p>
              </div>

              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md hover:border-[#00ff4c]/60 hover:shadow-[0_0_10px_rgba(0,255,76,0.2)] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[#00ff4c] font-bold mb-1">Deflationary Tokenomics</h3>
                <p className="text-gray-400 text-sm">Token burn mechanisms increase scarcity over time</p>
              </div>

              <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md hover:border-[#00ff4c]/60 hover:shadow-[0_0_10px_rgba(0,255,76,0.2)] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[#00ff4c] font-bold mb-1">Limited Pre-Sale Supply</h3>
                <p className="text-gray-400 text-sm">Only a fraction of tokens available during pre-sale</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-xl font-bold text-white uppercase tracking-wider">TOTAL SUPPLY: 993.24M</p>
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-8 py-6 text-lg rounded-md border border-[#00ff4c]/50 shadow-[0_0_15px_rgba(0,255,76,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,76,0.7)]">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

