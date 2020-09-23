import React, {useState, useEffect} from 'react';

console.log("*** Pre-render ***")

const Lifecycle = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(()=>{
    console.log("useEffect [] first time")
    return () => {
      console.log('Cleanup useEffect[]')
    }
  },[]);

  useEffect(()=>{
    console.log("useEffect no dependency")
    return () => {
      console.log('Cleanup useEffect no dependency')
    }
  });

  useEffect(()=>{
    console.log("useEffect [counter1]")
    return () => {
      console.log('Cleanup useEffect [counter1]')
    }
  },[counter1]);

  useEffect(()=>{
    console.log("useEffect [counter2]")
    return () => {
      console.log('Cleanup useEffect [counter2]')
    }
  },[counter2]);

  useEffect(()=>{
    console.log("useEffect [counter1, counter2]")
    return () => {
      console.log('Cleanup useEffect [counter1, counter2]')
    }
  },[counter1, counter2]);

  return (
    <div>
      <h1>Clicks C1: {counter1}</h1>
      <h1>Clicks C2: {counter2}</h1>
      <button onClick={()=>setCounter1(counter1+1)}>Increment C1</button>
      <button onClick={()=>setCounter2(counter2+1)}>Increment C2</button>
    </div>
  )
}

export default Lifecycle;