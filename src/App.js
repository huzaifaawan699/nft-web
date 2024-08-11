import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Downloads from './components/Downloads/Downloads';
import Support from './components/Support/Support';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';



const App = () => {
  return (
    <div className='App'>
      <div className='background'>
      <Navbar />
      <Home/>
      </div>
      <Downloads/>
      <Support/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
