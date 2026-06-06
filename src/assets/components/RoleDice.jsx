
import styled from 'styled-components'

const RoleDice = ({roleDice ,CurrentDice}) => {

      


  return (
    <DiceContainer>
    <div className='dice' onClick= {roleDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png  `} alt="" />
    </div>
    <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

 const DiceContainer = styled.div`
 display:flex;
 margin-top:48px;
 flex-direction:column;
 align-items:center;

p{
font-size:24px;
}

.dice{
cursor:pointer;
}`
