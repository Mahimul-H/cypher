import React from 'react'

interface DashboardProps {
  onNavigate: (screen: any) => void
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [timeRemaining, setTimeRemaining] = React.useState(3600)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-void-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="avatar-ring">
              <div className="avatar animate-float">
                <span className="text-2xl">👤</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Welcome back</h3>
              <p className="text-xs text-grey-stroke">Continue your learning</p>
            </div>
          </div>

          <div className="glass-card px-5 py-2 border border-grey-stroke flex items-center gap-3">
            <div className="text-neon-gold font-bold text-lg">💰 1,250</div>
            <div className="text-xs text-grey-stroke">Coins</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <div className="bg-dark-grey rounded-lg p-6 border border-grey-stroke h-full mission-card-glow animate-float animate-glow-pulse">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-0">Current Mission</h2>
                    <p className="text-grey-stroke text-sm">Python Mastery</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-purple/40 to-electric-blue/20 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="10" fill="#7c3aed" opacity="0.18" />
                      <circle cx="18" cy="18" r="6" fill="#b59eff" opacity="0.22" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-grey-stroke">Progress</div>
                    <div className="text-xs text-neon-lime font-bold">68%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '68%' }} />
                  </div>
                </div>

                <div className="mb-4">
                  <button onClick={() => onNavigate('course-player')} className="resume-btn">Resume</button>
                </div>
                <p className="text-sm text-grey-stroke">Progress through your mission and pick up rewards.</p>
              </div>
              <div className="mt-6 text-xs text-grey-stroke">Keep going to maintain your streak and unlock badges.</div>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-2">
            <div className="bg-dark-grey rounded-lg p-6 border border-grey-stroke h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Arcade</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-md bg-charcoal/60 hover:bg-charcoal/80 cursor-pointer transition-all">
                    <span className="text-2xl">🧩</span>
                    <span className="text-sm font-semibold">Sudoku</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-md bg-charcoal/60 hover:bg-charcoal/80 cursor-pointer transition-all">
                    <span className="text-2xl">🎯</span>
                    <span className="text-sm font-semibold">Logic Puzzles</span>
                  </div>
                </div>
              </div>
              <button onClick={() => onNavigate('arcade')} className="w-full py-3 rounded-md text-sm font-bold text-electric-blue border-2 border-electric-blue hover:shadow-neon-blue transition-all">Play Now</button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="feature-card">
              <div>
                <div className="card-sub">Day Streak</div>
                <div className="text-3xl font-bold text-neon-gold">12</div>
                <div className="mt-3 w-40">
                  <div className="h-1 bg-neon-gold rounded-full overflow-hidden">
                    <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg,#FFD166,#FF8A65)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="small-analytic">
              <div>
                <div className="card-sub">Next Live Class</div>
                <div className="text-xl font-bold">Advanced Algorithms</div>
                <div className="text-xs text-grey-stroke">with Dr. Sarah Chen</div>
              </div>
              <div className="text-right">
                <div className="text-electric-blue font-mono text-lg">{formatTime(timeRemaining)}</div>
                <button className="mt-3 px-3 py-1 border border-grey-stroke rounded text-xs">Set Reminder</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <div className="feature-card">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-lime/10 to-electric-blue/10 flex items-center justify-center">⚡</div>
              <div>
                <div className="card-title">Training Dojo</div>
                <div className="card-sub">Configure custom practice sessions</div>
              </div>
            </div>
          </div>

          <div>
            <div className="feature-card">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/10 to-neon-lime/10 flex items-center justify-center">🎯</div>
              <div>
                <div className="card-title">Ranked Match</div>
                <div className="card-sub">Take full exam in focus mode</div>
              </div>
            </div>
          </div>

          <div>
            <div className="feature-card">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-gold/10 to-electric-blue/10 flex items-center justify-center">🧰</div>
              <div>
                <div className="card-title">The Armory</div>
                <div className="card-sub">Unlock new skills with coins</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="small-analytic">
            <div>
              <div className="card-title">Analytics Dashboard</div>
              <div className="card-sub">Track your performance and identify weaknesses</div>
            </div>
            <div className="text-neon-lime font-bold">
              82%
              <div className="text-xs text-grey-stroke">Avg Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

