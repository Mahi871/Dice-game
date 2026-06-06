import React from 'react'

import styled from 'styled-components'

export const Score = ({count}) => {
  return (
    <ScoreContainer>
        <h1>{count}</h1>
        <p>Total score</p>
    </ScoreContainer>
  )
}

export default Score;

const ScoreContainer = styled.div`
  max-width: 150px;
  text-align: center;
 
  

   background-color: ;

h1{
    font-size: 100px;
    line-height: 100px;
    margin:0 10px;
 
}

p{
    font-size: 24px;
    font-weight: 500;
   
}

`;
