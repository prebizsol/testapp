import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function GameMechanicsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-16">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20section%20BAckground.-3AKmkFUTInSUvyNJTp4TkxuND8QHFd.png"
            alt="Digital War Room"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              The War for Global Dominance Begins on the <span className="text-[#00ff4c]">Blockchain</span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              A next-gen strategy game powered by Solana where crypto fuels nations, battles, and the fight for digital
              supremacy.
            </p>

            <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-8 py-6 text-lg rounded-md border border-[#00ff4c]/50 shadow-[0_0_15px_rgba(0,255,76,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,76,0.7)]">
              Read Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* What is WW3X Section */}
      <section className="py-20 relative bg-black/90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
                <span className="relative z-10">What is WW3X?</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  WW3X is a competitive, blockchain-powered war strategy game where ten fictional nations battle for
                  global dominance through staking, alliances, warfare, and economy — all fueled by crypto.
                </p>
                <p>
                  Built on the ultra-fast Solana blockchain, WW3X integrates a multi-token economy that includes our
                  core token WW3X, ten Country Tokens, and reward-based Victory Tokens.
                </p>
                <p>
                  Each country is a fictional representation of real-world powers — like Yuniteda, Chimara, Rovska,
                  Japira, and more — each with its own token, strengths, and exclusive war assets like tanks, jets, and
                  submarines. Holding and staking WW3X gives players access to this ecosystem, including NFT assets,
                  token utilities, and governance rights in the evolving WW3X world.
                </p>
                <p>
                  Whether you're here for strategy, collectibles, or crypto economics — WW3X is a new frontier for
                  gamers and investors alike.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whatis%20WW3x%20Section-Ti9bz3bMW990lxhEXf1XoRs0Rgh5RL.png"
                  alt="10 Nation Flags"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Solana Section */}
      <section className="py-20 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
            <span className="relative z-10">Built for Speed. Powered by Solana.</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
          </h2>

          <div className="flex justify-center mb-10">
            <div className="relative w-48 h-48 animate-float-slow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana%20Coin-ULOZwW8LE3ccMkmdWCnYzymMuF6K7l.png"
                alt="Solana Coin"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <p>
              WW3X runs on the Solana blockchain — chosen for its unmatched speed, low transaction costs, and
              scalability. With over 50,000 transactions per second and near-instant finality, Solana ensures a seamless
              experience whether you're staking, battling, or trading assets.
            </p>
            <p>
              This powerful infrastructure allows WW3X to support a real-time, token-driven ecosystem without
              bottlenecks or gas fee limitations. Every battle, token swap, and NFT transaction is fast, secure, and
              on-chain — exactly how the future of gaming should be.
            </p>
          </div>
        </div>
      </section>

      {/* NFT Utility and Collectibles Section */}
      <section className="py-20 relative bg-black/90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
                <span className="relative z-10">Own the War. Shape the Outcome.</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  In WW3X, NFTs aren't just cosmetic — they're functional assets with real in-game power. Our collection
                  of 9,999 limited NFTs includes elite soldiers, war machines, strategic upgrades, and nation-exclusive
                  collectibles that can impact gameplay and strategy.
                </p>
                <p>
                  Each NFT comes with its own utility: from boosting your country's strength in battle to unlocking
                  exclusive missions, skins, and staking bonuses. With rarity tiers and a limited supply, your NFTs are
                  not only powerful — they're scarce and valuable on the open market.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NFT%20IMAGE-8wBGTNQWyVZwSeAjS0F9qj0Cbv3IeB.png"
                  alt="NFT War Assets"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative bg-black/90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">Meet the Team Behind WW3X</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              WW3X is brought to life by a talented and dedicated team from Curfluffle Studios, a group of professionals
              with deep expertise in blockchain technology, game development, and community building. The team's
              combined experience and commitment ensure that WW3X stands as a powerful fusion of gaming and
              decentralized finance, offering players an immersive, engaging, and secure experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Lead Developer & Architect</h3>
              <p className="text-gray-300 text-center">
                Experienced blockchain developer with a background in Solana smart contracts and scalable backend
                systems. Oversees the design of WW3X's smart contracts, ensuring smooth integration with the game
                engine.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Game Director</h3>
              <p className="text-gray-300 text-center">
                Veteran game designer with experience in FPS and strategy games. Balances fun gameplay with token
                mechanics, ensuring that WW3X excels as both a game and a crypto project.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Blockchain Engineer</h3>
              <p className="text-gray-300 text-center">
                Specialist in Solana development, focusing on SPL tokens and NFT integration. Ensures secure and
                efficient features like Country Token systems and Victory Token conversion.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Front-End and UX Designer</h3>
              <p className="text-gray-300 text-center">
                Designs the user interface and crypto wallet integration for seamless in-game interactions. Focuses on
                making blockchain aspects like staking and voting user-friendly.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Community & Marketing Lead</h3>
              <p className="text-gray-300 text-center">
                Manages WW3X's social media presence, engages with the community, and handles marketing campaigns.
                Coordinates influencer partnerships and exchange listings to grow the user base.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-black/60 border border-[#00ff4c]/20 p-6 rounded-md hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-[#00ff4c]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00ff4c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-[#00ff4c] text-xl font-bold mb-2 text-center">Advisors</h3>
              <p className="text-gray-300 text-center">
                Blockchain Gaming Economist Advisor: Helps fine-tune the tokenomics by analyzing successful models like
                Axie Infinity. Legal Advisor: Ensures WW3X navigates the regulatory environment and handles legal
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              The Blockchain Battlefield is <span className="text-[#00ff4c]">Coming Soon</span>
            </h2>

            <p className="text-gray-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              The WW3X ecosystem is almost here. Powered by Solana, fueled by tokens, and built for global domination —
              get ready to join the war.
            </p>

            <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-10 py-6 text-xl rounded-md border border-[#00ff4c]/50 shadow-[0_0_20px_rgba(0,255,76,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,76,0.8)]">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

