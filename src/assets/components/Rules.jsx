import React from 'react'
import styled from 'styled-components'

export const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Game</h2>
        <div className="text">
            <p>
                 Select any number<br />
                 Click on dice image<br />
                 After clicking, if selected number equals dice number, you will get same points as dice
            </p>
            <p>if you get wrong then 2 points will be reduce</p>
        </div>
    </RulesContainer>
  )
}
export default Rules

const RulesContainer=styled.div`

backgroud-color:red;
padding:20px;

h2{
font-size:24px;
}
.text{
    margin-top: 24px;

    p {
        margin-bottom: 24px;
    }

    p:last-child {
        margin-bottom: 0;
    }
}


`;
