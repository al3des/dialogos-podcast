import styles from "styles/home.module.css";
import Head from "next/head";
import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unforseen incidents</title>
      </Head>

      <h1 className="mt-4">Wellcome to unforseen incidents</h1>
      <div className={`my-5 ${styles.sections}`}>
        <Card>
          <Card.Header className="display-4">
            <span className="mr-4">
              <i class="bi bi-broadcast"></i>
            </span>
            Podcast
          </Card.Header>
          <Card.Body>
            <Card.Title>Listen to our podcast</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Link href="/podcast">go listen !</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="display-4">
            <span className="mr-4">
              <i class="bi bi-pencil-square"></i>
            </span>
            Blog
          </Card.Header>
          <Card.Body>
            <Card.Title>Read our articles</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Link href="/blog">go read !</Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
