import matter from "gray-matter";
import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import Post from "../models/Post";
import Tag from "../models/Tag";

export function getTags(): Tag[] {
  const postsDirectory = path.join(process.cwd(), "/meta")
  const fullPath = path.join(postsDirectory, "tags.yml");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const tagData = yaml.load(fileContents, { schema: yaml.JSON_SCHEMA }) as {tags:Tag[]};

  return tagData.tags;
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