import React from 'react'
import './index.css'
import { Gatekeeper } from './screens/Gatekeeper'
import { Dashboard } from './screens/Dashboard'
import { Arcade } from './screens/Arcade'
import { CoursePlayer } from './screens/CoursePlayer'
import { Profile } from './screens/Profile'

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = React.useState<'dashboard' | 'gatekeeper' | 'arcade' | 'course-player' | 'profile'>('dashboard')
  const navigate = (screen: 'dashboard' | 'gatekeeper' | 'arcade' | 'course-player' | 'profile') => setCurrentScreen(screen)

  return (
    <div className="bg-void-black min-h-screen text-white">
      {currentScreen === 'gatekeeper' && <Gatekeeper onNavigate={navigate} />}
      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigate} />}
      {currentScreen === 'arcade' && <Arcade onNavigate={navigate} />}
      {currentScreen === 'course-player' && <CoursePlayer onNavigate={navigate} />}
      {currentScreen === 'profile' && <Profile onNavigate={navigate} />}

      {/* Dev Navigation */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-wrap gap-2">
        <button onClick={() => setCurrentScreen('gatekeeper')} className="text-xs px-2 py-1 bg-grey-stroke rounded">Gatekeeper</button>
        <button onClick={() => setCurrentScreen('dashboard')} className="text-xs px-2 py-1 bg-grey-stroke rounded">Dashboard</button>
        <button onClick={() => setCurrentScreen('arcade')} className="text-xs px-2 py-1 bg-grey-stroke rounded">Arcade</button>
        <button onClick={() => setCurrentScreen('course-player')} className="text-xs px-2 py-1 bg-grey-stroke rounded">Course</button>
        <button onClick={() => setCurrentScreen('profile')} className="text-xs px-2 py-1 bg-grey-stroke rounded">Profile</button>
      </div>
    </div>
  )
}

export default App
