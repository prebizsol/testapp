import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
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
            Terms & <span className="text-[#00ff4c]">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-10 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/60 border border-[#00ff4c]/20 p-8 rounded-md">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Effective Date:</strong> March 25, 2025
            </p>

            <p className="text-gray-300 mb-6">
              These Terms and Conditions ("Terms") govern your access to and use of the WW3X website (the "Site"),
              including any content, functionality, and services offered on or through the Site (collectively, the
              "Services"). By accessing or using the Site, you agree to comply with and be bound by these Terms and all
              applicable laws. If you do not agree to these Terms, you must not access or use the Site.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing or using the WW3X Site, you agree to comply with these Terms and any future amendments or
              modifications. We reserve the right to change, modify, or revise these Terms at any time. The latest
              version of these Terms will be posted on this page, and your continued use of the Site after such changes
              indicates your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">2. Eligibility</h2>
            <p className="text-gray-300 mb-6">
              You must be at least 18 years old or the legal age of majority in your jurisdiction to use the Site and
              participate in the WW3X ecosystem. By using the Site, you represent and warrant that you meet the age
              requirement. If you are under the legal age, you are not permitted to use the Site or Services.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">3. Use of the Site</h2>
            <p className="text-gray-300 mb-6">
              The WW3X Site and its Services are for your personal, non-commercial use only. You may not use the Site
              for any unlawful purpose, nor may you engage in any activity that disrupts or interferes with the
              functioning of the Site or the Services. You agree not to:
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>Attempt to access or modify any unauthorized part of the Site or its underlying systems.</li>
              <li>Use the Site in a way that violates any laws, regulations, or legal rights.</li>
              <li>Use the Site to engage in fraudulent, deceptive, or harmful activities.</li>
              <li>Violate the intellectual property rights of WW3X or any third parties.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">4. Registration and Account</h2>
            <p className="text-gray-300 mb-6">
              To access certain features or Services, you may be required to register an account on the WW3X Site. You
              agree to provide accurate, current, and complete information during the registration process and to update
              your information to maintain its accuracy. You are responsible for safeguarding your account information
              and for all activities that occur under your account.
            </p>
            <p className="text-gray-300 mb-6">
              If you believe your account has been compromised or your login credentials are being used without
              authorization, you must notify us immediately. WW3X is not responsible for any losses or damages arising
              from unauthorized access to your account.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">5. Tokens and Cryptocurrency</h2>
            <p className="text-gray-300 mb-6">
              WW3X operates on the Solana blockchain, and certain tokens, including WW3X, Country Tokens, and Victory
              Tokens, are used within the WW3X ecosystem. The use of these tokens is governed by the tokenomics
              described in the whitepaper and the Services provided through the Site.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Purchasing Tokens:</strong> You may be able to purchase tokens through
              supported platforms, exchanges, or liquidity pools. All transactions involving cryptocurrency are final
              and non-refundable.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Token Usage:</strong> Tokens can be used within the WW3X ecosystem for
              staking, participating in battles, purchasing NFTs, or interacting with other in-game mechanics.
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Token Risk:</strong> You acknowledge that cryptocurrencies and digital
              tokens are subject to market volatility. The value of tokens can fluctuate and may involve significant
              risk. You are responsible for understanding the risks involved before participating.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">6. NFTs and In-Game Assets</h2>
            <p className="text-gray-300 mb-6">
              WW3X offers non-fungible tokens (NFTs) as in-game assets, such as soldier avatars or special items. These
              NFTs may grant certain benefits, such as participation in battles or special rewards.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Ownership:</strong> By acquiring an NFT, you obtain ownership of the
              associated digital asset. Ownership of NFTs does not confer any ownership or rights over WW3X intellectual
              property.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Trading:</strong> NFTs may be bought, sold, or traded in the marketplace,
              subject to the terms and conditions of the platform. All transactions are final, and we do not guarantee
              any future value of NFTs.
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Burning and Recycling:</strong> Certain NFTs or in-game assets may be
              subject to burning or recycling as part of the game's mechanics, and these assets may lose value or
              utility over time.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">7. Fees and Payments</h2>
            <p className="text-gray-300 mb-6">
              You may incur transaction fees when using the WW3X Services. These fees are typically paid in WW3X tokens
              or other accepted cryptocurrencies. The fee structure will be clearly outlined in the specific services or
              transactions you engage in.
            </p>
            <p className="text-gray-300 mb-6">
              All payments are processed through the Solana blockchain or third-party platforms, and WW3X is not
              responsible for any issues with third-party payment providers, including delays, errors, or failures to
              process payments.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">8. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              All content on the WW3X Site, including but not limited to text, graphics, logos, images, and software, is
              the property of WW3X or its licensors and is protected by copyright, trademark, and other intellectual
              property laws. You are granted a limited, non-exclusive, non-transferable license to use the Site for
              personal, non-commercial purposes.
            </p>
            <p className="text-gray-300 mb-6">
              You may not copy, modify, distribute, or create derivative works of any part of the Site or its content
              without explicit permission from WW3X.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">9. Privacy</h2>
            <p className="text-gray-300 mb-6">
              Your use of the Site is also governed by our Privacy Policy, which outlines how we collect, use, and
              protect your personal information. By using the Site, you consent to the practices described in the
              Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">10. Third-Party Links</h2>
            <p className="text-gray-300 mb-6">
              The WW3X Site may contain links to third-party websites or services. These links are provided for
              convenience, and WW3X does not endorse or control the content of these third-party sites. You agree that
              WW3X is not responsible for any damages or losses arising from your use of these third-party services or
              websites.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">11. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              To the fullest extent permitted by law, WW3X and its affiliates are not liable for any indirect,
              incidental, special, or consequential damages, or any loss of profits, revenue, data, or use, arising from
              your use or inability to use the Site or Services, even if WW3X has been advised of the possibility of
              such damages.
            </p>
            <p className="text-gray-300 mb-6">
              In no event will WW3X's total liability exceed the amount you have paid to WW3X in the 12 months preceding
              the event giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">12. Indemnification</h2>
            <p className="text-gray-300 mb-6">
              You agree to indemnify, defend, and hold harmless WW3X, its affiliates, officers, directors, employees,
              and agents from any claims, liabilities, damages, losses, or expenses arising from your use of the Site,
              violation of these Terms, or any infringement of any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">13. Termination</h2>
            <p className="text-gray-300 mb-6">
              WW3X reserves the right to suspend or terminate your access to the Site and Services at any time, for any
              reason, including but not limited to violations of these Terms or suspected fraudulent activity. Upon
              termination, you must immediately cease using the Site, and your rights to access the Services will be
              revoked.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">14. Governing Law</h2>
            <p className="text-gray-300 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the United States. Any
              disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction
              of the courts located in the United States.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">15. Dispute Resolution</h2>
            <p className="text-gray-300 mb-6">
              Any disputes between you and WW3X shall be resolved through binding arbitration in accordance with the
              rules of the American Arbitration Association. You agree to waive your right to a trial by jury and class
              action in connection with any legal dispute.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">16. Miscellaneous</h2>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Force Majeure:</strong> WW3X shall not be held liable for any failure or
              delay in performance under these Terms due to events beyond its reasonable control, such as natural
              disasters, government actions, or technical failures.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Severability:</strong> If any provision of these Terms is found to be
              invalid or unenforceable, the remainder of the Terms will remain in full effect.
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Entire Agreement:</strong> These Terms constitute the entire agreement
              between you and WW3X regarding your use of the Site and Services.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

