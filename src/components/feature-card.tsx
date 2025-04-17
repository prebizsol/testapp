"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  number: string
  title: string
  description: string
}

export default function FeatureCard({ number, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`bg-black border border-[#00ff4c]/20 transition-all duration-300 h-full relative ${
        isHovered ? "shadow-[0_0_15px_rgba(0,255,76,0.3)]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Corner borders that appear on hover */}
      <div
        className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff4c] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff4c] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>

      <CardContent className="p-6">
        <div className="text-[#00ff4c] text-4xl font-bold mb-4">{number}</div>
        <h3 className="text-white text-xl font-bold uppercase mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

