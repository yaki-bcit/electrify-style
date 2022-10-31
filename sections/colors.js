import styles from "../styles/Home.module.css"
import { ColorDiv, SurroundingColorDiv } from "../components/ColorDiv"
import Container from "react-bootstrap/Container"

export default function Colors() {
  return (
    <>
      <Container fluid="md">
        <h2 className={styles.pagesection} id="colors">
          Colors
        </h2>
      </Container>
      

        <SurroundingColorDiv className={styles.grid}>
          <ColorDiv bgColor={"#FCDE97"}>
            <p>#FCDE97</p>
          </ColorDiv>
          <ColorDiv bgColor={"#CE1228"}>
            <p>#CE1228</p>
          </ColorDiv>
          <ColorDiv bgColor={"#C2E1E8"}>
            <p>#C2E1E8</p>
          </ColorDiv>
          <ColorDiv bgColor={"#3B8D95"}>
            <p>#3B8D95</p>
          </ColorDiv>
          <ColorDiv bgColor={"#6C6C6C"}>
            <p>#6C6C6C</p>
          </ColorDiv>
          <ColorDiv bgColor={"#000000"}>
            <p>#000000</p>
          </ColorDiv>
          <ColorDiv bgColor={"#F8F5F4"}>
            <p>#F8F5F4</p>
          </ColorDiv>
        </SurroundingColorDiv>


      <Container fluid="md">
        <p style={{ fontSize: 20 }}>
          The colours used by our website are a combination of colours most used
          by EV makers in the united states. We decided to go with the colours
          that other EV makers in the united states use so that we can blend in
          with the other EV makers throughout the web.
        </p>
        <p style={{ fontSize: 20 }}>
          Each one of these colours serves a purpose.
        </p>
        <p style={{ fontSize: 20 }}>
          FCDE97 and CE1228: These two colours are chosen because they are great
          at creating contrast with the different backgrounds and the pictures
          of the road. In most of the EV maker websites, you can see that their
          cars are painted in similar colours to make contrast with the lifeless
          and unsaturated background colours.
        </p>
        <p style={{ fontSize: 20 }}>
          000000 (Black): In most of the EV maker websites you can see that
          their text is in black to be more noticeable and give it a more
          professional feel and look.
        </p>
        <p style={{ fontSize: 20 }}>
          F8F5F4 (White): We are going to use this colour for our question
          backgrounds, so the text colour and the background make a nice
          contrast and attract the user’s eyes. We are also going to use this
          colour for our backgrounds, so our website gives the same feeling as
          Nike and Apple’s websites.
        </p>
        <p style={{ fontSize: 20 }}>
          C2E1E8 and 6C6C6C and 3B8D95: We are going to be using these colours
          for our logo and our button backgrounds and highlights in our app.
        </p>
      </Container>
    </>
  );
}
