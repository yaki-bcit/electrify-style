import styled from "styled-components";

export const ColorDiv = styled.div`
background-color: ${props => props.bgColor};
margin: 50px;
padding: 25px;
border-style: solid;
height: 150px;
width: 150px;
text-align: center;
padding: 60px 0;
color: ${props => props.bgColor == "#000000"? "white" : "black"};
border-radius: 1em;
`;


export const SurroundingColorDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;

`;