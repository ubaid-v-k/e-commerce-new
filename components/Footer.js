import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>E-Shop</h5>
            <p>Your trusted online store for quality products.</p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white text-decoration-none">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Info</h5>
            <p>
              Email: info@eshop.com
              <br />
              Phone: +1 234 567 8900
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© 2024 E-Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
