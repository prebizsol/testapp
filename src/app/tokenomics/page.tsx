import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TokenomicsPage() {
  // Data for the WW3X token distribution pie chart
  const distributionData = [
    { name: "Rewards", value: 40, color: "#00ff4c" },
    { name: "Public Sale", value: 20, color: "#00cc3d" },
    { name: "Team", value: 15, color: "#009c2f" },
    { name: "Treasury", value: 15, color: "#006b20" },
    { name: "Marketing", value: 10, color: "#004514" },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black pt-16">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20section%20for%20tokenomics-vWq9iWxrMV6dUAuwKuCoFidwuCAPMn.png"
            alt="Tokenomics Hero"
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
              The Economic Engine Behind the <span className="text-[#00ff4c]">War</span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore the decentralized token ecosystem powering WW3X — a layered war economy built on Solana, driven by
              utility, scarcity, and strategic value.
            </p>
          </div>
        </div>
      </section>

      {/* Core Token Section */}
      <section className="py-20 relative bg-black/90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
                <span className="relative z-10">WW3X: The Backbone of the War Economy</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  WW3X is the primary utility and governance token of the WW3X ecosystem. It fuels every layer of the
                  game — from staking and governance to marketplace access and reward distribution — and is backed by a
                  fixed supply model, ensuring long-term scarcity and economic sustainability.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Total Supply</h3>
                    <p>1,000,000,000 (fixed, no future minting)</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Blockchain</h3>
                    <p>Launched on Solana for high-speed and low-fee transactions</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Utility</h3>
                    <p>Required to mint Country Tokens and participate in governance</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Distribution</h3>
                    <p>40% Rewards, 20% Public Sale, 15% Team, 15% Treasury, 10% Marketing</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Liquidity</h3>
                    <p>Paired with SOL on Raydium and other DEXs for trading and stability</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Burn Mechanisms</h3>
                    <p>Through governance buybacks, marketplace fees, and Victory Token conversions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-8 rounded-lg overflow-hidden border-2 border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
                <Image src="/images/core-token-new-ww3e.png" alt="WW3X Core Token" fill className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Token Section */}
      <section className="py-20 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Country%20Token-HOXP0bsemKpLiNmdPDJ8ItNHmVj3xY.png"
                  alt="Country Tokens"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
                <span className="relative z-10">Country Tokens: Your Loyalty, Your Power</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Country Tokens represent a player's active allegiance to one of ten fictional nations. Minted through
                  WW3X staking, they serve as the core currency for battles, country-specific upgrades, and strategy
                  alignment. Their supply adjusts based on performance in war.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Supply Model</h3>
                    <p>Dynamic supply per country; backed 1:1 by staked WW3X</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Issuance</h3>
                    <p>Only minted when WW3X is staked to a specific country pool</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Use Cases</h3>
                    <p>Battle entry, purchasing national war assets, voting in sub-governance</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Burn Mechanism</h3>
                    <p>Supply decreases on losses via smart contract burn functions</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Strategic Depth</h3>
                    <p>Country Token value adjusts after every battle based on win/loss</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Exit Strategy</h3>
                    <p>Burn Country Tokens to withdraw staked WW3X when not in combat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Victory Token Section */}
      <section className="py-20 relative bg-black/90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
                <span className="relative z-10">Victory Tokens: Win Battles. Earn Rewards.</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Victory Tokens are on-chain proof of performance, awarded to winners of battles. While they have no
                  capped supply, their only purpose is conversion — into WW3X — under a controlled system designed to
                  protect the economy from inflation.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Supply Model</h3>
                    <p>Unlimited; minted as needed upon player wins</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Conversion</h3>
                    <p>Redeemable for WW3X at a fixed or dynamic rate (e.g., 100 VT = 1 WW3X)</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Burn Mechanism</h3>
                    <p>Burned upon redemption, reducing overall VT supply</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Redemption Limits</h3>
                    <p>Daily/seasonal caps may apply to throttle WW3X emissions</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Strategic Use</h3>
                    <p>Optional to hold for value timing; possible loss in high-stakes battles</p>
                  </div>

                  <div className="bg-black/60 border border-[#00ff4c]/30 p-4 rounded-md">
                    <h3 className="text-[#00ff4c] font-bold text-lg mb-1">Not Tradable</h3>
                    <p>Not designed for open market trade, only for internal utility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#00ff4c]/30 shadow-[0_0_30px_rgba(0,255,76,0.2)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Victory%20TOken-5D6PMy8MeE8VHnvcj4YxGoc2v0VpWH.png"
                  alt="Victory Tokens"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#00ff4c]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Collection Section */}
      <section className="py-20 relative bg-black/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">WW3X NFT Collection Breakdown</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
            </h2>
            <p className="text-[#00ff4c] text-xl mb-8">Our NFT Collection Will be Revealed Soon</p>
            <p className="text-gray-300 text-xl">Total: 9,999 NFTs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* NFT Card 1 */}
            <NFTCard
              title="Soldiers (Common)"
              quantity="4,499"
              utility="Basic playable units with small in-game buffs"
              variants="Infantry types, nationality-based skins, basic gear"
              useCases="Entry-level combat roles, staking bonuses, faction XP boosts"
            />

            {/* NFT Card 2 */}
            <NFTCard
              title="Commanders (Uncommon)"
              quantity="2,500"
              utility="Mid-tier buffs to battle strategy, cooldowns, or earning rate"
              variants="Each country has unique Commander class skins"
              useCases="Can lead missions, give passive bonuses to armies"
            />

            {/* NFT Card 3 */}
            <NFTCard
              title="Elite Units (Rare)"
              quantity="1,500"
              utility="High-impact NFTs with active and passive combat bonuses"
              variants="Snipers, Spies, Black Ops, Medics"
              useCases="Boost victory odds, provide unique event perks, anti-debuff resistance"
            />

            {/* NFT Card 4 */}
            <NFTCard
              title="Strategists (Epic)"
              quantity="1,000"
              utility="Governance-related utility, alliance buffs, map control"
              variants="Can influence territory advantages or economy flow"
              useCases="Game-affecting mechanics in tournaments or alliance battles"
            />

            {/* NFT Card 5 */}
            <NFTCard
              title="War Machines (Legendary)"
              quantity="500"
              utility="Country-exclusive vehicles like tanks, warships, air jets, submarines"
              variants="Jet Fighters (Unitara), Tanks (Rovska), Submarines (Japira), etc."
              useCases="Game-changing advantage in high-stakes battles, major NFT utility"
            />

            {/* NFT Card 6 */}
            <NFTCard
              title="Founders / Mythic NFTs (Ultra-Rare)"
              quantity="99"
              utility="Early supporter recognition with lifetime perks"
              variants="Highly detailed, animated or holographic 1-of-1 style collectibles"
              useCases="Access to all events, boosted staking, airdrops, DAO privileges"
            />
          </div>
        </div>
      </section>

      {/* Whitepaper CTA Section */}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to <span className="text-[#00ff4c]">Dive Deeper</span>?
            </h2>

            <p className="text-gray-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              For a comprehensive breakdown of our token economics, game mechanics, and long-term vision, check out our
              detailed whitepaper. It covers everything from tokenomics to governance and the future roadmap of WW3X.
            </p>

            <Button className="bg-[#00ff4c] hover:bg-[#00ff4c]/80 text-black font-bold px-10 py-6 text-xl rounded-md border border-[#00ff4c]/50 shadow-[0_0_20px_rgba(0,255,76,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,76,0.8)]">
              Read Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

// NFT Card Component
function NFTCard({ title, quantity, utility, variants, useCases }) {
  // Determine rarity color based on title
  const getRarityColor = (title) => {
    if (title.includes("Common")) return "#00ff4c"
    if (title.includes("Uncommon")) return "#00ccff"
    if (title.includes("Rare")) return "#9966ff"
    if (title.includes("Epic")) return "#ff66cc"
    if (title.includes("Legendary")) return "#ffcc00"
    if (title.includes("Ultra-Rare")) return "#ff3300"
    return "#00ff4c"
  }

  const rarityColor = getRarityColor(title)

  return (
    <Card className="bg-black/60 border border-[#00ff4c]/20 hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 overflow-hidden">
      <div className="h-2" style={{ backgroundColor: rarityColor }}></div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: rarityColor }}>
          {title}
        </h3>
        <div className="mb-4">
          <span className="text-white font-bold">Quantity:</span>
          <span className="text-gray-300 ml-2">{quantity}</span>
        </div>
        <div className="space-y-3 text-gray-300">
          <div>
            <h4 className="text-white font-semibold text-sm">UTILITY</h4>
            <p className="text-sm">{utility}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">VARIANTS</h4>
            <p className="text-sm">{variants}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">USE CASES</h4>
            <p className="text-sm">{useCases}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

