import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import evLogo from '../public/evLogo.svg'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'



// Jane
export default function Logo() {
    return (
        <>
            <Container fluid="md">
                <h2 className={styles.pagesection} id="logo">
                    Logo
                </h2>

                <div style={{ margin: "3em" }}>
                    <Image src={evLogo}
                        alt='Electrify logo'
                        width={128}
                        height={128}
                        margin={10}
                    />
                </div>

                <p style={{ fontSize: 20 }}>
                    The car with a plug means electric car. The 3 prongs symbolize the letter "E" in "Electrify". 
                    The greenish-blue is our theme color so we choose it to be the main color for our logo.
                    The 2 yellow dots represent the sun and the sun is the source of energy, and the 2 yellow dots 
                    of the car means the car is fully charged and ready to go.
                </p>

                <p style={{ fontSize: 20 }}>
                    The go to design is chosen to use the Electric car logo by itself without the word
                    Electrify. The logo is used in the header and the footer of the website.
                </p>

                <div className="h-25 p-1" style={{ borderRadius: 50, backgroundColor: "#C2E1E8", margin: "2em 0" }} />
            </Container>
              <Stack direction="horizontal" gap={3} className="mx-auto" style={{margin: "1em 0"}}>
                <div className="w-45 p-3 " style={{ borderRadius: 50, backgroundColor: "#3B8D95" }} /> 
                <div className="w-45 p-3" style={{ borderRadius: 50, backgroundColor: "#EDD144" }} />
                <div className="w-45 p-3 " style={{ borderRadius: 50, backgroundColor: "#C2E1E8" }} />
                <div className="w-45 p-3" style={{ borderRadius: 50, backgroundColor: "#F2F2F2" }} />
              </Stack>
        </>


    )
}