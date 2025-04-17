"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isWorldDropdownOpen, setIsWorldDropdownOpen] = useState(false)

  return (
    <header className="bg-black border-b border-[#00ff4c]/20 fixed top-0 w-full z-[100]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-32">
              <Image src="/images/logo-ww3x-new-globe.png" alt="WW3X Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#00ff4c] transition-colors">
              Homepage
            </Link>

            {/* The World Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-[#00ff4c] transition-colors"
                onClick={() => setIsWorldDropdownOpen(!isWorldDropdownOpen)}
              >
                The World
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isWorldDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-[#00ff4c]/30 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/world/yuniteda"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Yuniteda
                  </Link>
                  <Link
                    href="/world/chimara"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Chimara
                  </Link>
                  <Link
                    href="/world/rovska"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Rovska
                  </Link>
                  <Link
                    href="/world/indara"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Indara
                  </Link>
                  <Link
                    href="/world/gerlandia"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Gerlandia
                  </Link>
                  <Link
                    href="/world/unitara"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Unitara
                  </Link>
                  <Link
                    href="/world/brasara"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Brasara
                  </Link>
                  <Link
                    href="/world/japira"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Japira
                  </Link>
                  <Link
                    href="/world/franvia"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Franvia
                  </Link>
                  <Link
                    href="/world/ukravata"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#00ff4c]/10 hover:text-[#00ff4c]"
                    onClick={() => setIsWorldDropdownOpen(false)}
                  >
                    Ukravata
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about-ww3x" className="text-white hover:text-[#00ff4c] transition-colors">
              About WW3X
            </Link>
            <Link href="/tokenomics" className="text-white hover:text-[#00ff4c] transition-colors">
              Tokenomics
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#00ff4c] text-[#00ff4c] hover:bg-[#00ff4c]/10 transition-colors"
            >
              Connect Wallet
            </Button>
            <Button className="bg-[#00ff4c] text-black hover:bg-[#00ff4c]/80">Join Discord</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

