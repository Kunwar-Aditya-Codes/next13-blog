import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "blogs");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDir);

  const allPostData = fileNames.map((fileName) => {
    // Replace .md
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDir, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    const blogPost: Blog = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
    };

    return blogPost;
  });

  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: Blog & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    contentHtml,
  };

  return blogPostWithHTML;
}
