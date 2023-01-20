import { Routes, Route } from 'react-router-dom';

import Header from './Layouts/Header/Header'
import Footer from './Layouts/Footer/Footer'
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App;