import Link from "next/link";
import utilStyles from '../../styles/utils.module.css';

export default function supporterIndex() {
  return (
      <div>
        <h1>後援会</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/supporter/history">活動履歴</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/supporter/future-activity">活動予定</Link>
          </li>
        </ul>
      </div>
  )
}