import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Accommodation from './Pages/AccommodationCard/Accomodation'
import Error from './Pages/Error/Error';

import Header from './Layouts/Header/Header'
import Footer from './Layouts/Footer/Footer'


function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={< Accommodation />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


export default App;