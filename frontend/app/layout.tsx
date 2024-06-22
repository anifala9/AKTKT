'use client'

import Head from 'next/head';
import styles from './layout.module.css';
import Header from '../components/header';

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
          name="#安芸高田を動かそう"
          content="Let's move AKTKT!"
        />
      </Head>
      <Header/>
      <header className={styles.header}>
          <>
          </>
      </header>
      <main>{children}</main>
    </div>
    </body>
    </html>
  );
}

