"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Ability {
  name: string
  icon: React.ReactNode
}

interface CountryProps {
  country: {
    name: string
    flag: string
    description: string
    abilities: Ability[]
    tokenIcon: string
  }
}

export default function CountryCard({ country }: CountryProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden bg-black border border-[#00ff4c]/30 transition-all duration-300 h-[420px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? "0 0 20px rgba(0, 255, 76, 0.3)" : "none",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

      {/* Animated border effect */}
      <div
        className={`absolute inset-0 border-2 border-[#00ff4c]/0 transition-all duration-500 z-20 ${isHovered ? "border-[#00ff4c]/50" : ""}`}
      ></div>

      {/* Scan line effect */}
      <div
        className={`absolute inset-0 overflow-hidden ${isHovered ? "opacity-30" : "opacity-0"} transition-opacity duration-300`}
      >
        <div className="h-full w-full animate-scan-line-fast"></div>
      </div>

      <CardContent className="p-0 h-full">
        <div className="relative h-full flex flex-col">
          {/* Flag */}
          <div className="relative h-32 overflow-hidden">
            <Image
              src={country.flag || "/placeholder.svg"}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white">{country.name}</h3>
              <div className="w-8 h-8 rounded-full bg-black/60 border border-[#00ff4c]/30 flex items-center justify-center">
                <Image
                  src={country.tokenIcon || "/placeholder.svg?height=20&width=20"}
                  alt={`${country.name} token`}
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">{country.description}</p>

            <div className="mt-auto">
              <h4 className="text-xs text-gray-500 mb-2">SPECIAL ABILITIES</h4>
              <ul className="space-y-2 mb-4">
                {country.abilities.map((ability, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-[#00ff4c]">{ability.icon}</div>
                    <p className="text-[#00ff4c] font-semibold text-sm">{ability.name}</p>
                  </li>
                ))}
              </ul>

              {/* View More button - always visible */}
              <div className="flex justify-center">
                <Link href={`/world/${country.name.toLowerCase()}`}>
                  <Button className="bg-black border border-[#00ff4c] text-[#00ff4c] px-6 py-1 rounded-sm text-sm hover:bg-[#00ff4c]/10 transition-colors">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#00ff4c]/10 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

