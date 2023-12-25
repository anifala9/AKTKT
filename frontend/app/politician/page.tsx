import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export default function Page() {
  return (
      <div>
        <h1>政治家ページ</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/politician/activity">活動</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/politician/creed">信条</Link>
          </li>
        </ul>
      </div>
  )
}