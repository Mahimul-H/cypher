import React from 'react'
import { X } from 'lucide-react'

interface ArcadeProps {
  onNavigate: (screen: any) => void
}

export const Arcade: React.FC<ArcadeProps> = ({ onNavigate }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null)
  const [showReviveSuccess, setShowReviveSuccess] = React.useState(false)

  const question = "Complete the sequence: 2, 6, 12, 20, ?"
  const answers = ["28", "30", "32", "35"]
  const correctAnswer = 0

  const handleRevive = () => {
    if (selectedAnswer === correctAnswer) {
      setShowReviveSuccess(true)
      setTimeout(() => {
        onNavigate('dashboard')
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen bg-void-black p-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sudoku-grid" x="40" y="40" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#FF0055" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sudoku-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-neon-red/5" />

      <div className="relative z-10 max-w-lg w-full">
        <div className="bg-black/95 border-2 border-neon-red rounded-lg p-8 space-y-6 shadow-neon-red">
          <button
            onClick={() => onNavigate('dashboard')}
            className="absolute top-4 right-4 text-grey-stroke hover:text-neon-red transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-mono font-bold text-neon-red tracking-wider">
              ⚠️ SYSTEM FAILURE
            </h1>
            <p className="text-grey-stroke text-sm">Answer to Revive</p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-50" />

          <div className="bg-dark-grey/50 border border-grey-stroke rounded-lg p-6 space-y-4">
            <p className="text-white font-semibold text-center text-lg">
              {question}
            </p>
            <div className="text-center text-neon-gold text-2xl font-mono">
              _ _ _ _
            </div>
          </div>

          <div className="space-y-2">
            {answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-200 text-center ${
                  selectedAnswer === index
                    ? 'bg-electric-blue text-void-black border-2 border-electric-blue shadow-neon-blue'
                    : 'bg-dark-grey border border-grey-stroke text-white hover:border-grey-stroke hover:bg-grey-stroke/30'
                }`}
              >
                {answer}
              </button>
            ))}
          </div>

          {showReviveSuccess && (
            <div className="animate-bounce text-center">
              <p className="text-neon-lime font-bold text-lg">✓ System Revived! 🚀</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleRevive}
              className="flex-1 bg-neon-lime text-void-black font-bold py-3 px-6 rounded-lg hover:shadow-neon-lime active:scale-95 transition-all duration-200"
            >
              REVIVE
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="btn-outlined flex-1"
            >
              GIVE UP
            </button>
          </div>

          <p className="text-center text-xs text-grey-stroke">
            Choose wisely. You have one chance.
          </p>
        </div>
      </div>
    </div>
  )
}
