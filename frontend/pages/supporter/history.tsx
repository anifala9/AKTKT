import Link from "next/link";
import utilStyles from '../../styles/utils.module.css';

export default function supporterHistory() {
  return (
      <div>
        <h1>This is supporter's history page</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/supporter/mdtest">Markdown Test page</Link>
          </li>
        </ul>
      </div>
  )
}