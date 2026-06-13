import { useState } from 'react'
import { ArrowLeft, Sparkles, Download, DollarSign, Users, TrendingUp, Calendar } from 'lucide-react'

interface PlanBuilderProps {
  onBack: () => void
}

interface MediaPlan {
  podcasts: Array<{
    name: string
    audience: string
    demographics: string
    cpm: number
    impressions: number
    cost: number
  }>
  totalBudget: number
  totalImpressions: number
  estimatedReach: number
}

export default function PlanBuilder({ onBack }: PlanBuilderProps) {
  const [step, setStep] = useState<'input' | 'generating' | 'result'>('input')
  const [formData, setFormData] = useState({
    brandName: '',
    targetAudience: '',
    ageRange: '25-34',
    gender: 'all',
    householdIncome: '50k-100k',
    budget: '',
    goals: '',
  })
  const [mediaPlan, setMediaPlan] = useState<MediaPlan | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('generating')

    setTimeout(() => {
      const plan = generateMockPlan(formData)
      setMediaPlan(plan)
      setStep('result')
    }, 2000)
  }

  const generateMockPlan = (data: typeof formData): MediaPlan => {
    const budget = parseInt(data.budget) || 10000

    const podcasts = [
      {
        name: 'The Daily Tech Brief',
        audience: '450K monthly listeners',
        demographics: `${data.ageRange} years, ${data.gender === 'all' ? 'Mixed gender' : data.gender}, ${data.householdIncome} income`,
        cpm: 28,
        impressions: Math.floor(budget * 0.35 / 28 * 1000),
        cost: Math.floor(budget * 0.35),
      },
      {
        name: 'Business Insights Weekly',
        audience: '320K monthly listeners',
        demographics: `${data.ageRange} years, ${data.gender === 'all' ? 'Mixed gender' : data.gender}, ${data.householdIncome} income`,
        cpm: 32,
        impressions: Math.floor(budget * 0.30 / 32 * 1000),
        cost: Math.floor(budget * 0.30),
      },
      {
        name: 'Innovation Station',
        audience: '280K monthly listeners',
        demographics: `${data.ageRange} years, ${data.gender === 'all' ? 'Mixed gender' : data.gender}, ${data.householdIncome} income`,
        cpm: 25,
        impressions: Math.floor(budget * 0.25 / 25 * 1000),
        cost: Math.floor(budget * 0.25),
      },
      {
        name: 'Modern Entrepreneurs',
        audience: '195K monthly listeners',
        demographics: `${data.ageRange} years, ${data.gender === 'all' ? 'Mixed gender' : data.gender}, ${data.householdIncome} income`,
        cpm: 22,
        impressions: Math.floor(budget * 0.10 / 22 * 1000),
        cost: Math.floor(budget * 0.10),
      },
    ]

    const totalImpressions = podcasts.reduce((sum, p) => sum + p.impressions, 0)

    return {
      podcasts,
      totalBudget: budget,
      totalImpressions,
      estimatedReach: Math.floor(totalImpressions * 0.85),
    }
  }

  const handleExport = () => {
    if (!mediaPlan) return

    const csv = [
      ['Podcast', 'Audience Size', 'Demographics', 'CPM', 'Impressions', 'Cost'].join(','),
      ...mediaPlan.podcasts.map(p =>
        [p.name, p.audience, `"${p.demographics}"`, p.cpm, p.impressions, p.cost].join(',')
      ),
      [],
      ['Total Budget', '', '', '', '', mediaPlan.totalBudget],
      ['Total Impressions', '', '', '', mediaPlan.totalImpressions, ''],
      ['Estimated Reach', '', '', '', mediaPlan.estimatedReach, ''],
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `media-plan-${formData.brandName.toLowerCase().replace(/\s+/g, '-')}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 'input' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Create Your Media Plan</h1>
              <p className="text-slate-400">Tell us about your campaign and target audience</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900 rounded-xl p-8 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Brand Name</label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget (USD)</label>
                  <input
                    type="number"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="10000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Target Audience Description</label>
                  <input
                    type="text"
                    required
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tech-savvy professionals interested in innovation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Age Range</label>
                  <select
                    value={formData.ageRange}
                    onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55+">55+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Household Income</label>
                  <select
                    value={formData.householdIncome}
                    onChange={(e) => setFormData({ ...formData, householdIncome: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="<25k">&lt;$25k</option>
                    <option value="25k-50k">$25k-$50k</option>
                    <option value="50k-100k">$50k-$100k</option>
                    <option value="100k-150k">$100k-$150k</option>
                    <option value="150k+">$150k+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Campaign Goals</label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    rows={3}
                    placeholder="e.g., Increase brand awareness, drive product sales, launch new feature..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Generate Media Plan
              </button>
            </form>
          </div>
        )}

        {step === 'generating' && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-700 border-t-blue-500 mb-6"></div>
            <h2 className="text-2xl font-bold mb-2">Analyzing Your Requirements</h2>
            <p className="text-slate-400">Our AI is finding the best podcasts for your campaign...</p>
          </div>
        )}

        {step === 'result' && mediaPlan && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Media Plan</h1>
                <p className="text-slate-400">Optimized for {formData.brandName}</p>
              </div>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <DollarSign className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-sm text-slate-400">Total Budget</div>
                <div className="text-2xl font-bold">${mediaPlan.totalBudget.toLocaleString()}</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <TrendingUp className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-sm text-slate-400">Total Impressions</div>
                <div className="text-2xl font-bold">{(mediaPlan.totalImpressions / 1000).toFixed(0)}K</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-sm text-slate-400">Est. Reach</div>
                <div className="text-2xl font-bold">{(mediaPlan.estimatedReach / 1000).toFixed(0)}K</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <Calendar className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-sm text-slate-400">Podcasts</div>
                <div className="text-2xl font-bold">{mediaPlan.podcasts.length}</div>
              </div>
            </div>

            {/* Recommended Podcasts */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800">
                <h2 className="text-xl font-semibold">Recommended Podcasts</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {mediaPlan.podcasts.map((podcast, index) => (
                  <div key={index} className="p-6 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{podcast.name}</h3>
                        <p className="text-sm text-slate-400">{podcast.audience}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-500">${podcast.cost.toLocaleString()}</div>
                        <div className="text-xs text-slate-400">Campaign cost</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Demographics:</span>
                        <div className="mt-1">{podcast.demographics}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">CPM:</span>
                        <div className="mt-1 font-semibold">${podcast.cpm}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Impressions:</span>
                        <div className="mt-1 font-semibold">{podcast.impressions.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => {
                  setStep('input')
                  setMediaPlan(null)
                }}
                className="flex-1 px-6 py-3 border border-slate-700 hover:border-slate-600 rounded-lg font-semibold transition-colors"
              >
                Create New Plan
              </button>
              <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Save & Share
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
