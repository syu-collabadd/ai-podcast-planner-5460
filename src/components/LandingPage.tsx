import { Mic2, Target, TrendingUp, Zap, BarChart3, Users } from 'lucide-react'

interface LandingPageProps {
  onGetStarted: () => void
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Mic2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-semibold">PodcastPlan AI</span>
            </div>
            <div className="flex gap-6 items-center">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              Build podcast media plans with AI
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Leverage proprietary demographic data and cost insights to create optimized
              podcast advertising campaigns in seconds, not hours.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
              </button>
              <button className="px-8 py-3 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Product Preview */}
          <div className="mt-20 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-700">
                  <BarChart3 className="w-8 h-8 text-blue-500 mb-3" />
                  <div className="text-sm text-slate-400">Campaign Reach</div>
                  <div className="text-2xl font-bold mt-1">2.4M</div>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-700">
                  <Target className="w-8 h-8 text-blue-500 mb-3" />
                  <div className="text-sm text-slate-400">Targeting Score</div>
                  <div className="text-2xl font-bold mt-1">94%</div>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-700">
                  <TrendingUp className="w-8 h-8 text-blue-500 mb-3" />
                  <div className="text-sm text-slate-400">Est. CPM</div>
                  <div className="text-2xl font-bold mt-1">$28</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-500 text-sm mb-6">Trusted by leading brands</div>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            <div className="text-2xl font-bold text-slate-400">ACME Corp</div>
            <div className="text-2xl font-bold text-slate-400">TechFlow</div>
            <div className="text-2xl font-bold text-slate-400">BrandWorks</div>
            <div className="text-2xl font-bold text-slate-400">MediaMax</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to plan podcast ads</h2>
          <p className="text-xl text-slate-400">Powered by proprietary data and AI optimization</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI-Powered Recommendations</h3>
            <p className="text-slate-400">
              Get instant podcast recommendations based on your target demographics,
              budget, and campaign goals using our advanced AI engine.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Demographic Intelligence</h3>
            <p className="text-slate-400">
              Access detailed audience data including age, gender, household income,
              location, and interests for thousands of podcasts.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
            <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
            <p className="text-slate-400">
              Real-time pricing data and optimization algorithms ensure you get
              maximum reach and engagement within your budget.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-slate-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-950 rounded-xl p-8 border border-slate-800">
              <div className="text-lg font-semibold text-slate-400 mb-2">Free</div>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  5 media plans/month
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Basic demographic data
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Email support
                </li>
              </ul>
              <button className="w-full py-2 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-slate-950 rounded-xl p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Popular
              </div>
              <div className="text-lg font-semibold text-slate-400 mb-2">Pro</div>
              <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Unlimited media plans
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Advanced demographics
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Priority support
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Export to CSV
                </li>
              </ul>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold">
                Get Started
              </button>
            </div>

            <div className="bg-slate-950 rounded-xl p-8 border border-slate-800">
              <div className="text-lg font-semibold text-slate-400 mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Custom integrations
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  SLA & phone support
                </li>
              </ul>
              <button className="w-full py-2 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mic2 className="w-6 h-6 text-blue-500" />
                <span className="font-semibold">PodcastPlan AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered podcast media planning for modern brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
            © 2026 PodcastPlan AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
