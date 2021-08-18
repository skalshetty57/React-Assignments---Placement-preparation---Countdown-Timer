import React, { Component, useState, useEffect } from "react";
// import '../styles/App.css';

const App = () => {
  // write your code here 
  const [currTime,setCurrTime]=useState(0);

  useEffect(()=>{
    if(currTime>0){
    let timeInterval=setTimeout(()=>{
      setCurrTime(currTime-1)
    },1000);

    return ()=>clearTimeout(timeInterval);
  }
  });

  let handleKeyDown=(e)=>{
    // console.log(e.keyCode);
    if(e.keyCode===13){
      let temp=Number(e.target.value);
      // console.log(temp);
      let passed=false;
      if(Number.isInteger(temp) && !Number.isNaN(temp)){
        temp=(Math.floor(temp));
        setCurrTime(temp);
        passed=true;
      }
      if(passed===false){
        setCurrTime(0);
      }
    }
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(e)=>{handleKeyDown(e)}} /> sec.
        </h1>
      </div>
      <div id="current-time">{currTime}</div>
    </div>
  )
}


export default App;
