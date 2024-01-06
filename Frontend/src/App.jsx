import './App.css'
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Buyerregister from './components/Buyerregister'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/SignIn" element={<SignIn />} />
      
      <Route exact path="/Buyerregister" element={<Buyerregister />} />
      </Routes>
    </Router>
  )
}
export default App
