import '../styles/global.css';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function Page() {
  return (
    <>
      <Head>
        <title>AKTKT</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>For the future of our town, AKTKT!</p>
      </section>
      {}
    </>
  );
}