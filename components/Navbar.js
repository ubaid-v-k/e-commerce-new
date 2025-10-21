'use client';

import Link from 'next/link';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { useCart } from '@/context/CartContext';

export default function NavigationBar() {
  const { getCartCount } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          🛒 E-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} href="/cart">
              Cart{' '}
              {getCartCount() > 0 && (
                <Badge bg="danger" className="ms-1">
                  {getCartCount()}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
