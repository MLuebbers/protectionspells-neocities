'use-client'

import "./globals.css";
import config from "../config.json";
import Markdown from "./components/Markdown";
import PostList from "./components/PostList";
import { getPosts } from "./lib/posts";

export default function Home() {
  
  return (
    <div>
      <PostList posts={getPosts()}/>
      <p className="mt-8 border-solid border-t-2 pt-2">
        <Markdown>{config.about}</Markdown>
      </p>
    </div>
  );
}