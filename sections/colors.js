import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import colorPhoto from "../public/Screenshot 2022-10-22 212409.png";
import styled from "styled-components";

// Sohrab
export default function Colors() {
  // return <><Image src={colorPhoto} /></>;
  
  const ColorDiv = styled.div`
  background-color: ${props => props.bgColor};

  `;


  return (
    <>
      <div>
        <ColorDiv bgColor={"#FCDE97"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"#CE1228"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"#C2E1E8"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"#3B8D95"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"yellow"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"yellow"}>
          <p>bow</p>
        </ColorDiv>
        <ColorDiv bgColor={"yellow"}>
          <p>bow</p>
        </ColorDiv>
        
      </div>
    </>
  )
}
