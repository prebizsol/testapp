import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountryCard from "@/components/country-card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Marquee from "@/components/marquee"
import FeatureCard from "@/components/feature-card"
import TokenSection from "@/components/token-section"
import RoadmapSection from "@/components/roadmap-section"
import PreSalesSection from "@/components/pre-sales-section"
import FAQsSection from "@/components/faqs-section"
import CommunityCTA from "@/components/community-cta"
import { Shield, Zap, Bomb, Radar, Cpu, Radio, Satellite, Rocket, Target, Plane } from "lucide-react"

export default function Home() {
  const countries = [
    {
      name: "Yuniteda",
      flag: "/images/flags/yuniteda.png",
      description:
        "A global superpower with advanced military technology and economic dominance. Masters of air and naval warfare.",
      abilities: [
        { name: "Stealth Fighter Jets", icon: <Plane className="h-4 w-4" /> },
        { name: "Precision Airstrikes", icon: <Target className="h-4 w-4" /> },
        { name: "Advanced Missile Defense", icon: <Shield className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Chimara",
      flag: "/images/flags/chimara.png",
      description:
        "A technological powerhouse with a massive industrial base. Excels in cyber warfare, drones, and strategic resource control.",
      abilities: [
        { name: "AI-Powered Drones", icon: <Cpu className="h-4 w-4" /> },
        { name: "Cyber Warfare Operations", icon: <Zap className="h-4 w-4" /> },
        { name: "High-Speed Missile Systems", icon: <Rocket className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Rovska",
      flag: "/images/flags/rovska.png",
      description:
        "A military giant with heavily armored forces and strategic nuclear capabilities. Specializes in ground warfare and missile technology.",
      abilities: [
        { name: "Heavy Battle Tanks", icon: <Shield className="h-4 w-4" /> },
        { name: "Ballistic Missile Systems", icon: <Bomb className="h-4 w-4" /> },
        { name: "Electronic Warfare", icon: <Radio className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Indara",
      flag: "/images/flags/indara.png",
      description:
        "A rapidly growing military power with a balance of defense and offense. Strong in missile systems and naval dominance.",
      abilities: [
        { name: "Long-Range Missile Systems", icon: <Rocket className="h-4 w-4" /> },
        { name: "Advanced Naval Destroyers", icon: <Shield className="h-4 w-4" /> },
        { name: "High-Altitude Defense", icon: <Radar className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Gerlandia",
      flag: "/images/flags/gerlandia.png",
      description:
        "A technological leader in precision engineering and defense systems. Specializes in armored warfare and strategic intelligence.",
      abilities: [
        { name: "Cutting-Edge Battle Tanks", icon: <Shield className="h-4 w-4" /> },
        { name: "AI-Driven Surveillance", icon: <Cpu className="h-4 w-4" /> },
        { name: "Advanced Anti-Aircraft Systems", icon: <Target className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Unitara",
      flag: "/images/flags/unitara.png",
      description:
        "A naval and intelligence powerhouse with a strong global presence. Masters of naval combat and elite special forces operations.",
      abilities: [
        { name: "Stealth Warships", icon: <Shield className="h-4 w-4" /> },
        { name: "Covert Intelligence Units", icon: <Radio className="h-4 w-4" /> },
        { name: "Rapid Deployment Forces", icon: <Zap className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Brasara",
      flag: "/images/flags/brasara.png",
      description:
        "A resource-rich powerhouse with expertise in jungle warfare and strategic resource management. Strong in unconventional warfare.",
      abilities: [
        { name: "Advanced Amphibious Units", icon: <Shield className="h-4 w-4" /> },
        { name: "Jungle Warfare Specialists", icon: <Target className="h-4 w-4" /> },
        { name: "Resource Extraction Control", icon: <Satellite className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Japira",
      flag: "/images/flags/japira.png",
      description:
        "A high-tech military force with world-class naval capabilities. Masters of robotic warfare and precision-based strikes.",
      abilities: [
        { name: "Autonomous Combat Robots", icon: <Cpu className="h-4 w-4" /> },
        { name: "High-Speed Naval Frigates", icon: <Shield className="h-4 w-4" /> },
        { name: "Advanced Missile Interceptors", icon: <Radar className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Franvia",
      flag: "/images/flags/franvia.png",
      description:
        "A strategic military power with elite special forces and precision strike capabilities. Known for rapid response operations.",
      abilities: [
        { name: "Next-Gen Fighter Jets", icon: <Plane className="h-4 w-4" /> },
        { name: "High-Precision Artillery", icon: <Target className="h-4 w-4" /> },
        { name: "Elite Special Operations Units", icon: <Zap className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Ukravata",
      flag: "/images/flags/ukravata.png",
      description:
        "A resilient nation with expertise in drone warfare and cyber operations. Masters of asymmetric tactics and technological adaptation.",
      abilities: [
        { name: "Advanced Drone Swarms", icon: <Plane className="h-4 w-4" /> },
        { name: "Cyber Defense Units", icon: <Cpu className="h-4 w-4" /> },
        { name: "Guerrilla Warfare Specialists", icon: <Target className="h-4 w-4" /> },
      ],
      tokenIcon: "/placeholder.svg?height=30&width=30",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black pt-16">
      {/* Header */}
      <Header />

      {/* Hero Section with new background image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image src="/images/hero-background.png" alt="World War 3 Ecosystem" fill className="object-cover" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Geometric lines overlay */}
          <div className="absolute inset-0 opacity-30 z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00ff4c" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Diagonal lines */}
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="#00ff4c" strokeWidth="0.5" opacity="0.2" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="#00ff4c" strokeWidth="0.5" opacity="0.2" />

              {/* Horizontal and vertical center lines */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff4c" strokeWidth="0.8" opacity="0.3" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff4c" strokeWidth="0.8" opacity="0.3" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-[#00ff4c]/5 mix-blend-overlay z-30"></div>

          {/* Animated scan line */}
          <div className="absolute inset-0 overflow-hidden z-40">
            <div className="h-full w-full animate-scan-line"></div>
          </div>
        </div>

        <div className="container relative z-50 px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 relative">
              <div className="absolute -inset-1 bg-[#00ff4c]/30 rounded-lg blur-lg"></div>
              <div className="relative bg-black/70 border border-[#00ff4c]/50 rounded-lg px-6 py-2">
                <span className="text-[#00ff4c] font-mono tracking-wider text-sm">BLOCKCHAIN WAR SIMULATION</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-none">
              Join the Battle for Global Supremacy with <br />
              <span className="text-[#00ff4c]">World War 3 Ecosystem</span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mb-8 leading-relaxed">
              The world is at war. Nations will rise, alliances will form, and only the strongest will emerge
              victorious. Powered by blockchain technology, every decision you make is backed by our core token,
              offering you true ownership, security, and rewards. Stake your claim, battle for dominance, and leverage
              the power of our token to shape your destiny. The inevitable war has begun—are you ready to invest in the
              future and secure your place in history?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-8 py-6 text-lg rounded-md border border-[#00ff4c]/50 shadow-[0_0_15px_rgba(0,255,76,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,76,0.7)]">
                Launching Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Pre-Sales Section - New */}
      <PreSalesSection />

      {/* About Us Section - Updated content */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/logo-ww3x-new-globe.png"
                  alt="WW3X Logo"
                  width={800}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#00ff4c] mb-6">Welcome to the World War 3 Ecosystem</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              In a world where nations clash for supremacy, your strategy will determine the outcome. The World War 3
              Ecosystem is a groundbreaking game that combines crypto, strategy, and global warfare. Choose your
              country, stake your resources, and engage in epic battles where every decision counts. Will you rise as a
              leader, dominate your enemies, and claim your place in history?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <FeatureCard
              number="01"
              title="Global Warfare"
              description="Choose from 10 powerful nations, stake your claim, and battle for global dominance in immersive war events."
            />
            <FeatureCard
              number="02"
              title="Strategic Alliances"
              description="Form alliances with other countries to strengthen your position and gain powerful advantages in battle."
            />
            <FeatureCard
              number="03"
              title="Earn Rewards"
              description="The more you contribute, the more you gain. Unlock exclusive rewards, rare assets, and powerful military units."
            />
            <FeatureCard
              number="04"
              title="Country Tokens"
              description="Each country offers unique assets, military units, and strategic advantages—choose wisely and plan your victories."
            />
          </div>

          {/* Learn more button - interactive */}
          <div className="flex justify-center">
            <Link href="/game-mechanics">
              <Button className="relative bg-black border border-[#00ff4c] text-[#00ff4c] px-8 py-2 rounded-sm overflow-hidden group">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-[#00ff4c]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10">Learn more about game mechanics</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(0,255,76,0.3)] transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section - Updated heading */}
      <section className="py-20 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Choose Your Nation & Shape Your Destiny</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your allegiance wisely. Each nation brings unique abilities and strategic advantages to the
              battlefield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </div>
      </section>

      {/* Token Section - Updated */}
      <TokenSection />

      {/* Roadmap Section - New */}
      <RoadmapSection />

      {/* FAQs Section - New */}
      <FAQsSection />

      {/* Community CTA */}
      <CommunityCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}

