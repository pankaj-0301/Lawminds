import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Security from './pages/Security';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
