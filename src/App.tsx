import React from 'react';
import { Users, GraduationCap, Building2, Heart, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Policies from './components/Policies';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Policies />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;