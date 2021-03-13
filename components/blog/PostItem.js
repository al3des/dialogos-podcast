import { Card } from "react-bootstrap";
import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <Card>
      <Card.Img variant="top" src={post.coverImage.url} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: post.content.html }} />
        <Link href={`/blog/${post.slug}`} variant="primary">
          Read the article
        </Link>
      </Card.Body>
    </Card>
  );
}
