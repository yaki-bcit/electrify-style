import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import evLogo from '../public/evLogo.svg'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';



// Jane
export default function Logo() {
    return (
        <>
            <Container fluid="md">
                <Image src={evLogo}
                    alt='image of logo'
                    width={60}
                    height={60}
                />
                <p> Electrify </p>
                <h3>Logo</h3>
                <p style={{ fontSize: 20 }}>The car with a plug mean electric car. The 3 prongs symbolize the letter Electrify
                    which means "Electrify". The color blue is our theme color so we choose it to be the main color for our logo.
                    The 2 yellow dots represent the sun and the sun is the source of energy, and the 2 yellow dots of the car means the car is fullly charged and ready to go.
                </p>
                <p>The go to deisign is chosen to use the Electri car logo by itself with out the work
                    Electrify. The logo is used in the header of the website and the footer of the website.

                </p>
                <div className="h-25 p-1" style={{ borderRadius: 50, backgroundColor: "#C2E1E8" }} />

                <div>Electrify </div>
            </Container>
              <Stack direction="horizontal" gap={3} className=" mx-auto">
                <div className="w-45 p-3 " style={{ borderRadius: 50, backgroundColor: "#3B8D95" }} /> 
                <div className="w-45 p-3" style={{ borderRadius: 50, backgroundColor: "#EDD144" }} />
                <div className="w-45 p-3 " style={{ borderRadius: 50, backgroundColor: "#C2E1E8" }} />
                <div className="w-45 p-3" style={{ borderRadius: 50, backgroundColor: "#F2F2F2" }} />
              </Stack>
        </>


    )
}