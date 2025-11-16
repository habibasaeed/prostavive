import {
  HeartIcon,
  FireIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserIcon,
  MoonIcon,
  SparklesIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 font-sans antialiased">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between backdrop-blur bg-white/70 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg flex items-center justify-center font-bold text-gray-900">
            PV
          </div>
          <div>
            <h1 className="text-lg font-semibold">ProstaVive</h1>
            <p className="text-sm text-gray-500">
              Natural Power for Men’s Prostate & Vitality
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#benefits"
            className="text-sm hover:text-yellow-500 transition"
          >
            Benefits
          </a>
          <a
            href="#audience"
            className="text-sm hover:text-yellow-500 transition"
          >
            Who It’s For
          </a>
          <a
            href="#buy"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold shadow-lg transition"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Restore prostate health, urinary comfort & confidence — naturally.
          </h2>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            ProstaVive is a science-backed formula that supports a healthy
            prostate, promotes strong urinary flow, and enhances male vitality
            through the power of nature.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Supports prostate function & healthy urinary flow.",
              "Enhances sexual performance, stamina & confidence.",
              "100% natural, safe & research-backed ingredients.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-semibold shadow">
                  ✓
                </div>
                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#buy"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold shadow-lg transition-all transform hover:-translate-y-1"
            >
              Order Now
            </a>
            <a
              href="#benefits"
              className="inline-block border border-gray-400 hover:border-yellow-400 text-gray-700 px-6 py-3 rounded-md text-sm font-medium transition-all hover:text-yellow-500"
            >
              Learn More
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500 italic">
            Trusted by thousands • Made in USA • GMP Certified
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="relative group">
            <img
            src="./prost.jpg"
              alt="ProstaVive bottle"
              className="w-72 md:w-96 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-6 left-4 bg-white/90 border border-gray-200 rounded-lg p-3 shadow-md backdrop-blur-sm">
              <div className="text-xs text-gray-500">30-day supply</div>
              <div className="font-semibold">ProstaVive — Powerhouse</div>
              <div className="text-sm text-gray-700">
                60 capsules • 2 per day
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500"></div>

      {/* BENEFITS / SELLING POINTS */}
      <section id="benefits" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-extrabold text-center mb-2">
          ProstaVive Benefits
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Six powerful reasons why thousands of men trust ProstaVive for
          prostate health and vitality.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Healthy Prostate & Urinary Flow",
              desc: "Reduces frequent urination, supports stronger flow, and helps you sleep peacefully through the night.",
            },
            {
              icon: FireIcon,
              title: "Enhanced Sexual Power & Vitality",
              desc: "With Tongkat Ali, Maca Root, Fenugreek & Ashwagandha to boost libido, stamina, and confidence.",
            },
            {
              icon: HeartIcon,
              title: "Improved Blood Flow & Hormonal Balance",
              desc: "Promotes better circulation and healthy testosterone levels for renewed energy and endurance.",
            },
            {
              icon: BeakerIcon,
              title: "All-Natural, Science-Based Formula",
              desc: "Made with research-backed herbs and nutrients, free from chemicals or stimulants.",
            },
            {
              icon: SparklesIcon,
              title: "Total Men’s Wellness Support",
              desc: "Helps boost energy, improve mood, and support better sleep and focus.",
            },
            {
              icon: CurrencyDollarIcon,
              title: "Risk-Free & Non-Prescription",
              desc: "A natural alternative to drugs — usually backed by a 60-day money-back guarantee.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Icon className="w-10 h-10 text-yellow-500 mb-4" />
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {title}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center max-w-3xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> ProstaVive is a dietary supplement,
          not a medical treatment. Results may vary. Consult your healthcare
          provider before use.
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section
        id="audience"
        className="bg-gradient-to-b from-white to-gray-100 py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-2">
            Who Is ProstaVive For?
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Designed for men who want to take control of their prostate health
            and vitality — naturally.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserIcon,
                title: "Men 35 & Above",
                desc: "Ideal for men starting to notice changes in urinary flow, frequency, or sleep quality.",
              },
              {
                icon: MoonIcon,
                title: "Men with Prostate Concerns",
                desc: "For those experiencing bladder pressure, frequent urination, or incomplete emptying.",
              },
              {
                icon: FireIcon,
                title: "Men Facing Reduced Performance",
                desc: "Helps men with declining stamina, energy, or libido caused by aging or hormonal shifts.",
              },
              {
                icon: HeartIcon,
                title: "Health-Conscious Men",
                desc: "For those who prefer natural, herbal solutions over synthetic or invasive treatments.",
              },
              {
                icon: BriefcaseIcon,
                title: "Busy Professionals",
                desc: "Easy daily supplement for men who want to stay sharp, strong, and balanced with minimal effort.",
              },
              {
                icon: UserGroupIcon,
                title: "Men Concerned About Aging",
                desc: "Maintain strength, vitality, and comfort — staying active and confident at every age.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="buy"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">
              Take charge of your prostate health today.
            </h3>
            <p className="mt-2 text-gray-900/80 text-lg">
              Experience lasting comfort, confidence, and vitality with
              ProstaVive — the natural way.
            </p>
          </div>
          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-bold shadow-lg transition transform hover:-translate-y-1"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-yellow-400 font-bold text-xl">ProstaVive</div>
            <p className="text-sm mt-2 text-gray-400">
              Natural, research-backed prostate & vitality support for men 35+
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">Quick Links</div>
            <ul className="text-sm text-gray-400 space-y-1">
              <li className="hover:text-yellow-400 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">Certifications</div>
            <div className="text-sm text-gray-400">
              GMP Certified • Made in USA • Secure Checkout
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 text-sm text-gray-500 py-4 text-center">
          © {new Date().getFullYear()} ProstaVive. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
