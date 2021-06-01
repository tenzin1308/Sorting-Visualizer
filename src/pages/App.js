import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Main from './Main';

import './App.style.css';
 
import { sleep } from '../Helper/Sleep';

function App() {

  const [size, setSize] = useState(5);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    updateList();
  }, [size])

  const updateList = () => {
    console.log("updating list");
    const randomArr = Array.from({ length: size }, () => Math.floor(Math.random() * 500));
    console.log("App -> size", size);
    console.log("updateList -> randomArr", randomArr);
    setArr(randomArr);
  }

  const rangeChange = (event, range) => {
      setSize(range);
  };

 
  const bubbleOnClick = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i + 1);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                setArr([...arr]);
              }
        }
      await sleep(1000);
      
    }
    setCurrentIndex(null);
    setCurrentNext(null);
  }


  return (
    <div className="App">
      <Header
        rangeChange={ rangeChange }
        updateList={ updateList }
        bubbleOnClick={bubbleOnClick} />
      <Main
        data={arr}
        currentIndex={currentIndex}
        nextIndex={currentNext} />
    </div>
  );
}

export default App;
