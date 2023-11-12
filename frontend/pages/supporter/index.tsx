import Link from "next/link";
import utilStyles from '../../styles/utils.module.css';

export default function supporterIndex() {
  return (
      <div>
        <h1>This is supporter's root page</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/supporter/history">HISTORY</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/supporter/future-activity">FUTURE-ACTIVITY</Link>
          </li>
        </ul>
      </div>
  )
}