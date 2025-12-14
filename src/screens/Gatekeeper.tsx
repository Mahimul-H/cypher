import React from 'react'
import { Check } from 'lucide-react'

interface GatekeeperProps {
  onNavigate: (screen: any) => void
}

export const Gatekeeper: React.FC<GatekeeperProps> = ({ onNavigate }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(1)
  const [coinsAwarded, setCoinsAwarded] = React.useState(false)

  const question = "What is the time complexity of QuickSort?"
  const answers = [
    "O(log n)",
    "O(n log n)",
    "O(n²)",
    "O(2ⁿ)"
  ]

  const handleSubmit = () => {
    setCoinsAwarded(true)
    setTimeout(() => {
      onNavigate('dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-void-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Film Grain Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" fill="#fff" filter="url(#noise)" />
        </svg>
      </div>

      {/* Coins Reward Animation */}
      {coinsAwarded && (
        <div className="absolute top-16 right-8 animate-bounce z-50">
          <div className="text-2xl font-bold text-neon-gold drop-shadow-lg">+50 Coins! 🎉</div>
        </div>
      )}

      {/* Main Card */}
      <div className="glass-card-lg max-w-md w-full p-8 space-y-8 border-2 border-grey-stroke shadow-2xl relative z-10">
        {/* Top Right Wallet Pill */}
        <div className="absolute top-6 right-6 bg-charcoal/80 px-4 py-2 rounded-full border border-neon-gold/50 flex items-center gap-2">
          <span className="text-neon-gold text-sm font-bold">💼 Wallet</span>
          <span className="text-neon-gold font-bold">+50</span>
        </div>

        {/* Question */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">
            {question}
          </h1>
          <p className="text-grey-stroke text-sm">Choose the correct answer</p>
        </div>

        {/* Answer Bars */}
        <div className="space-y-3">
          {answers.map((answer, index) => (
            <div
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`selection-bar relative h-10 rounded-lg flex items-center px-4 cursor-pointer transition-all duration-200 ${
                selectedAnswer === index
                  ? 'selection-bar-active bg-electric-blue/20 border border-electric-blue'
                  : 'bg-dark-grey hover:bg-grey-stroke border border-grey-stroke'
              }`}
            >
              <span className="flex-1 font-semibold text-white">{answer}</span>
              {selectedAnswer === index && (
                <Check className="w-5 h-5 text-electric-blue animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="btn-primary-lg text-lg"
        >
          SUBMIT ANSWER
        </button>

        {/* Footer Text */}
        <p className="text-center text-xs text-grey-stroke">
          Answer correctly to earn coins and progress
        </p>
      </div>
    </div>
  )
}
