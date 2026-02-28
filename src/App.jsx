import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Solar from './pages/Solar.jsx';
import Wind from './pages/Wind.jsx';
import Hybrid from './pages/Hybrid.jsx';
import EpcServices from './pages/EpcServices.jsx';
import OmServices from './pages/OmServices.jsx';
import Consulting from './pages/Consulting.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/epc-services" element={<EpcServices />} />
        <Route path="/om-services" element={<OmServices />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
              </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
