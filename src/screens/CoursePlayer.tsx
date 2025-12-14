import React from 'react'
import { Sparkles, Play } from 'lucide-react'

interface CoursePlayerProps {
  onNavigate: (screen: any) => void
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState<'curriculum' | 'ai-assist' | 'notes'>('ai-assist')
  const [progress, _setProgress] = React.useState(65)

  const curriculumItems = [
    { id: 1, title: 'Python Basics', completed: true },
    { id: 2, title: 'Data Structures', completed: true },
    { id: 3, title: 'Algorithms', completed: false },
    { id: 4, title: 'Advanced Concepts', completed: false },
  ]

  const aiMessages = [
    { role: 'user', content: 'What is polymorphism?' },
    { role: 'ai', content: 'Polymorphism is a core concept in OOP that means "many forms". It allows objects to take multiple forms.' },
    { role: 'user', content: 'Can you give an example?' },
    { role: 'ai', content: 'class Animal:\n  def speak(self):\n    pass\n\nclass Dog(Animal):\n  def speak(self):\n    return "Woof!"' },
  ]

  return (
    <div className="min-h-screen bg-void-black p-6 lg:p-8">
      <div className="mb-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-grey-stroke hover:text-neon-lime mb-4 transition-colors text-sm font-semibold"
        >
          ← Back to Dashboard
        </button>
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Python Mastery Course</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card-lg overflow-hidden">
            <div className="relative bg-dark-grey aspect-video flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="progress-bar mb-3">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="text-xs text-grey-stroke">{progress}% Complete</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-electric-blue/20 border-2 border-electric-blue flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors cursor-pointer">
                  <Play className="w-8 h-8 text-electric-blue fill-electric-blue ml-1" />
                </div>
                <p className="text-grey-stroke text-sm">Lesson 3: Advanced Functions</p>
              </div>
            </div>

            <div className="p-4 border-t border-grey-stroke">
              <div className="flex justify-between items-center">
                <span className="text-sm text-grey-stroke">25:34 / 38:50</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-dark-grey rounded hover:bg-grey-stroke transition-colors">1x</button>
                  <button className="px-3 py-1 text-xs bg-dark-grey rounded hover:bg-grey-stroke transition-colors">⚙️</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card-lg flex flex-col h-full">
          <div className="flex border-b border-grey-stroke">
            {(['curriculum', 'ai-assist', 'notes'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-2 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-electric-blue text-electric-blue'
                    : 'border-transparent text-grey-stroke hover:text-white'
                }`}
              >
                {tab === 'curriculum' && 'Curriculum'}
                {tab === 'ai-assist' && 'AI Assist'}
                {tab === 'notes' && 'Notes'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {activeTab === 'curriculum' && (
              <div className="space-y-2">
                {curriculumItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      item.completed
                        ? 'bg-neon-lime/10 border-neon-lime/50 text-neon-lime'
                        : 'bg-dark-grey border-grey-stroke text-grey-stroke'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.completed ? '✓' : '○'}</span>
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ai-assist' && (
              <div className="space-y-3">
                {aiMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block max-w-xs rounded-lg p-3 ${
                        msg.role === 'user'
                          ? 'bg-electric-blue/20 border border-electric-blue text-white'
                          : 'code-block'
                      }`}
                    >
                      <p className="text-xs whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-2">
                <div className="p-3 bg-dark-grey rounded-lg text-xs text-grey-stroke">
                  <p className="font-semibold mb-2">📝 Lesson Notes</p>
                  <p>• Functions are reusable blocks</p>
                  <p>• Parameters allow customization</p>
                  <p>• Return values pass data back</p>
                </div>
              </div>
            )}
          </div>

          {activeTab === 'ai-assist' && (
            <div className="border-t border-grey-stroke p-3">
              <input
                type="text"
                placeholder="Ask AI anything..."
                className="w-full bg-dark-grey border border-grey-stroke rounded px-3 py-2 text-xs text-white placeholder-grey-stroke focus:outline-none focus:border-electric-blue"
              />
            </div>
          )}
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-neon-lime to-electric-blue rounded-full flex items-center justify-center shadow-neon-lime hover:scale-110 transition-transform duration-200">
        <Sparkles className="w-6 h-6 text-void-black" />
      </button>
    </div>
  )
}
