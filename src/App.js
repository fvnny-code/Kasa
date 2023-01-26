import { Routes, Route } from 'react-router-dom';

import Header from './Layouts/Header/Header'
import Home from './Pages/Home/Home';
import Accommodation from './Pages/AccommodationCard/Accomodation'
import Footer from './Layouts/Footer/Footer'
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* création de la route pour accéder à la page Location */}
          <Route path="/location/:id" element={< Accommodation />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


export default App;