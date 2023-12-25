import { MDXRemote } from "next-mdx-remote/rsc"
import { getMdxSlugs, getPost } from "../../../../lib/utilPosts"
import { GetAllMDXComponents, getMdxOptions } from "../../../../lib/mdxHelper" 

const dir = "/supporter/future-activity"

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
    <MDXRemote source={post.content} components={{...GetAllMDXComponents()}}  options={{...getMdxOptions()}}/>
  )
}