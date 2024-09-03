import React from 'react';
import HomePage from './components/home';
import WhatsAppButton from './components/Whatsapp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsArticle from './components/news';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={< NewsArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
         
         <WhatsAppButton phoneNumber="9014017995" />
      </BrowserRouter>

  
     
    </div>
  );
}

export default App;
