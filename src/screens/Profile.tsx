import React from 'react'

interface ProfileProps {
  onNavigate: (screen: any) => void
}

export const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const [selectedBadge, setSelectedBadge] = React.useState<number | null>(null)

  const stats = {
    logic: 85,
    speed: 72,
    accuracy: 91,
    focus: 78,
  }

  const badges = [
    { id: 1, name: 'Speed Demon', icon: '⚡', active: true },
    { id: 2, name: 'Logic Master', icon: '🧠', active: true },
    { id: 3, name: 'Accuracy Pro', icon: '🎯', active: true },
    { id: 4, name: 'Focus Knight', icon: '🎪', active: true },
    { id: 5, name: 'Code Wizard', icon: '✨', active: false },
    { id: 6, name: 'Algorithm King', icon: '👑', active: false },
  ]

  const recentActivity = [
    { title: 'Completed: Python Basics', time: '2 hours ago', points: '+50' },
    { title: 'Streak: 12 days', time: '1 day ago', points: '+100' },
    { title: 'Perfect Score Quiz', time: '3 days ago', points: '+75' },
  ]

  const radarPoints = [
    { label: 'Logic', value: stats.logic, angle: 0 },
    { label: 'Speed', value: stats.speed, angle: 90 },
    { label: 'Accuracy', value: stats.accuracy, angle: 180 },
    { label: 'Focus', value: stats.focus, angle: 270 },
  ]

  const generateRadarPath = () => {
    const maxValue = 100
    const radius = 80
    const centerX = 120
    const centerY = 120

    const points = radarPoints.map(({ value, angle }) => {
      const rad = (angle * Math.PI) / 180
      const x = centerX + (radius * value) / maxValue * Math.cos(rad)
      const y = centerY + (radius * value) / maxValue * Math.sin(rad)
      return `${x},${y}`
    })

    return `M ${points.join(' L ')} Z`
  }

  return (
    <div className="min-h-screen bg-void-black p-6 lg:p-8">
      <button
        onClick={() => onNavigate('dashboard')}
        className="text-grey-stroke hover:text-neon-lime mb-8 transition-colors text-sm font-semibold"
      >
        ← Back to Dashboard
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Player Profile</h1>
        <p className="text-grey-stroke">Level 15 • Global Rank #237</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative w-48 h-48">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
          >
            <defs>
              <linearGradient id="level-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CCFF00" />
                <stop offset="100%" stopColor="#00F0FF" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="#2a2a2a"
              strokeWidth="8"
            />
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="url(#level-ring)"
              strokeWidth="8"
              strokeDasharray="119 297"
              className="animate-glow-pulse"
            />
          </svg>

          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-electric-blue to-neon-lime flex items-center justify-center">
            <span className="text-7xl">🎮</span>
          </div>

          <div className="absolute bottom-0 right-0 bg-neon-lime text-void-black font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl border-4 border-void-black">
            15
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass-card-lg p-8 flex justify-center items-center">
          <div className="radar-chart-container">
            <svg
              width="280"
              height="280"
              viewBox="0 0 240 240"
              className="text-electric-blue"
            >
              {[20, 40, 60, 80, 100].map((val) => (
                <circle
                  key={`grid-${val}`}
                  cx="120"
                  cy="120"
                  r={(val * 80) / 100}
                  fill="none"
                  stroke="#2a2a2a"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              ))}

              {radarPoints.map(({ angle }, idx) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 120
                const y1 = 120
                const x2 = 120 + 80 * Math.cos(rad)
                const y2 = 120 + 80 * Math.sin(rad)
                return (
                  <line
                    key={`axis-${idx}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#2a2a2a"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                )
              })}

              <path
                d={generateRadarPath()}
                fill="#00F0FF"
                fillOpacity="0.2"
                stroke="#00F0FF"
                strokeWidth="2"
              />

              {radarPoints.map(({ label, value, angle }, idx) => {
                const rad = (angle * Math.PI) / 180
                const x = 120 + 110 * Math.cos(rad)
                const y = 120 + 110 * Math.sin(rad)
                return (
                  <g key={`label-${idx}`}>
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-bold"
                      fill="#00F0FF"
                    >
                      {label}
                    </text>
                    <text
                      x={x}
                      y={y + 12}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs"
                      fill="#CCFF00"
                    >
                      {value}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { icon: '⭐', label: 'Total XP', value: '15,420' },
            { icon: '🏆', label: 'Global Rank', value: '#237' },
            { icon: '🎯', label: 'Missions Won', value: '47' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card-lg p-4 text-center border-2 border-grey-stroke">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-grey-stroke text-xs mb-1">{stat.label}</div>
              <div className="text-neon-lime font-bold text-lg">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {badges.map((badge) => (
            <button
              key={badge.id}
              onClick={() => setSelectedBadge(badge.id)}
              className={`badge-hexagon group relative ${
                badge.active ? 'badge-hexagon-active' : 'badge-hexagon-locked'
              } ${selectedBadge === badge.id ? 'ring-2 ring-neon-lime' : ''}`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-charcoal border border-grey-stroke rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {badge.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="glass-card p-4 flex justify-between items-center border-l-2 border-electric-blue">
              <div>
                <p className="text-white font-semibold text-sm">{activity.title}</p>
                <p className="text-grey-stroke text-xs">{activity.time}</p>
              </div>
              <div className="text-neon-gold font-bold text-lg">{activity.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
