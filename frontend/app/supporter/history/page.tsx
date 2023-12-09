import Link from "next/link";
import { getSlugsInPosts } from "../../../lib/utilPosts"

const dir = "/supporter/history"

export default function Page () {

  const slugs = getSlugsInPosts(dir); 
  console.log("here");
  console.log(slugs)
  return (
      <div>
        <h1>This is supporter's history page</h1>
        <div>
          {slugs.map(s => (
            <Link href = {'/supporter/history/' + s.slug} passHref key={s.slug}/>
          ))}
        </div>
      </div>

     
  )
}