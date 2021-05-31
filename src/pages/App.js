import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Main from './Main';

import './App.style.css';
 
function App() {

  const [arr, setArr] = useState([23, 2, 32, 24, 1]);
   
  return (
    <div className="App">
      <Header />
      <Main data={arr} />
    </div>
  );
}

export default App;
