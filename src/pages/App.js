import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Main from './Main';

import './App.style.css';
 
function App() {

  // const [arr, setArr] = useState([230, 20, 302, 204, 10]);
  const [size, setSize] = useState(5);
    const [arr, setArr] = useState([]);

    useEffect(() => {
      updateList();
    }, [size])

    const updateList = () => {
      console.log("updating list");
      const randomArr = Array.from({ length: size }, () => Math.floor(Math.random() * 500));
      console.log("App -> size", size);
      console.log("updaateList -> randomArr", randomArr);
      setArr(randomArr);
    }
  
    const rangeChange = (event, range) => {
        setSize(range);
    };
  return (
    <div className="App">
      <Header rangeChange={rangeChange} updateList={updateList}/>
      <Main data={arr} />
    </div>
  );
}

export default App;
