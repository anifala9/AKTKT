import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export default function politicianIndex() {
  return (
      <div>
        <h1>This is politician's root page</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/politician/activity">ACTIVITY</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/politician/creed">CREED</Link>
          </li>
        </ul>
      </div>
  )
}