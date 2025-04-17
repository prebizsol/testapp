"use client"

import Image from "next/image"

export default function Marquee() {
  // Array of partner logos
  const partnerLogos = [
    { src: "/images/partners/raydium-logo.png", alt: "Raydium", width: 180 },
    { src: "/images/partners/coinmarketcap-logo.png", alt: "CoinMarketCap", width: 200 },
    { src: "/images/partners/binance-logo.png", alt: "Binance", width: 180 },
    { src: "/images/partners/kraken-logo.png", alt: "Kraken", width: 180 },
    { src: "/images/partners/kucoin-logo.png", alt: "KuCoin", width: 180 },
    { src: "/images/partners/solana-logo.png", alt: "Solana", width: 200 },
    { src: "/images/partners/bitfinex-logo.png", alt: "Bitfinex", width: 200 },
  ]

  // Duplicate the array to create a seamless loop
  const allLogos = [...partnerLogos, ...partnerLogos]

  return (
    <div className="bg-black border-y border-[#00ff4c]/20 py-6 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {allLogos.map((logo, i) => (
            <div key={i} className="mx-12 inline-block">
              <div className="relative h-12" style={{ width: `${logo.width}px` }}>
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

