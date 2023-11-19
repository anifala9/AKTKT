import fs from "fs";
import matter from "gray-matter";
import path from "path"

const postDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  const postFiles = fs.readdirSync(postDirectory);

  const posts = postFiles.map((f) => {
    const id = f.replace("/\.md$/", "");

    const fullPath = path.join(postDirectory, f);
    const fileContents = fs.readFileSync(fullPath);
    const contents = matter(fileContents);
    return {
      id,
      ...contents.data as {date: string, title: string}
    }
  });
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  })
}