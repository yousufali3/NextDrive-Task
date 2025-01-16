import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Cta from './pages/Cta';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Cta />
        <Footer />
      </div>
    </Router>
  );
}

export default App;