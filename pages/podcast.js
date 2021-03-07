import styles from "@styles/podcast.module.css";

import { getAllEpisodes } from "lib/graphcms";

import EpisodeItem from "@components/podcast/EpisodeItem";

export default function Podcast({ episodes }) {
  return (
    <div className={styles.grid}>
      {episodes.map((episode) => (
        <EpisodeItem episode={episode} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes();

  return {
    props: { episodes },
  };
}
