import AudioPlayer from "@components/utils/player";
import styles from "@styles/podcast-episode.module.css";
import { getAllEpisodes, getEpisodeByEpisodeNumber } from "lib/graphcms";
import Head from "next/head";

import Image from "next/image";

export default function PodcastEpisode({ episode }) {
  return (
    <>
      <Head>
        <title>{episode.title}</title>
      </Head>
      <h1>
        <span>{episode.episodeNumber}. </span>
        {episode.title}
      </h1>
      <div className={styles.root}>
        <div className={styles.audioFile}>
          <AudioPlayer src={episode.audioFile.url} />
        </div>
        <Image
          src={episode.image.url}
          layout="responsive"
          width={Number(episode.image.width)}
          height={Number(episode.image.height)}
        />
        <div className={styles.description}>{episode.description}</div>
        <div className={styles.notes}>{episode.showNotes}</div>
      </div>
    </>
  );
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
    return { params: { episodeNumber: episodeNumber.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
