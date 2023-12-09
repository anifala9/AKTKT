import fs from "fs";
import matter from "gray-matter";
import path from "path"

const postsDirectory = path.join(process.cwd(), "posts");

export const getFilePathInPosts = (filePath : string) => {
  return path.join(postsDirectory, filePath);
}

export const getFilesInPosts = (dirPath : string) => {
  const dir = path.join(postsDirectory, dirPath);
  return fs.readdirSync(dir);
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