import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, DiscIcon as Discord, Globe } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00ff4c]/20 pt-16 pb-8 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-4">
              <div className="relative w-48 h-16 mb-2">
                <Image src="/images/logo-ww3x-new-globe.png" alt="WW3X Logo" fill className="object-contain" />
              </div>
              <h3 className="text-white text-xl font-bold flex items-center">
                <span className="text-[#00ff4c]">BLOCKCHAIN</span>
                <span className="ml-2">WAR GAME</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate blockchain war simulation game. Stake your tokens, command your forces, and conquer the
              digital battlefield.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10"
              >
                <Discord className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#00ff4c]/30 text-[#00ff4c] hover:bg-[#00ff4c]/10"
              >
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/about-ww3x" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  About WW3X
                </Link>
              </li>
              <li>
                <Link href="/tokenomics" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">The World</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/world/yuniteda" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Yuniteda
                </Link>
              </li>
              <li>
                <Link href="/world/chimara" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Chimara
                </Link>
              </li>
              <li>
                <Link href="/world/rovska" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Rovska
                </Link>
              </li>
              <li>
                <Link href="/world/indara" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Indara
                </Link>
              </li>
              <li>
                <Link href="/world/gerlandia" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Gerlandia
                </Link>
              </li>
              <li>
                <Link href="/world/ukravata" className="text-gray-400 hover:text-[#00ff4c] transition-colors">
                  Ukravata
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/world" className="text-[#00ff4c] hover:text-[#00ff4c]/80 transition-colors">
                  View All Countries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates about battles, token drops, and strategic opportunities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black/60 border border-[#00ff4c]/30 text-white px-3 py-2 rounded-l-md focus:outline-none focus:border-[#00ff4c]/70 w-full"
              />
              <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black rounded-l-none">Join</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00ff4c]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WW3X Blockchain. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-[#00ff4c] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#00ff4c] text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-[#00ff4c] text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

