import React from 'react';



import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import Router from './Router';


function App() {
  return (
    <div className='app'>
      <Header />
      <main>
       < Router />
      </main>
      <Footer />
    </div>
  )
}


export default App;