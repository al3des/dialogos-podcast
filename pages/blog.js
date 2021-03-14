import styles from "styles/blog.module.css";
import Head from "next/head";
import { getAllPosts } from "lib/graphcms";

import PostItem from "@components/blog/PostItem";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
}
