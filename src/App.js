import React from 'react';
import './App.css';
import { Education } from './features/edu/Education';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/contacts/Contacts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Education />}>
              <Route index element={<Education />} />
            </Route>
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
