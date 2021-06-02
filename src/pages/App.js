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

 // Bubble Sort
  const bubbleOnClick = async () => {
    const len = arr.length;
    for (let i = len - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        setCurrentIndex(i);
        setCurrentNext(j);
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArr([...arr]);
        }
        }
      await sleep(500);
      
    }
    setCurrentIndex(null);
    setCurrentNext(null);
  }

// Merge Sort
  const merge = async (dupArr, l, mid, r) => {
    let i = l, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= r)){
      if(dupArr[i] <= dupArr[j]){
        arr.push(dupArr[i++])
      } else {
        arr.push(dupArr[j++])
      }
    }

    while(i <= mid){
      arr.push(dupArr[i++])
    }

    while(j <= r){
      arr.push(dupArr[j++])
    }
    
    for(i=l;i<=r;i++){
      dupArr[i] = arr[i - l]
      
    }
    
    

  }

  const mergeSortSlicer = (dupArr, l, r) => {
    if(l >= r) 
        return 
    
    const mid = Math.floor((l + r) / 2)

    mergeSortSlicer(dupArr, l, mid)
    mergeSortSlicer(dupArr, mid + 1, r) 
    
    merge(dupArr, l, mid, r)
    
    
  }

  const mergeOnClick = async () => {
    const dupArr = arr
    mergeSortSlicer(dupArr, 0, dupArr.length - 1)
    console.log("dupArr sorted", dupArr)
    setArr([...dupArr])
    await sleep(500)
      
  }
    
    
    
    
  return (
    <div className="App">
      <Header
        rangeChange={ rangeChange }
        updateList={ updateList }
        bubbleOnClick={ bubbleOnClick } 
        mergeOnClick={ mergeOnClick }
      />
      <Main
        data={arr}
        currentIndex={currentIndex}
        nextIndex={currentNext} />
    </div>
  );
}

export default App;
