import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ModulePage from './pages/ModulePage'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/module/:id/:page" element={<ModulePage />} />
        <Route path="/module/:id" element={<ModulePage />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  )
}

export default App
