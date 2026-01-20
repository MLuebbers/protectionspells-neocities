import "./globals.css";
import fs from "fs";
import config from "../config.json";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Post from "./components/Post/Post";
import Tag from "./components/Tag/Tag";
import Markdown from "./components/Markdown";


export default function Home() {
  const posts = getPosts();
  const tags = getTags();
  return (
    <div>
      <ul className="mt-4">
        {posts.map((e) => <Post title={e.title} subtitle={e.subtitle} date={e.date} tags= {e.tags} body={e.body}/>)}
      </ul>
      <p className="mt-8 border-solid border-t-2 pt-2">
        <Markdown>{config.about}</Markdown>
      </p>
      <ul className="mt-8">
        {tags.map((e) => <Tag text={e.name} />)}
      </ul>
    </div>
  );
}


export function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "content/posts")

  const files = fs.readdirSync(postsDirectory);
  const fileContent = files.filter((filename) => filename.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        tags: matterResult.data.tags,
        body: matterResult.content
      }
    });

  return fileContent;
}

export function getTags(): Tag[] {
  const postsDirectory = path.join(process.cwd(), "/meta")
  const fullPath = path.join(postsDirectory, "tags.yml");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const tagData = yaml.load(fileContents, { schema: yaml.JSON_SCHEMA }) as {tags:Tag[]};

  return tagData.tags;
}

export function collectTags(fileContents: Post[]): string[] {
  const tagSet = new Set<string>();
  fileContents.forEach((file) => {
    file.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  return [...tagSet];
}

interface Tag {
  slug: string,
  name: string
}

interface Post {
  title: string,
  subtitle: string,
  date: string,
  tags: string[],
  body: string
}