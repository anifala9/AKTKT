'use client'

import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
//import navStyles from './Navbar.module.css';

import Header from '../components/header';




const name = 'AKTKT';

export default function Layout({ children} : {
  children : React.ReactNode,
}) {
  return (
    <html lang = "ja">
    <body>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="AKTKT"
          content="AKTKT develepment page"
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
        />
      </Head>
      <Header/>
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
      </header>
      <main>{children}</main>
    </div>
    </body>
    </html>
  );
}

