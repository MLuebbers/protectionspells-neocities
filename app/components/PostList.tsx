'use client'

import Post from "../models/Post";
import PostComponent from "./Post/Post";

interface Props {
    posts: Post[]
}

export default function PostList({posts}: Props) {
    return (
        <ul className="mt-4">
            { posts.map((e, i) => <PostComponent key={i} title={e.title} subtitle={e.subtitle} date={e.date} tags= {e.tags} body={e.body}/>) }
        </ul>
    );
}


