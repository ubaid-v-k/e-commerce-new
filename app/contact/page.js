'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Container className="my-5">
      {/* HEADER */}
      <Row className="mb-5">
        <Col>
          <h1 className="mb-4">Contact Us</h1>
          <p className="lead">
            Have a question or need assistance? We&apos;d love to hear from you!
          </p>
        </Col>
      </Row>

      {/* CONTACT FORM */}
      <Row>
        <Col lg={8} className="mb-4">
          <Card>
            <Card.Body>
              <h3 className="mb-4">Send us a Message</h3>

              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you for your message! We&apos;ll get back to you soon.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* CONTACT DETAILS */}
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">📍 Address</h5>
              <p className="text-muted">
                123 Commerce Street<br />
                Suite 456<br />
                New York, NY 10001<br />
                United States
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">📞 Phone</h5>
              <p className="text-muted">
                Customer Service: +1 (234) 567-8900<br />
                Toll-Free: 1-800-ESHOP-24<br />
                Mon-Fri: 9:00 AM - 6:00 PM EST
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">📧 Email</h5>
              <p className="text-muted">
                General Inquiries: info@eshop.com<br />
                Support: support@eshop.com<br />
                Sales: sales@eshop.com
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5 className="mb-3">⏰ Business Hours</h5>
              <p className="text-muted mb-1">
                <strong>Monday - Friday:</strong><br />
                9:00 AM - 6:00 PM EST
              </p>
              <p className="text-muted mb-1">
                <strong>Saturday:</strong><br />
                10:00 AM - 4:00 PM EST
              </p>
              <p className="text-muted mb-0">
                <strong>Sunday:</strong><br />
                Closed
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQ SECTION */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light">
            <Card.Body className="text-center py-5">
              <h3 className="mb-3">Frequently Asked Questions</h3>
              <p className="mb-4">
                Looking for quick answers? Check out our FAQ section for common questions
                about shipping, returns, payments, and more.
              </p>
              <Button variant="outline-primary">Visit FAQ</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
