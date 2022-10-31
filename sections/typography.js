import Head from 'next/head'
import Image from 'next/image'
import Container from "react-bootstrap/Container"
import styles from '../styles/Home.module.css'

// Kevin
export default function Typography() {
  return (
    <Container fluid="md">
      <h2 className={styles.pagesection} id="typography">
        Typography
      </h2>
      <h1 className="typography-headings">
        Primary Font: Quicksand
      </h1>
      <p className='typography-paragraphs'>
        <b>https://fonts.google.com/specimen/Quicksand?query=quicksand</b><br></br>
        Quicksand is a sans serif type family of three weights.
        It is influenced by the geometric-style sans serif faces
        that were popular during the 1920s and 30s. This font was
        chosed for the geometric forms that have been optically
        corrected for better legibility.
      </p>

      <h1 className="typography-headings">
        Secondary Font: Montserrat
      </h1>
      <p className="typography-paragraphs">
        <b>https://fonts.google.com/specimen/Montserrat?query=montserrat</b><br></br>

        If Quicksand is not available as the font, set Montserrat as the secondary font.
        If neither Quicksant nor montserrat are available, set the font to sans serif.
      </p>

      <h1 className="typography-headings">
        Heading Font: Inter
      </h1>
      <p className="typography-paragraphs">
        <b>https://fonts.google.com/specimen/Inter?vfquery=inter</b><br></br>
        Inter features a tall x-height to aid in readability of mixed-case and
        lower-case text. Several OpenType features are provided as well,
        like contextual alternates that adjusts punctuation depending
        on the shape of surrounding glyphs.

        This font is chosen for its modern look and legibility
      </p>

      <h1 className="typography-headings">
        Headings
      </h1>
      
      <p className='typography-xl text-center' style={{ fontSize: "4.5rem", marginBottom: 0 }}>
        Headings XL
      </p> 
      <p className='text-center'>
        Font Size: 72, 4.5 rem
      </p>
      
      <p className="typography-L text-center" style={{ fontSize: "4rem", marginBottom: 0 }}>
        Headings L
      </p>
      <p className='text-center'>
        Font Size: 64, 4 rem
      </p>
      
      <p className="typography-M text-center" style={{ fontSize: "3.5rem", marginBottom: 0 }}>
        Headings M
      </p>
      <p className='text-center'>
        Font Size: 52, 3.5 rem
      </p>
      
      <p className="typography-S text-center" style={{ fontSize: "3rem", marginBottom: 0 }}>
        Headings S
      </p>
      <p className='text-center'>
        Font Size: 48, 3.0 rem
      </p>

    </Container>
  )
}