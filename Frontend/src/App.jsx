import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App
