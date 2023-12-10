import '../styles/global.css';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


type Contents = {
  link: string,
  comment: string
}

const latests : Contents[] = [
  {
    link: "/politician/activity/",
    comment: "Twitter 埋め込み"
  },
  {
    link: "/supporter/history/20231208_mdtest",
    comment: "Markdownでコンテンツを記述できる。Youtube埋め込みも可能"
  }
];

export default function Page() {
  return (
    <>
      <Head>
        <title>AKTKT</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>For the future of our town, AKTKT!</p>
      </section>
      {<div>
        Latest contents.
        {latests.map(s => (
            <div key={s.link}>
              <Link href = {s.link} passHref key={s.link}>
              {s.link}   :  {s.comment} 
              </Link>
            </div>
          ))}
      </div>}
    </>
  );
}