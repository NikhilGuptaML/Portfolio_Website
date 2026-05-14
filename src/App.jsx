import SplashCursor from './components/SplashCursor/SplashCursor'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
      <SplashCursor RAINBOW_MODE={false} COLOR="#ffffff" />
      <HomePage />
    </>
  )
}