import React from 'react';
import Contact from './component/Contact';
import Gallery from './component/Gallery';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Gallery/>
      <Contact />
    </>
  )
}

export default App