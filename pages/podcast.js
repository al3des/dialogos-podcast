import { getAllEpisodes } from "lib/graphcms";

import Link from "next/link";

export default function Podcast({ episodes }) {
  return (
    <>
      <ul>
        {episodes.map((episode) => (
          <li>
            <Link
              key={episode.title}
              href={`/podcast/${episode.episodeNumber}`}
            >
              {episode.title}
            </Link>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(episodes, null, 2)}</pre>
    </>
  );
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes();

  return {
    props: { episodes },
  };
}
