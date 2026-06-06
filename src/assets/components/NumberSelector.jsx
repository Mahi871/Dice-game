import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const NumberSelector = ({ error,SelectedNumber ,setSelectedNumber}) => {

    const arrNumber=[1,2,3,4,5,6];

   
    
  return (

    <NumberSelectorContiner>

<p className='error'>{error}</p>

    <div className='go'>
        {arrNumber.map((value ,i)=>(
            <Box
         $isSelected={value==SelectedNumber}   
            key={i} onClick={ ()=> setSelectedNumber(value)}> {value} </Box>
        ))}
      {/* <Box> 2 </Box>
      <Box> 3 </Box>    
        <Box> 4 </Box>
        <Box> 5 </Box>
        <Box> 6 </Box> */}
       

    </div>
    <p>Selected Number</p>
    </NumberSelectorContiner>


  )         
}
 
const NumberSelectorContiner=styled.div `

.error{
color:red;
font-weight:bold;
}
     
    display:flex;
    flex-direction:column;
    align-items:end;
    cursor:pointer;
    
.go{
    display:flex;
    gap:24px;
    


}
    p{
    font-size:24px;
    font-weight: ;
    
    
  
   
    }
`;

export default NumberSelector

const Box = styled.div`
height: 72px;
width: 72px;
border : 1px solid black;
border-radius: 10px;
display: grid;
place-items: center;
font-size: 32px;
font-weight: 600;
background-color:${(props) => (props.$isSelected ? "black":"white")};
color:${(props) => (!props.$isSelected ? "black":"white")};

`;