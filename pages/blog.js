import { getAllPosts } from "lib/graphcms";

import PostItem from "@components/blog/PostItem";

import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
}
