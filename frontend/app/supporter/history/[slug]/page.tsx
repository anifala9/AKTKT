import { readFileSync } from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
import { getFilePathInPosts, getFilesInPosts } from "../../../../lib/utilPosts"
import { getMdxOptions } from "../../../../lib/mdxHelper" 

const dir = "/supporter/history"

export async function generateStaticParams() {
  const files = getFilesInPosts(dir)
  const paths = files.map(f => ({
    slug : f.replace('.mdx', '')
  }))
  return paths;
}

function getPost({ slug } : {slug : string}) {
  const filePath = getFilePathInPosts(path.join(dir, slug + '.mdx'));
  const file = readFileSync(filePath, 'utf-8')

  const {data : frontMatter, content} = matter(file);

  return  {
    frontMatter,
    slug,
    content
  }
} 

type Prop = {
  params : {slug : string}, 
  searchParams: 
    { [key: string]: string | string[] | undefined };
}

export default function Page(prop : Prop ) {
  const post = getPost(prop.params);
  
  return (
    <MDXRemote source={post.content} options={{...getMdxOptions()}}/>
  )
}