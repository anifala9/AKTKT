import fs from "fs";
import matter from "gray-matter";
import path from "path"

const postsDirectory = path.join(process.cwd(), "posts");

const getFilePathInPosts = (filePath : string) => {
  return path.join(postsDirectory, filePath);
}

const getFilesInPosts = (dirPath : string) => {
  const dir = path.join(postsDirectory, dirPath);
  return fs.readdirSync(dir);
}

export const getMdxSlugs = (dirPath : string) => {
  const files = getFilesInPosts(dirPath)
  const paths = files.map(f => ({
    slug : f.replace('.mdx', '')
  }))
  return paths;
}

export const getSlugsInPosts = (dirPath : string) => {
  const files = getFilesInPosts(dirPath);
  const slugs = files.map(f => {
    const content = fs.readFileSync(path.join(postsDirectory, dirPath, f), 'utf-8');
    const {data : frontMatter } = matter(content)
    return {
      meta : frontMatter,
      slug : f.replace('.mdx', '')
    }
  })
  return slugs;
}


export const getPost = (slug: string, dirPath: string ) => {
  const filePath = getFilePathInPosts(path.join(dirPath, slug + '.mdx'));
  const file = fs.readFileSync(filePath, 'utf-8')

  const {data : frontMatter, content} = matter(file);

  return  {
    frontMatter,
    slug,
    content
  }
} 
