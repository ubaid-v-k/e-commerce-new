'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useCart } from '@/context/CartContext';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, description: 'Premium noise-canceling headphones...', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop', category: 'Electronics', stock: 25 },
  { id: 2, name: 'Smart Watch', price: 199.99, description: 'Advanced fitness tracker...', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop', category: 'Electronics', stock: 15 },
  { id: 3, name: 'Coffee Maker', price: 89.99, description: 'Programmable drip coffee maker...', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&h=600&fit=crop', category: 'Home & Kitchen', stock: 30 },
  { id: 4, name: 'Laptop Stand', price: 49.99, description: 'Ergonomic aluminum laptop stand...', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop', category: 'Accessories', stock: 40 },
  { id: 5, name: 'Backpack', price: 59.99, description: 'Waterproof travel backpack...', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop', category: 'Accessories', stock: 20 },
  { id: 6, name: 'Desk Lamp', price: 39.99, description: 'LED desk lamp...', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop', category: 'Home & Kitchen', stock: 35 },
  { id: 7, name: 'Bluetooth Speaker', price: 69.99, description: 'Portable waterproof speaker...', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop', category: 'Electronics', stock: 18 },
  { id: 8, name: 'Phone Case', price: 24.99, description: 'Protective silicone phone case...', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=600&fit=crop', category: 'Accessories', stock: 50 },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <Container className="my-5 text-center">
        <h2>Product Not Found</h2>
        <Button variant="primary" onClick={() => router.push('/products')}>
          Back to Products
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={450}
            className="rounded shadow w-100"
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
          <h1 className="mb-3">{product.name}</h1>
          <h2 className="text-primary mb-4">${product.price.toFixed(2)}</h2>

          <p className="mb-4">{product.description}</p>

          <div className="mb-4">
            <strong>Availability: </strong>
            {product.stock > 0 ? (
              <span className="text-success">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </div>

          <div className="d-flex gap-2 mb-4">
            <Button variant="primary" size="lg" onClick={handleAddToCart} disabled={product.stock === 0}>
              Add to Cart
            </Button>
            <Button variant="outline-secondary" size="lg" onClick={() => router.push('/products')}>
              Back to Products
            </Button>
          </div>

          <div className="border-top pt-4">
            <h5>Product Features:</h5>
            <ul>
              <li>High-quality construction</li>
              <li>30-day money-back guarantee</li>
              <li>Free shipping on orders over $50</li>
              <li>1-year warranty included</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
