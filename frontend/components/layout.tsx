import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import navStyles from './Navbar.module.css';

import Link from 'next/link';

const name = 'AKTKT';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children} : {
  children : React.ReactNode,
}) {
  return (
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
          // content={`https://og-image.vercel.app/${encodeURI(
          //   siteTitle,
          // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      {
        <nav className={navStyles.nav}>
        <ul>
            <li><Link href="/">TOP</Link></li>
            <li><Link href="/politician">POLITICIAN</Link></li>
            <li><Link href="/supporter">SUPPORTER</Link></li>
            <li><Link href="/future-politician">FUTURE-POLITICIAN</Link></li>
        </ul>
        </nav>
      }
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
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
      </header>
      <main>{children}</main>
    </div>
  );
}
