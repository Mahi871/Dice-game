import React from 'react'
import Score from './Score';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import Rules from './Rules';

 const GamePlay =()=> {

  const [count,setCount ] =useState(0);
    const [SelectedNumber, setSelectedNumber] = React.useState();
    const [CurrentDice , setCurrentDice] =useState(1);
    const[error,setError] =useState();

      const generateRandomNumber = (min ,max) => {

    console.log(Math.floor (Math.random() * (max - min) + min))
         // Corrected: Use 'Math' instead of 'math'
         return Math.floor (Math.random() * (max - min) + min);
  };

const resetScore = () => {
    setCount(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
};

const roleDice = ()=>{
  if(!SelectedNumber){
    setError ("you have not selected any number")
    return;
  }
  setError("");
  // setError ={setError}
  const randoNumber = generateRandomNumber(1,7);
  
  setCurrentDice((prev)=>randoNumber)

   

  if(SelectedNumber==randoNumber){

    setCount(prev=> prev + randoNumber);
  }
  else{
    setCount(prev => prev - 2);
  }
  setSelectedNumber(undefined)

};
    return (
      <MainContainer>
        <div className='Top'>
          <Score count={count} />
          <NumberSelector
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber} />
        </div>

        <RoleDice  
        CurrentDice={CurrentDice}
        roleDice={roleDice}/>
     


        <div className="btns">
          <button onClick={resetScore} className='btn outlined'>Reset Game</button>
          <button className='btn'>Show Rules</button>
        </div>
      
        <Rules/>
        
       
       
      </MainContainer>
    );
  }               

export default GamePlay;
const MainContainer = styled.div`
    padding-top:50px;

  .Top {
    display: flex;
    justify-content: space-around;
    align-items: end;
   
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 2rem;
  }

  .btn {
    padding: 15px 20px;
    background-color: black;
    color: white;
    border: 2px solid transparent;   
    border-radius: 100px;
    min-width: 220px;
    font-size: 18px;
    transition: all 0.3s ease-in;
    cursor: pointer;

    &:hover {
      background-color: white;
      border: 2px solid black;
      color: black;
    }

    &.outlined {
      background-color: white;
      border: 2px solid black;
      color: black;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }

`;