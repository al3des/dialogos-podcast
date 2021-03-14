import styles from "@styles/podcast.module.css"
import Head from "next/head"
import { getAllEpisodes } from "lib/graphcms"

import EpisodeItem from "@components/podcast/EpisodeItem"

export default function Podcast({ episodes }) {
  return (
    <>
      <Head>
        <title>Podcast</title>
      </Head>
      <h1>Podcasts</h1>
      <div className={styles.grid}>
        {episodes.map((episode) => (
          <EpisodeItem key={episode.id} episode={episode} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes()

  return {
    props: { episodes },
  }
}
