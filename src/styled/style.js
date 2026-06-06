import styled from "styled-components";

export const Button = styled.button`
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