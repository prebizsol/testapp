"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

export default function FAQsSection() {
  const faqs: FAQ[] = [
    {
      question: "What is WW3X Blockchain?",
      answer:
        "WW3X Blockchain is a revolutionary war simulation game built on blockchain technology. It allows players to choose countries, stake tokens, form alliances, and engage in strategic warfare while earning rewards through various in-game activities.",
    },
    {
      question: "How do I get started with WW3X?",
      answer:
        "To get started, you'll need to connect your wallet, purchase WW3X tokens during our pre-sale or public launch, and then choose a country to represent. From there, you can stake your tokens, build your military, and begin forming alliances with other players.",
    },
    {
      question: "What are Country Tokens?",
      answer:
        "Country Tokens represent the 10 unique nations in the WW3X ecosystem. Each country has its own token with specific abilities, strengths, and strategic advantages. These tokens are used for staking, purchasing military units, and influencing battles.",
    },
    {
      question: "How does the staking mechanism work?",
      answer:
        "Staking in WW3X allows you to commit your tokens to support your chosen country. The more tokens staked, the stronger your country becomes. Staked tokens earn rewards based on battle outcomes, strategic decisions, and overall country performance.",
    },
    {
      question: "Are the smart contracts audited?",
      answer:
        "Yes, all WW3X smart contracts undergo rigorous security audits by leading blockchain security firms. We prioritize the safety of our players' assets and ensure that all game mechanics operate transparently on the blockchain.",
    },
    {
      question: "What makes WW3X different from other blockchain games?",
      answer:
        "WW3X combines strategic war simulation with blockchain economics in a unique way. Our game features real-time battles, alliance formation, country-specific abilities, and a complex economic system where every decision impacts the game world. The integration of NFTs, multiple token types, and our deflationary tokenomics creates a sustainable ecosystem with long-term growth potential.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ff4c] rounded-full shadow-[0_0_10px_rgba(0,255,76,0.7)]"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the WW3X Blockchain ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/60 border border-[#00ff4c]/20 rounded-md">
              <div
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-[#00ff4c]/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-white font-semibold hover:text-[#00ff4c] transition-colors">{faq.question}</h3>
                <ChevronDown
                  className={`text-[#00ff4c] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>

              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-400 border-t border-[#00ff4c]/10 animate-fadeIn">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

