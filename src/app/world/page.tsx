import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Country {
  name: string
  slug: string
  flag: string
  description: string
}

export default function WorldPage() {
  const countries: Country[] = [
    {
      name: "Yuniteda",
      slug: "yuniteda",
      flag: "/images/flags/yuniteda.png",
      description: "A global superpower with advanced military technology and economic dominance.",
    },
    {
      name: "Chimara",
      slug: "chimara",
      flag: "/images/flags/chimara.png",
      description: "A technological powerhouse with a massive industrial base and strategic resource control.",
    },
    {
      name: "Rovska",
      slug: "rovska",
      flag: "/images/flags/rovska.png",
      description: "A military giant with heavily armored forces and strategic nuclear capabilities.",
    },
    {
      name: "Indara",
      slug: "indara",
      flag: "/images/flags/indara.png",
      description: "A rapidly growing military power with a balance of defense and offense.",
    },
    {
      name: "Gerlandia",
      slug: "gerlandia",
      flag: "/images/flags/gerlandia.png",
      description: "A technological leader in precision engineering and defense systems.",
    },
    {
      name: "Unitara",
      slug: "unitara",
      flag: "/images/flags/unitara.png",
      description: "A naval and intelligence powerhouse with a strong global presence.",
    },
    {
      name: "Brasara",
      slug: "brasara",
      flag: "/images/flags/brasara.png",
      description: "A resource-rich powerhouse with expertise in jungle warfare and strategic resource management.",
    },
    {
      name: "Japira",
      slug: "japira",
      flag: "/images/flags/japira-flag.jpeg",
      description: "A high-tech military force with world-class naval capabilities and robotic warfare.",
    },
    {
      name: "Franvia",
      slug: "franvia",
      flag: "/images/flags/franvia.png",
      description: "A strategic military power with elite special forces and precision strike capabilities.",
    },
    {
      name: "Ukravata",
      slug: "ukravata",
      flag: "/images/flags/ukravata.png",
      description:
        "A resilient nation with expertise in drone warfare and cyber operations. Masters of asymmetric tactics and technological adaptation.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black pt-16">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

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
        </div>

        <div className="container relative z-40 px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            The World of <span className="text-[#00ff4c]">WW3X</span>
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore the 10 major powers competing for global dominance in the World War 3 Ecosystem. Each nation brings
            unique abilities, technologies, and strategic advantages to the battlefield.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Link key={country.slug} href={`/world/${country.slug}`}>
                <div className="bg-black/60 border border-[#00ff4c]/20 rounded-md overflow-hidden hover:border-[#00ff4c]/50 hover:shadow-[0_0_15px_rgba(0,255,76,0.2)] transition-all duration-300 h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={country.flag || "/placeholder.svg"}
                      alt={`${country.name} Flag`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00ff4c] transition-colors">
                      {country.name}
                    </h2>
                    <p className="text-gray-400">{country.description}</p>
                    <div className="mt-4 text-[#00ff4c] font-semibold flex items-center">
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

