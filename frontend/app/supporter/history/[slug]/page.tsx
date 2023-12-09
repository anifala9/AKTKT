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



export default function Page({ params } : any ) {
  const post = getPost(params);
  
  return (
      //<article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
      //  <h1>{props.frontMatter.title}</h1>

        //{/* @ts-expect-error Server Component*/}
        <>
          <MDXRemote source={post.content} options={{...getMdxOptions()}}/>
        </>
  )
      //</article>
}