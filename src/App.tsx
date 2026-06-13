import { useState } from 'react'
import LandingPage from './components/LandingPage'
import PlanBuilder from './components/PlanBuilder'

function App() {
  const [showBuilder, setShowBuilder] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">
      {showBuilder ? (
        <PlanBuilder onBack={() => setShowBuilder(false)} />
      ) : (
        <LandingPage onGetStarted={() => setShowBuilder(true)} />
      )}
    </div>
  )
}

export default App
