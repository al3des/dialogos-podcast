import { getAllPosts, getPostBySlug } from "lib/graphcms";

export default function Post({ post }) {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
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
