import { getAllEpisodes, getEpisodeByEpisodeNumber } from "lib/graphcms";

export default function PodcastEpisode({ episode }) {
  return <pre>{JSON.stringify(episode, null, 2)}</pre>;
}

export async function getStaticProps({ params }) {
  const episode = await getEpisodeByEpisodeNumber(Number(params.episodeNumber));

  return {
    props: {
      episode,
    },
  };
}

export async function getStaticPaths() {
  const episodes = await getAllEpisodes();
  const paths = episodes.map(({ episodeNumber }) => {
    console.log(episodeNumber);
    return { params: { episodeNumber: episodeNumber.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
