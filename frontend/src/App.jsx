import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginPage from './pages/LoginPage'
import HelloPage from './pages/HelloPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
  )
}

export default App
