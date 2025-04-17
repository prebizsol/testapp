import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Coins, User, Shield, Cloud, Users, Cog } from "lucide-react"
import TokenStakingSection from "@/components/stake-section"

export default function GerlandiaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-16">
      {/* Header */}
      <Header />

      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image
            src="/images/backgrounds/japira-hero.jpeg" // Using same background for now
            alt="Gerlandia Space Background"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20 z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00ff4c" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated scan line */}
          <div className="absolute inset-0 overflow-hidden z-30">
            <div className="h-full w-full animate-scan-line"></div>
          </div>
        </div>

        <div className="container relative z-40 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Flag */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#00ff4c]/50 shadow-[0_0_30px_rgba(0,255,76,0.3)]">
                <Image src="/images/flags/gerlandia.png" alt="Gerlandia Flag" fill className="object-cover" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gerlandia – Precision. Process. Perfection.
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Gerlandia is where engineering meets strategy. Back a country that masters structure, adapts with logic,
              and strikes with calculated impact.
            </p>
          </div>
        </div>
      </section>

      {/* Features of Country Section */}
      <section className="py-16 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Features of Country</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Country Token
                </h3>
              </div>
              <p className="text-[#00ff4c] font-mono text-xl">GRD</p>
            </div>

            {/* Card 2 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Country President
                </h3>
              </div>
              <p className="text-gray-300">Erik Voss</p>
            </div>

            {/* Card 3 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Army General
                </h3>
              </div>
              <p className="text-gray-300">Lotte Steiner</p>
            </div>

            {/* Card 4 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Climate Conditions
                </h3>
              </div>
              <p className="text-gray-300">Mild, temperate</p>
            </div>

            {/* Card 5 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Total Population
                </h3>
              </div>
              <p className="text-gray-300">83 million</p>
            </div>

            {/* Card 6 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Cog className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Strategic Focus
                </h3>
              </div>
              <p className="text-gray-300">Precision engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/backgrounds/backstory-section.jpeg')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Backstory of Gerlandia</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-[#00ff4c]/20 p-8 rounded-md relative">
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00ff4c] rounded-tl-md"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ff4c] rounded-br-md"></div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Gerlandia is a federal republic that rose from the ashes of a devastating mid-century war, reinventing
                itself as an economic powerhouse and a pillar of stability in its continent. After a post-war period of
                division, Gerlandia achieved reunification, blending the industrial might of its western regions with
                the resilience of the east.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                It has since been a driving force behind continental integration, advocating for diplomacy and economic
                cooperation. Historically cautious in military affairs due to its past, Gerlandia focused on economic
                growth and became renowned for its engineering and manufacturing excellence.
              </p>

              <p className="text-gray-300 leading-relaxed">
                In the World War 3 ecosystem, as old alliances falter, Gerlandia finds itself rearming and taking more
                responsibility for defense, all while trying to uphold the cooperative values that guided its
                prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nation Profile Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/backgrounds/background-section.jpeg')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Nation Profile</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
          </div>

          <div className="bg-black/80 border-2 border-[#00ff4c]/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,76,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left side - Images */}
              <div className="lg:col-span-5 bg-black/60 p-6">
                {/* Large image (Map) - Square */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-md border border-[#00ff4c]/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gerlandia%20Map-BcQknEwxHfEe9KxukUR6dPQxjLwwyy.png"
                    alt="Map of Gerlandia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
                </div>

                {/* Two smaller images - Square */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Flag */}
                  <div className="relative aspect-square overflow-hidden rounded-md border border-[#00ff4c]/30">
                    <Image src="/images/flags/gerlandia.png" alt="Flag of Gerlandia" fill className="object-cover" />
                  </div>

                  {/* Soldier */}
                  <div className="relative aspect-square overflow-hidden rounded-md border border-[#00ff4c]/30">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gerlandia%20RObot-rbFrAvwn0FoKwsDVfIIyzkhlOAi4yZ.png"
                      alt="Gerlandia Robot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content with new text */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-center bg-[#0a1a15]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Economic Strengths</h3>
                    <p className="text-gray-300 text-sm">
                      Gerlandia is an export-driven industrial powerhouse, known for its precision manufacturing and
                      engineering. It excels in automotive, machinery, and industrial equipment. The economy benefits
                      from a skilled workforce, strong institutions, and a trade surplus. Its companies are global
                      leaders in quality, efficiency, and sustainability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Economic Weaknesses</h3>
                    <p className="text-gray-300 text-sm">
                      Gerlandia's economy is heavily reliant on exports, making it sensitive to global demand.
                      Demographic decline and a shortage of skilled labor pose long-term risks. Dependence on foreign
                      energy has raised concerns, and bureaucratic red tape can slow innovation. The domestic service
                      sector remains underdeveloped compared to its industrial strength.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Technological Strengths</h3>
                    <p className="text-gray-300 text-sm">
                      Gerlandia leads in industrial tech, automation, and engineering excellence. It invests in green
                      energy, smart manufacturing, and scientific R&D. The country has strong universities and research
                      centers that support innovation in automotive, industrial AI, and advanced materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Technological Weaknesses</h3>
                    <p className="text-gray-300 text-sm">
                      The country has been slow in digital transformation and lags in consumer tech and platform
                      development. There's limited risk-taking in startups, and the tech sector often lacks agility.
                      Overregulation and data protection laws can restrict experimentation, making it harder to compete
                      in fast-moving digital fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Capabilities Section */}
      <section className="py-20 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Military Capabilities</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <h3 className="text-[#00ff4c] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Precision Battle Tanks
              </h3>
              <p className="text-gray-400">
                Gerlandia's armored forces feature the most technologically advanced tanks in the world. These vehicles
                combine superior firepower, protection, and mobility with cutting-edge targeting systems for unmatched
                battlefield precision.
              </p>
            </div>

            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <h3 className="text-[#00ff4c] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Advanced Air Defense
              </h3>
              <p className="text-gray-400">
                Gerlandia has developed one of the world's most sophisticated air defense networks, capable of detecting
                and neutralizing aerial threats at extreme ranges. These systems integrate radar, missile, and
                electronic warfare capabilities into a seamless protective shield.
              </p>
            </div>

            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <h3 className="text-[#00ff4c] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Mechanized Infantry
              </h3>
              <p className="text-gray-400">
                Gerlandia's ground forces excel in combined arms warfare, with highly trained mechanized infantry
                equipped with next-generation combat vehicles. These units blend mobility, firepower, and tactical
                flexibility for maximum battlefield effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                  Invest in <span className="text-[#00ff4c]">GRD</span> Token
                </h2>

                <p className="text-gray-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                  Your gateway to the World War 3 Ecosystem. Purchase WW3X tokens now to gain access to Gerlandia's
                  precision engineering and tactical excellence. Support this technological powerhouse with its advanced
                  tanks, air defense systems, and mechanized infantry. As Gerlandia rises as a strategic force on the
                  global battlefield, so will the value of your investment.
                </p>

                <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-10 py-6 text-xl rounded-md border border-[#00ff4c]/50 shadow-[0_0_20px_rgba(0,255,76,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,76,0.8)]">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Staking Section */}
      <TokenStakingSection countryCode="GRD" />

      {/* Footer */}
      <Footer />
    </main>
  )
}

