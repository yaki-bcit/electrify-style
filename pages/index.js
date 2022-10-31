import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavBar } from '../sections/navBar'

import Logo from '../sections/logos'
import Layout from '../sections/layout'
import Typography from '../sections/typography'
import Graphics from '../sections/graphics'
import Colors from '../sections/colors'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Style Guide | Electrify</title>
        <meta name="description" content="Style guide for the Electrify web application" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <Logo />
          <hr  className="w-100 p-3 " style={{color:"black" }} id="colors" />
        <Colors />
          <hr className="w-100 p-3 " style={{color:"black" }} id="typography" />
        <Typography />
          <hr className="w-100 p-3 " style={{color:"black" }} id="grid" />
        <Layout />
          <hr className="w-100 p-3 " style={{color:"black" }} />
        <Graphics />

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
