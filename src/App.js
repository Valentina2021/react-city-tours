import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

import TourList from './components/TourList';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <TourList></TourList>
    </div>
    

  );
}

export default App;
