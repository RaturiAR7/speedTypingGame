import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import useHook from './useHook';


const App = () => {
  const {input,runGame,countDown,wordCount,inputRef,startGame,onchangeHandler}=useHook();


  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea ref={inputRef} disabled={countDown===0?true:false} value={input} onChange={onchangeHandler} name="" id="" cols="30" rows="10"/>
      <h4>Time Remaining:{countDown}</h4>
      <button onClick={startGame} disabled={runGame}>Start</button>
      <br />
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}
 
export default App;