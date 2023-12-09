import { MDXRemote } from "next-mdx-remote/rsc"
import { getMdxSlugs, getPost } from "../../../../lib/utilPosts"
import { getMdxOptions } from "../../../../lib/mdxHelper" 

const dir = "/supporter/history"

export async function generateStaticParams() {
  return getMdxSlugs(dir);
}



type Prop = {
  params : {slug : string}, 
  searchParams: 
    { [key: string]: string | string[] | undefined };
}

export default function Page(prop : Prop ) {
  const post = getPost(prop.params.slug, dir);
  
  return (
    <MDXRemote source={post.content} options={{...getMdxOptions()}}/>
  )
}