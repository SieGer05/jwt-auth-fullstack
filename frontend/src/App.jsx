import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginPage from './pages/LoginPage'
import HelloPage from './pages/HelloPage'
import NotAuthorized from "./pages/NotAuthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {

  return (
    <Router>
      <Routes>

        <Route 
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        
        <Route 
          path="/hello"
          element={
            <ProtectedRoute>
              <HelloPage />
            </ProtectedRoute>
          }
        />
        
        <Route path="/not-authorized" element={<NotAuthorized />} />
      
      </Routes>
    </Router>
  )
}

export default App
