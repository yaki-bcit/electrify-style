import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Logo from '../sections/logo'
import Grid from '../sections/grid'
import Typography from '../sections/typography'
import Graphics from '../sections/graphics'
import Colors from '../sections/colors'

// Yevgeniy
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Style Guide | Electrify</title>
        <meta name="description" content="Style guide for the Electrify web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo/>
        <hr/>
        <Colors/>
        <hr/>
        <Typography/>
        <hr/>
        <Grid/>
        <hr/>
        <Graphics/>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
