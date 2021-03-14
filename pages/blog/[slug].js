import { getAllPosts, getPostBySlug } from "lib/graphcms";
import Head from "next/head";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>
          <Image
            src={post.coverImage.url}
            width={Number(post.coverImage.width)}
            height={Number(post.coverImage.height)}
            objectFit="cover"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
