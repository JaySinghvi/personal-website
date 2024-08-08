import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Finance from './pages/Finance';
import Contact from './components/Contact';
import Entertainment from './pages/Entertainment';
import Aviation from './pages/Aviation';
import Energy from './pages/Energy'
import Healthcare from './pages/Healthcare'
import News from './pages/News'
import Sports from './pages/Sports'
import Tech from './pages/Tech'
import ScrollToTop from './components/ScrollToTop';
import Publication from "./components/Publication"

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      
        </div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><About /><Technologies /><Publication /><Experience /><Projects /><Contact /></>} />
            <Route path="/finance" element={<Finance />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path="/aviation" element={<Aviation />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/news" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>  
  )
}

export default App







