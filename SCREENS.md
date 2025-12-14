# Factoryze.tech - Screen Reference Guide

## Complete Screen Documentation

This guide provides detailed information about each screen in the Factoryze.tech EdTech platform.

---

## �� Screen 1: The Gatekeeper
**File**: `src/screens/Gatekeeper.tsx`
**Route**: `gatekeeper`
**Purpose**: Quiz entry/landing screen

### Features
- Glassmorphism card design
- High-contrast question display
- 4 vertical selection bars with active state
- Electric blue checkmark on selection
- Wallet pill showing coin rewards
- Coin animation on submit
- Full-width primary button

### Colors Used
- Background: Void Black (#050505)
- Card: Charcoal/glassmorphism
- Active Selection: Electric Blue (#00F0FF)
- Button: Neon Lime (#CCFF00)
- Rewards: Neon Gold (#FFD700)

### Key Components
```tsx
- Question display (large bold text)
- Answer selection bars (interactive)
- Wallet widget (top-right)
- Submit button (full-width)
- Coin reward animation
```

### Interactions
- Click answer bars to select
- Submit button navigates to Dashboard
- Wallet shows coin reward
- Coins animate on successful submit

---

## 🏠 Screen 2: The Dashboard
**File**: `src/screens/Dashboard.tsx`
**Route**: `dashboard`
**Purpose**: Home HUD with mission overview

### Layout
- **Bento Grid**: 3-column responsive layout
- **Main Card** (2 cols, 2 rows): Current Mission
- **Side Card** (1 col, 2 rows): Arcade games
- **Bottom Left**: Streak tracker
- **Bottom Right** (2 cols): Countdown timer

### Features
- User avatar with gradient (top-left)
- Wallet widget showing coins (top-right)
- 3D wireframe planet SVG
- Interactive arcade games panel
- Animated fire icon for streak
- Live countdown timer
- Resume button (Electric Blue)
- Play button (Secondary)

### Colors Used
- Background: Void Black
- Cards: Dark Grey/Charcoal
- Accents: Electric Blue, Neon Lime
- Mission Card: Dark Purple
- Wallet: Neon Gold border
- Streak: Neon Gold text

### Key Components
```tsx
- Avatar circle (top-left)
- Wallet widget (top-right)
- Mission card with 3D planet
- Arcade panel
- Streak card with fire emoji
- Countdown timer
```

### Interactions
- Resume button → Course Player
- Play button → Arcade
- Countdown updates every second
- Click avatars/cards for hover effects

---

## 🎯 Screen 3: The Arcade
**File**: `src/screens/Arcade.tsx`
**Route**: `arcade`
**Purpose**: Game-over modal interface

### Theme
- Critical system failure
- High contrast, urgent design
- Sudoku grid background (dimmed)
- Red tint overlay

### Features
- Sudoku grid background with red tint
- Modal with red border and glow
- "SYSTEM FAILURE" header in monospace
- Multiple-choice revival quiz
- Revive/Give Up buttons
- Success state animation
- Close button (X icon)

### Colors Used
- Background Tint: Red (#FF0055)
- Modal Border: Neon Red with glow
- Header: Neon Red monospace
- Answers: Electric Blue (selected)
- Success: Neon Lime
- Grid: Neon Red pattern

### Key Components
```tsx
- Modal overlay
- System failure header
- Quiz question display
- Multiple choice buttons
- Revive button (Lime)
- Give Up button (Outlined red)
- Close button (top-right)
```

### Interactions
- Select answer (Electric Blue highlight)
- Revive button: checks answer
- Correct answer: success animation
- Give Up: returns to dashboard
- Close: returns to dashboard

---

## 🎬 Screen 4: The Course Player
**File**: `src/screens/CoursePlayer.tsx`
**Route**: `course-player`
**Purpose**: Video learning interface

### Layout
- **Split Screen**: 60% left (video), 40% right (panel)
- **Left Panel**: Video player
- **Right Panel**: Command center tabs

### Video Player Features
- 16:9 aspect ratio
- Large play button (center)
- Progress bar (hover reveal)
- Time display (25:34 / 38:50)
- Speed controls (1x)
- Settings button

### Command Center Features
- Tab navigation (Curriculum/AI/Notes)
- Curriculum: List of lessons with completion
- AI Assist: Chat interface with code blocks
- Notes: Quick reference notes
- Input field for AI questions

### Colors Used
- Background: Void Black
- Cards: Dark Grey/Charcoal
- Video: Dark Grey background
- Buttons: Electric Blue
- Progress: Electric Blue
- Active Tab: Electric Blue
- Code Blocks: Lime text on dark background

### Key Components
```tsx
- Video player (16:9)
- Play button (center)
- Progress bar
- Tab navigation
- Curriculum list
- AI chat interface
- Code-styled messages
- Notes display
- Input field
- Floating sparkle button
```

### Interactions
- Back button → Dashboard
- Tab switching
- AI input field
- Video hover reveals progress
- Floating button click

---

## 👤 Screen 5: The Profile
**File**: `src/screens/Profile.tsx`
**Route**: `profile`
**Purpose**: Gamified character sheet

### Layout
- **Header**: Level and rank display
- **Avatar**: Large circle with gradient and level badge
- **Content**: 2-column grid (radar chart + stats)
- **Badges**: 6-column responsive grid
- **Activity**: Full-width feed

### Features
- Level 15 avatar with glowing ring
- Animated level progress ring
- Neon cyan radar chart (4 skills)
- Stat widgets (XP, Rank, Missions)
- Hexagonal achievement badges
- Active/locked badge states
- Tooltip hover on badges
- Recent activity feed

### Colors Used
- Background: Void Black
- Avatar Ring: Lime → Blue gradient
- Radar Chart: Electric Blue
- Active Badges: Gold gradient + Lime glow
- Locked Badges: 40% opacity
- Stats: Neon Gold text
- Activity: Electric Blue left border

### Key Components
```tsx
- Avatar with level ring
- Level badge (bottom-right)
- Radar chart (4 axes)
- Stat widgets (3 items)
- Hexagonal badges (6 items)
- Badge tooltips
- Recent activity cards
```

### Skills Shown
1. **Logic** - 85%
2. **Speed** - 72%
3. **Accuracy** - 91%
4. **Focus** - 78%

### Interactions
- Back button → Dashboard
- Badge click → selection highlight
- Badge hover → tooltip appears
- Activity shows timestamps and points

---

## 🎮 Navigation Flow

```
Gatekeeper
    ↓ (Submit)
Dashboard ←→ Arcade
    ↓ (Resume)     ↓ (Revive/Give Up)
Course Player ← ← ← → → → Back
    ↑
Profile (from hamburger/nav)
```

---

## 🎨 Design Tokens Used Across All Screens

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void Black | #050505 | Main BG |
| Charcoal | #111111 | Secondary BG |
| Neon Lime | #CCFF00 | Primary accent |
| Electric Blue | #00F0FF | Secondary accent |
| Dark Grey | #141414 | UI elements |
| Grey Stroke | #2a2a2a | Borders |
| Neon Red | #FF0055 | Alert/Error |
| Neon Gold | #FFD700 | Rewards |
| Dark Purple | #1a0033 | Special accent |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Headings | Satoshi/Inter | 24-48px | Bold (700) |
| Body | Inter | 14-16px | Regular (400) |
| Labels | Inter | 12px | Semibold (600) |
| Monospace | System | 12-14px | Regular (400) |

### Effects
| Effect | Description |
|--------|-------------|
| Glassmorphism | Blur(10px) + Charcoal/50 background |
| Neon Glow | 0 0 20px rgba(color, 0.5) shadow |
| Float Animation | 3s ease-in-out vertical movement |
| Glow Pulse | 2s ease-in-out opacity animation |

---

## 📱 Responsive Breakpoints

```
Mobile:   < 640px   (1 column)
Tablet:   640-1024px (2 columns)
Desktop:  > 1024px   (3 columns)
```

---

## 🔄 State Management

Each screen component receives:
```typescript
interface ScreenProps {
  onNavigate: (screen: string) => void
}
```

Screens internally manage:
- Form state (selected answers)
- Animation state (coin rewards)
- Tab state (course player tabs)
- Badge selection (profile)
- Timers (countdown, animations)

---

## 🎯 Development Tips

### Adding a New Screen
1. Create `src/screens/NewScreen.tsx`
2. Follow the component pattern
3. Import in `App.tsx`
4. Add navigation button

### Styling Guidelines
- Use Tailwind utility classes
- Follow color palette from config
- Apply glassmorphism to cards
- Add glow effects for interactive elements
- Maintain 1px borders

### Component Patterns
All screens use:
```typescript
export const ScreenName: React.FC<ScreenProps> = ({ onNavigate }) => {
  // Component logic
  return (
    // JSX with Tailwind classes
  )
}
```

---

## 🚀 Performance Considerations

- Screens lazy-loaded via navigation
- SVGs used for charts and planet (no images)
- CSS animations use GPU acceleration
- Minimal external dependencies
- Tailwind CSS optimized

---

## ✅ Testing Checklist

When testing each screen:

**Gatekeeper**
- [ ] Click all answer options
- [ ] Submit shows coin animation
- [ ] Button navigates to Dashboard
- [ ] Wallet displays correctly

**Dashboard**
- [ ] All 5 cards render
- [ ] Countdown timer counts down
- [ ] Buttons navigate correctly
- [ ] Avatar displays gradient
- [ ] Responsive on mobile/tablet

**Arcade**
- [ ] Red background grid visible
- [ ] Modal is centered
- [ ] Answer selection works
- [ ] Revive succeeds with correct answer
- [ ] Give Up returns to dashboard

**Course Player**
- [ ] Video player displays
- [ ] Tabs switch content
- [ ] Progress bar works
- [ ] AI input field functional
- [ ] Floating button visible

**Profile**
- [ ] Avatar with ring displays
- [ ] Radar chart renders
- [ ] Stats display correctly
- [ ] Badges show locked/active
- [ ] Activity feed displays

---

**Last Updated**: December 14, 2025
**Version**: 1.0
**All Screens**: ✅ Complete
