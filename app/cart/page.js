'use client';

import Link from 'next/link';
import { Container, Row, Col, Card, Button, Table, Form } from 'react-bootstrap';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="my-5 text-center">
        <div className="py-5">
          <h2 className="mb-4">Your Cart is Empty</h2>
          <p className="text-muted mb-4">Add some products to get started!</p>
          <Button as={Link} href="/products" variant="primary" size="lg">
            Browse Products
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-img rounded me-3"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                          <div>
                            <strong>{item.name}</strong>
                            <br />
                            <small className="text-muted">{item.category}</small>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">${item.price.toFixed(2)}</td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center" style={{ width: '120px' }}>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                          >
                            -
                          </Button>
                          <Form.Control
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value) || 1)
                            }
                            className="mx-2 text-center"
                            style={{ width: '60px' }}
                            min="1"
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </td>
                      <td className="align-middle">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="d-flex justify-content-between mt-3">
                <Button as={Link} href="/products" variant="outline-primary">
                  Continue Shopping
                </Button>
                <Button variant="outline-danger" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>${getCartTotal().toFixed(2)}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <strong>{getCartTotal() > 50 ? 'FREE' : '$10.00'}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Tax (10%):</span>
                <strong>${(getCartTotal() * 0.1).toFixed(2)}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Total:</h5>
                <h5 className="text-primary">
                  $
                  {(
                    getCartTotal() +
                    (getCartTotal() > 50 ? 0 : 10) +
                    getCartTotal() * 0.1
                  ).toFixed(2)}
                </h5>
              </div>

              <Button variant="success" size="lg" className="w-100 mb-2">
                Proceed to Checkout
              </Button>

              <p className="text-muted small text-center mb-0 mt-3">
                {getCartTotal() < 50 &&
                  `Add $${(50 - getCartTotal()).toFixed(2)} more for free shipping!`}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
