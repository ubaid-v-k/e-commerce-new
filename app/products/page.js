'use client';

import Link from 'next/link';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '@/context/CartContext';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'Premium noise-canceling headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Fitness tracker with heart rate monitor',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Coffee Maker',
    price: 89.99,
    description: 'Automatic drip coffee maker',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    category: 'Home & Kitchen'
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 49.99,
    description: 'Ergonomic aluminum laptop stand',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Backpack',
    price: 59.99,
    description: 'Waterproof travel backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 39.99,
    description: 'LED desk lamp with touch control',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'Home & Kitchen'
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 69.99,
    description: 'Portable waterproof speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Phone Case',
    price: 24.99,
    description: 'Protective silicone phone case',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop',
    category: 'Accessories'
  }
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Our Products</h1>
      <p className="text-muted mb-4">Browse our collection of amazing products</p>
      
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} className="product-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted small">{product.description}</Card.Text>
                <Card.Text className="fw-bold text-primary fs-5">
                  ${product.price.toFixed(2)}
                </Card.Text>
                <div className="mt-auto">
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline-primary" className="w-100 mb-2">
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    variant="primary" 
                    className="w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}