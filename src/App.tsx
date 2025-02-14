import { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import Pages
import Landing from './pages/Landing'
// Import Components
const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='bg-[#030712] w-full h-screen m-auto justify-center items-center'>
      <Router>
        <Header />
        <hr className="border-t border-gray-500 w-full" />
        <Suspense fallback={<div>Landing...</div>}>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </Suspense>
        <hr className="border-t border-gray-500 w-full" />
        <Footer />
      </Router>
    </div>
  )
}

export default App
