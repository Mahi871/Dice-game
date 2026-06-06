import React from 'react'
import styled from 'styled-components'  
export const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/diace.png" alt="" />
      </div>
     
      <div className='text'>
        <h1>
        Dice game
        </h1>
         <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}
export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: auto;
height: 100vh;
align-items: center;

.text h1{

  font-size: 96px;
  white-space: nowrap;
  }

`;


const Button = styled.button`
display:flex;

padding: 15px 20px;
align-items: center;
justify-content: center;
background-color: black;
color: white;
border: none;   
cursor: pointer;
border-radius: 100px;
min-width: 220px;
font-size: 18px;
 border: 5px solid black transparent;
 transition: background 0.5s ease-in;
 cusror: pointer;

&:hover{
  background-color: white;
  border: 2px solid black;
  color: black;
  transition: background 0.3s ease-in;
}

`;