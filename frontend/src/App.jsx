import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import AskAI from "./pages/AskAI";
import "./index.css";

function App() {
  return (
  <Router>
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            Frontdesk AI Supervisor
          </h2>
          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/knowledge" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Knowledge Base
            </Link>
            <Link 
              to="/ask" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-sm"
            >
              Ask AI
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/knowledge" element={<KnowledgeBase />} />
      <Route path="/ask" element={<AskAI />} /> 
    </Routes>
  </Router>
);
}

export default App;
