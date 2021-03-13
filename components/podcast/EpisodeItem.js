import { Card } from "react-bootstrap";
import Link from "next/link";

export default function EpisodeItem({ episode }) {
  return (
    <Card>
      <Card.Img variant="top" src={episode.image.url} />
      <Card.Body>
        <Card.Title>{episode.title}</Card.Title>
        <Card.Text>{episode.desciption}</Card.Text>
        <Link href={`/podcast/${episode.episodeNumber}`} variant="primary">
          Go to the episode
        </Link>
      </Card.Body>
    </Card>
  );
}
