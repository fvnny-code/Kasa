import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Accommodation from './Pages/AccommodationCard/Accomodation';
import Error from './Pages/Error/Error';
import About from './Pages/About/About';

export default function Router(){
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    )
}