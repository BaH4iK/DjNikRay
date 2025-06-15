import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import DeveloperCTA from './components/DeveloperCTA';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // минимальная длительность заставки 1500ms для эффекта
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </BrowserRouter>
          <DeveloperCTA />
        </>
      )}
    </>
  );
}
