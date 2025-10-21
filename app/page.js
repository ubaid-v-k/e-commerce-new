'use client';

import Link from 'next/link';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <Container>
          <h1 className="display-3 fw-bold mb-4">Welcome to E-Shop</h1>
          <p className="lead mb-4">Discover amazing products at unbeatable prices</p>
          <Button as={Link} href="/products" variant="light" size="lg">
            Shop Now
          </Button>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} className="product-img" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="fw-bold text-primary">
                    ${product.price.toFixed(2)}
                  </Card.Text>
                  <Button as={Link} href={`/products/${product.id}`} variant="primary">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button as={Link} href="/products" variant="outline-primary" size="lg">
            View All Products
          </Button>
        </div>
      </Container>

      {/* Features Section */}
      <Container className="my-5 py-5 bg-light rounded">
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="display-4 mb-3">🚚</div>
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </Col>
          <Col md={4} className="mb-4">
            <div className="display-4 mb-3">🔒</div>
            <h4>Secure Payment</h4>
            <p>100% secure transactions</p>
          </Col>
          <Col md={4} className="mb-4">
            <div className="display-4 mb-3">↩️</div>
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
