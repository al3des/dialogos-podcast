import styles from "./Nav.module.css";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

export default function MyNav() {
  const router = useRouter();
  return (
    <Navbar className="p-0 mb-4">
      <Navbar.Brand>
        <Link href="/">unforseen incidents</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav activeKey={router.route}>
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link>home</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/podcast" passHref>
              <Nav.Link
                className={router.pathname.includes("/podcast") ? "active" : ""}
              >
                podcast
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/blog" passHref>
              <Nav.Link
                className={router.pathname.includes("/blog") ? "active" : ""}
              >
                blog
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/about" passHref>
              <Nav.Link>about</Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
