import { Card } from "react-bootstrap";
import Link from "next/link";

export default function EpisodeItem({ episode }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={episode.image.url} />
      <Card.Body>
        <Card.Title>{episode.title}</Card.Title>
        <Card.Text>{episode.desciption}</Card.Text>
        <Link href={`/blog/${episode.number}`} variant="primary">
          Read the article
        </Link>
      </Card.Body>
    </Card>
  );
}
