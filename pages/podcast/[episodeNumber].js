import React from "react";
import styles from "@styles/podcast-episode.module.css";
import { getAllEpisodes, getEpisodeByEpisodeNumber } from "lib/graphcms";
import Head from "next/head";

import Image from "next/image";

import { AudioContext } from "context/AudioContext";
import { Button } from "react-bootstrap";

export default function PodcastEpisode({ episode }) {
  const { setAudioFile, play, setPlay } = React.useContext(AudioContext);

  const handlePlay = () => {
    setAudioFile(episode.audioFile.url);
    setPlay((s) => !s);
  };
  return (
    <>
      <Head>
        <title>{episode.title}</title>
      </Head>
      <div className={styles.root}>
        <h1>
          <span>{episode.episodeNumber}. </span>
          {episode.title}
        </h1>
        <article className={styles.article}>
          <aside>
            <div className={styles.audioFile}>
              <Image
                src={episode.image.url}
                layout="responsive"
                width={Number(episode.image.width)}
                height={Number(episode.image.height)}
              />
              <Button
                variant="outline-light"
                onClick={handlePlay}
                className={`rounded-circle ${styles.btn}`}
              >
                <i
                  className={`bi bi-${play ? "play" : "pause"}-circle-fill ${
                    styles.playButton
                  }`}
                ></i>
              </Button>
            </div>
            <div className={styles.metadata}>{episode.showNotes}</div>
          </aside>
          <div className={styles.description}>{episode.description}</div>
        </article>
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
