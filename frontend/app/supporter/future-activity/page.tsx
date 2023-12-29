import Link from "next/link";
import { getSlugsInPosts } from "../../../lib/utilPosts"

const dir = "/supporter/future-activity"

export default function Page () {
  const slugs = getSlugsInPosts(dir);
  return (
      <div>
        <h1>活動予定</h1>
        <div>
          {slugs.map(s => (
            <div key={s.slug}>
              <Link href = {'/supporter/future-activity/' + s.slug} passHref key={s.slug}>
              {s.slug}
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}