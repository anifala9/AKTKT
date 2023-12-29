import Link from "next/link";
import { getSlugsInPosts } from "../../../lib/utilPosts"

const dir = "/politician/creed"

export default function Page () {
  const slugs = getSlugsInPosts(dir);
  return (
      <div>
        <h1>信条ページ</h1>
        <div>
          {slugs.map(s => (
            <div key={s.slug}>
              <Link href = {'/politician/creed/' + s.slug} passHref key={s.slug}>
              {s.slug}
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}