"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

interface TokenStakingSectionProps {
  countryCode: string
}

export default function TokenStakingSection({ countryCode }: TokenStakingSectionProps) {
  const [stakeAmount, setStakeAmount] = useState(1000)
  const [percentage, setPercentage] = useState(20)
  const maxAmount = 5000

  // Update stake amount when percentage changes
  const handlePercentageChange = (newPercentage) => {
    // Make sure newPercentage is a number
    const percentageValue = Array.isArray(newPercentage) ? newPercentage[0] : Number(newPercentage)
    setPercentage(percentageValue)
    setStakeAmount(Math.round((maxAmount * percentageValue) / 100))
  }

  // Also update the handleAmountChange function to ensure we're handling numbers properly
  const handleAmountChange = (e) => {
    const newAmount = Math.min(Math.max(0, Number(e.target.value) || 0), maxAmount)
    setStakeAmount(newAmount)
    setPercentage(Math.round((newAmount / maxAmount) * 100))
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/backgrounds/cta-background.jpg')" }}
        ></div>

        {/* Animated scan line */}
        <div className="absolute inset-0 overflow-hidden z-20 opacity-30">
          <div className="h-full w-full animate-scan-line"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-lg p-10 shadow-[0_0_40px_rgba(0,255,76,0.3)] overflow-hidden relative"
            style={{
              backgroundImage: "url('/images/backgrounds/cta-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Border effect */}
            <div className="absolute inset-0 border-2 border-[#00ff4c]/40 rounded-lg"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-bold text-white mb-6">
                Stake <span className="text-[#00ff4c]">{countryCode}</span> Token
              </h2>

              <p className="text-gray-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Stake your {countryCode} tokens to earn rewards and strengthen your country's position in the global
                conflict. The more you stake, the greater your influence and potential returns as your nation conquers
                new territories.
              </p>

              <div className="max-w-md mx-auto mb-8">
                <div className="mb-6">
                  <label htmlFor="stakeAmount" className="block text-white text-left mb-2">
                    Stake Amount:
                  </label>
                  <Input
                    id="stakeAmount"
                    type="number"
                    value={stakeAmount}
                    onChange={handleAmountChange}
                    min="0"
                    max={maxAmount}
                    className="bg-black/60 border-[#00ff4c]/50 text-white text-xl py-6 text-center"
                  />
                </div>

                <div className="mb-8">
                  <div className="flex justify-between text-gray-400 mb-2">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                  <Slider
                    defaultValue={[20]}
                    max={100}
                    step={1}
                    value={[percentage]}
                    onValueChange={(values) => handlePercentageChange(values[0])}
                    className="[&>span:nth-child(3)]:bg-[#00ff4c] [&>span:nth-child(1)]:bg-white [&>span:nth-child(5)]:bg-[#00ff4c]"
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handlePercentageChange(10)}
                      className="bg-black/60 border border-[#00ff4c]/30 text-[#00ff4c] px-3 py-1 rounded-sm hover:bg-[#00ff4c]/10"
                    >
                      10%
                    </button>
                    <button
                      onClick={() => handlePercentageChange(25)}
                      className="bg-black/60 border border-[#00ff4c]/30 text-[#00ff4c] px-3 py-1 rounded-sm hover:bg-[#00ff4c]/10"
                    >
                      25%
                    </button>
                    <button
                      onClick={() => handlePercentageChange(50)}
                      className="bg-black/60 border border-[#00ff4c]/30 text-[#00ff4c] px-3 py-1 rounded-sm hover:bg-[#00ff4c]/10"
                    >
                      50%
                    </button>
                    <button
                      onClick={() => handlePercentageChange(75)}
                      className="bg-black/60 border border-[#00ff4c]/30 text-[#00ff4c] px-3 py-1 rounded-sm hover:bg-[#00ff4c]/10"
                    >
                      75%
                    </button>
                    <button
                      onClick={() => handlePercentageChange(100)}
                      className="bg-black/60 border border-[#00ff4c]/30 text-[#00ff4c] px-3 py-1 rounded-sm hover:bg-[#00ff4c]/10"
                    >
                      100%
                    </button>
                  </div>
                </div>

                <Button className="w-full bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-10 py-6 text-xl rounded-md border border-[#00ff4c]/50 shadow-[0_0_20px_rgba(0,255,76,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,76,0.8)]">
                  Stake Tokens
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

