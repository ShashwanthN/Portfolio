import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';


import Home from './pages/home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import KnowMe from './pages/KnowMe';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/KnowMe" element={<KnowMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
        <div className='w-4/5 mx-auto'>
        {/* <Footer/> */}
        </div>
       
      </div>
    </Router>
  
  );
}

export default App;
