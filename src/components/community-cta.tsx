import { Button } from "@/components/ui/button"
import { DiscIcon as Discord, Twitter, TextIcon as Telegram } from "lucide-react"

export default function CommunityCTA() {
  return (
    <section className="py-16 relative bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#00ff4c]/10 to-transparent"></div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Join Our <span className="text-[#00ff4c]">Community</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Connect with thousands of strategists, form alliances, and stay updated on the latest war developments. Your
          journey to global domination begins with a strong network.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-6 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(88,101,242,0.5)]">
            <Discord className="mr-2 h-5 w-5" />
            Join Discord
          </Button>

          <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-6 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(29,161,242,0.5)]">
            <Twitter className="mr-2 h-5 w-5" />
            Follow on Twitter
          </Button>

          <Button className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white px-6 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,136,204,0.5)]">
            <Telegram className="mr-2 h-5 w-5" />
            Join Telegram
          </Button>
        </div>
      </div>
    </section>
  )
}

