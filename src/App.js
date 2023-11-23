import React from 'react';
import './App.css';
import { Education } from './features/edu/Education';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import Career from './components/career/Career';
import College from './components/college/College';
import About from './components/about/About';
import FindAJob from './components/findAJob/FindAJob';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/education/" element={<Education />}>
              <Route index element={<Education />} />
            </Route>
            <Route path='/contacts' element={<Contacts />} /> 
            <Route path='/career/:name' element={<Career />} />
            <Route path='/college/:name' element={<College />} />
            <Route path='/about' element={<About />} />
            <Route path='/findAJob' element={<FindAJob/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
