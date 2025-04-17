import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-[#00ff4c]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-10 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/60 border border-[#00ff4c]/20 p-8 rounded-md">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Effective Date:</strong> March 25, 2025
            </p>

            <p className="text-gray-300 mb-6">
              At WW3X, we value the privacy and security of our users. This Privacy Policy describes how we collect,
              use, and protect your personal information when you access or use our website (the "Site") and related
              services (the "Services"). By accessing or using the Site, you consent to the practices described in this
              Privacy Policy.
            </p>

            <p className="text-gray-300 mb-6">
              Please read this Privacy Policy carefully to understand how we handle your information. If you do not
              agree with the practices outlined here, you must not access or use the Site.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect various types of information to provide and improve the Services. The information we collect
              can be categorized as follows:
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">1.1. Personal Information</h3>
            <p className="text-gray-300 mb-6">
              Personal information is information that can be used to identify you directly or indirectly. We may
              collect personal information when you:
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">Register an Account:</strong> When you create an account, we may collect
                information such as your name, email address, and other details necessary for account creation.
              </li>
              <li>
                <strong className="text-white">Purchase Tokens or NFTs:</strong> When you engage in transactions
                involving WW3X tokens, Country Tokens, NFTs, or other services, we may collect payment-related
                information such as your cryptocurrency wallet address.
              </li>
              <li>
                <strong className="text-white">Contact Us:</strong> If you contact WW3X for customer support or
                inquiries, we may collect your name, email address, and other communication details.
              </li>
              <li>
                <strong className="text-white">Participate in Surveys or Promotions:</strong> If you participate in a
                survey, contest, or promotional activity, we may collect additional information like your interests,
                preferences, and responses.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">1.2. Non-Personal Information</h3>
            <p className="text-gray-300 mb-6">
              Non-personal information refers to data that does not identify you personally. We may collect the
              following non-personal information:
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">Device Information:</strong> We may collect information about the device
                you use to access the Site, such as your device type, operating system, IP address, and browser type.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> We may collect data on how you interact with the
                Site, including your activity, pages visited, and time spent on the Site. This helps us improve the user
                experience and content offerings.
              </li>
              <li>
                <strong className="text-white">Cookies and Tracking Technologies:</strong> We use cookies and similar
                tracking technologies to enhance your experience on the Site, track your usage, and personalize content.
                For more information about our use of cookies, see our Cookie Policy below.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">To Provide and Improve Services:</strong> We use your personal
                information to facilitate your use of the Site, process transactions, provide customer support, and
                enhance the overall user experience.
              </li>
              <li>
                <strong className="text-white">To Manage Your Account:</strong> We use your information to create,
                maintain, and manage your account and to communicate important account-related information (such as
                updates, security notices, and changes to terms).
              </li>
              <li>
                <strong className="text-white">To Process Transactions:</strong> Your personal and payment information
                may be used to process token purchases, NFT transactions, and other financial activities within the WW3X
                ecosystem.
              </li>
              <li>
                <strong className="text-white">To Communicate with You:</strong> We may use your contact information to
                send updates about the game, promotional offers, newsletters, and other information related to the
                Services. You can opt-out of marketing communications at any time.
              </li>
              <li>
                <strong className="text-white">To Improve the Site:</strong> We analyze usage data and feedback to
                improve the functionality, design, and content of the Site, as well as to better understand user
                preferences and trends.
              </li>
              <li>
                <strong className="text-white">To Ensure Security:</strong> We use your information to monitor and
                protect the security of the Site, detect fraud or malicious activity, and ensure the integrity of the
                Services.
              </li>
              <li>
                <strong className="text-white">To Comply with Legal Obligations:</strong> We may use and disclose your
                information as necessary to comply with legal requirements, resolve disputes, and enforce our
                agreements.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">3. Sharing Your Information</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, rent, or trade your personal information to third parties. However, we may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">With Service Providers:</strong> We may share your information with
                third-party vendors and service providers who assist with Site operations, such as payment processors,
                blockchain services, email marketing providers, and customer support tools. These service providers are
                only authorized to use your information as necessary to perform services on our behalf.
              </li>
              <li>
                <strong className="text-white">With Business Partners:</strong> We may share information with trusted
                partners for marketing, promotional purposes, or special events. However, we will not share sensitive
                personal data unless we obtain your consent.
              </li>
              <li>
                <strong className="text-white">In Response to Legal Requests:</strong> We may disclose your information
                to comply with applicable laws, regulations, legal processes, or governmental requests. This may include
                sharing information in response to subpoenas, court orders, or other legal proceedings.
              </li>
              <li>
                <strong className="text-white">In the Event of Business Transfer:</strong> If WW3X undergoes a merger,
                acquisition, sale of assets, or bankruptcy, your information may be transferred as part of the
                transaction. You will be notified of any changes to ownership or the use of your personal data.
              </li>
              <li>
                <strong className="text-white">With Your Consent:</strong> We may share your personal information with
                third parties when we have obtained your explicit consent to do so.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">4. Security of Your Information</h2>
            <p className="text-gray-300 mb-6">
              We take the security of your personal information seriously. We implement technical, physical, and
              organizational measures to protect your data from unauthorized access, loss, misuse, or disclosure. These
              measures include encryption, firewalls, and secure storage practices.
            </p>
            <p className="text-gray-300 mb-6">
              However, please note that no data transmission over the Internet or method of electronic storage is
              completely secure. While we strive to protect your information, we cannot guarantee the absolute security
              of your data.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">5. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-6">
              You have certain rights regarding your personal information. These rights may vary depending on your
              jurisdiction but may include the following:
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">Access and Update:</strong> You have the right to access, correct, or
                update your personal information by logging into your account or contacting us directly.
              </li>
              <li>
                <strong className="text-white">Delete Your Account:</strong> You may request to delete your account and
                personal data by contacting us at privacy@ww3x.io. Please note that we may retain certain information as
                required by law or for legitimate business purposes.
              </li>
              <li>
                <strong className="text-white">Opt-Out of Marketing Communications:</strong> You may opt-out of
                receiving marketing emails or promotional communications at any time by clicking the unsubscribe link in
                the emails or updating your preferences in your account settings.
              </li>
              <li>
                <strong className="text-white">Data Portability:</strong> In certain jurisdictions, you may have the
                right to request a copy of your personal data in a structured, machine-readable format.
              </li>
            </ul>
            <p className="text-gray-300 mb-6">
              To exercise these rights or for any questions regarding your personal data, please contact us at
              privacy@ww3x.io.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and other tracking technologies (e.g., web beacons, pixel tags) to enhance your experience
              on the Site. Cookies are small data files stored on your device that help us remember your preferences,
              analyze Site usage, and provide personalized content.
            </p>
            <ul className="list-disc pl-8 text-gray-300 mb-6 space-y-2">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the Site to
                function and cannot be turned off. They are typically set in response to actions such as logging in or
                filling out forms.
              </li>
              <li>
                <strong className="text-white">Performance and Analytics Cookies:</strong> We use these cookies to
                monitor and improve the performance of the Site. These cookies help us gather data on Site traffic, user
                interactions, and trends.
              </li>
              <li>
                <strong className="text-white">Advertising Cookies:</strong> These cookies may be set by third-party
                advertising networks to track your browsing habits across different sites and deliver targeted
                advertisements.
              </li>
            </ul>
            <p className="text-gray-300 mb-6">
              You can manage cookie preferences through your browser settings. Most browsers allow you to block or
              delete cookies; however, doing so may affect the functionality of certain parts of the Site.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">7. Third-Party Links</h2>
            <p className="text-gray-300 mb-6">
              The Site may contain links to third-party websites or services. These third parties have their own privacy
              policies, which we encourage you to review. WW3X is not responsible for the content or practices of
              third-party sites, and this Privacy Policy does not apply to those sites.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">8. Children's Privacy</h2>
            <p className="text-gray-300 mb-6">
              The Site and Services are not intended for individuals under the age of 18. We do not knowingly collect
              personal information from children under 18. If we become aware that we have inadvertently collected
              personal information from a child under 18, we will take steps to delete such information from our
              records.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the
              updated Privacy Policy on the Site with a revised "Effective Date." Your continued use of the Site after
              such changes indicates your acceptance of the updated Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-[#00ff4c] mb-4 mt-8">10. Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Email:</strong> privacy@ww3x.io
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Address:</strong> WW3X Headquarters, 123 Blockchain Avenue, Crypto City, CC
              12345
            </p>
            <p className="text-gray-300 mb-6">We will respond to your inquiry as soon as possible.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

