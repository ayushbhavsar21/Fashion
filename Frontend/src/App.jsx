import './App.css'
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Buyerregister from './components/Buyerregister';
import Sellerregister from './components/Sellerregister';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/SignIn" element={<SignIn />} />      
      <Route exact path="/Buyerregister" element={<Buyerregister />} />      
      <Route exact path="/Sellerregister" element={<Sellerregister />} />
      <Route exact path="/Product" element={<Product />} />
      </Routes>
    </Router>
  )
}
export default App
