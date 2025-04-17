import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Coins, User, Shield, Cloud, Users, Cpu } from "lucide-react"
import TokenStakingSection from "@/components/stake-section"

export default function ChimaraPage() {
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
            alt="Chimara Space Background"
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
                <Image src="/images/flags/chimara.png" alt="Chimara Flag" fill className="object-cover" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Chimara – Discipline. Power. Unseen control.
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Chimara's strength lies in precision, numbers, and digital dominance. Back a nation that blends ancient
              strategy with cutting-edge cyber warfare.
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
              <p className="text-[#00ff4c] font-mono text-xl">CHM</p>
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
              <p className="text-gray-300">Liang Wu</p>
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
              <p className="text-gray-300">Shen Zhao</p>
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
              <p className="text-gray-300">Varied, subtropical</p>
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
              <p className="text-gray-300">1.4 billion</p>
            </div>

            {/* Card 6 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-5 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="bg-[#00ff4c]/10 p-2 rounded-md mr-3 text-[#00ff4c] group-hover:bg-[#00ff4c]/20 transition-colors">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00ff4c] transition-colors">
                  Strategic Focus
                </h3>
              </div>
              <p className="text-gray-300">Cyber warfare</p>
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
              <span className="relative z-10">Backstory of Chimara</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-[#00ff4c]/20 p-8 rounded-md relative">
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00ff4c] rounded-tl-md"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ff4c] rounded-br-md"></div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Chimara transformed from an ancient empire into a revolutionary people's republic in the mid-20th
                century. After decades of turmoil, it initiated market reforms that propelled it from a secluded
                agrarian land into the factory of the world.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Rapid industrialization and a strategic vision for technological self-reliance turned Chimara into a
                peer competitor on the world stage. It has pursued a bold expansion of influence – building trade
                networks, modernizing its military, and asserting claims in nearby seas – all under a single-party state
                that preaches national rejuvenation.
              </p>

              <p className="text-gray-300 leading-relaxed">
                In the World War 3 scenario, Chimara positions itself as a new superpower, determined to reshape global
                norms to fit its vision, while addressing historical grievances of past "humiliations" by foreign
                powers.
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chimara%20-%20Map-fGqsRr4wEWLNsOses2IfLSZ8WsWRJU.png"
                    alt="Map of Chimara"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
                </div>

                {/* Two smaller images - Square */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Flag */}
                  <div className="relative aspect-square overflow-hidden rounded-md border border-[#00ff4c]/30">
                    <Image src="/images/flags/chimara.png" alt="Flag of Chimara" fill className="object-cover" />
                  </div>

                  {/* Soldier */}
                  <div className="relative aspect-square overflow-hidden rounded-md border border-[#00ff4c]/30">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chimara%20-%20Robot-Rq2htdHVT1TEtkvW8ETnMgBV9vCxXb.png"
                      alt="Chimara Robot"
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
                      Chimara has the world's second-largest economy, driven by massive industrial output and global
                      exports. It has built strong infrastructure, lifted millions out of poverty, and established
                      dominance in manufacturing, e-commerce, and green technology.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Economic Weaknesses</h3>
                    <p className="text-gray-300 text-sm">
                      Chimara's economy faces rising debt, real estate risks, and demographic decline. Its export
                      reliance makes it sensitive to trade tensions. Regulatory unpredictability and overcentralization
                      can stifle private sector flexibility and innovation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Technological Strengths</h3>
                    <p className="text-gray-300 text-sm">
                      Chimara leads in 5G, AI, renewable energy, and digital payments. It has rapidly developed its
                      semiconductor and electric vehicle industries. Its large domestic market supports fast tech
                      adoption and state-led R&D pushes innovation in key sectors.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff4c] mb-2">Technological Weaknesses</h3>
                    <p className="text-gray-300 text-sm">
                      Dependence on imported high-end chips and software remains a challenge. Innovation is sometimes
                      limited by state control and censorship. While fast in implementation, foundational tech research
                      still lags behind global leaders.
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
                Advanced Cyber Warfare
              </h3>
              <p className="text-gray-400">
                Chimara's digital army is unmatched in its ability to infiltrate enemy systems, disrupt communications,
                and gather intelligence. These elite cyber units can disable critical infrastructure and military
                networks with surgical precision.
              </p>
            </div>

            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <h3 className="text-[#00ff4c] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Mass Infantry Divisions
              </h3>
              <p className="text-gray-400">
                With the world's largest standing army, Chimara can deploy overwhelming numbers of well-trained
                soldiers. These disciplined forces excel in coordinated operations and can sustain prolonged campaigns
                through superior logistics.
              </p>
            </div>

            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 group">
              <h3 className="text-[#00ff4c] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Drone Swarm Technology
              </h3>
              <p className="text-gray-400">
                Chimara has pioneered the use of coordinated drone swarms that can overwhelm enemy defenses through
                sheer numbers. These autonomous systems communicate with each other to adapt tactics in real-time,
                making them nearly impossible to counter.
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
                  Invest in <span className="text-[#00ff4c]">CHM</span> Token
                </h2>

                <p className="text-gray-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                  Your gateway to the World War 3 Ecosystem. Purchase WW3X tokens now to gain access to Chimara's
                  unmatched cyber capabilities and massive military force. Support this technological giant with its
                  elite digital army, disciplined infantry, and advanced drone swarms. As Chimara rises to reshape the
                  global order, so will the value of your strategic investment.
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
      <TokenStakingSection countryCode="CHM" />

      {/* Footer */}
      <Footer />
    </main>
  )
}

