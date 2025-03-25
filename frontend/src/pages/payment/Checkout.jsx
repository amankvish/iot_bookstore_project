import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const handleCheckout = () => {
    // Payment integration would go here
    alert('Proceeding to payment...');
    clearCart();
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout</h1>
      
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Shipping Information</Card.Header>
            <Card.Body>
              <p>
                <strong>Name:</strong> {user?.name}<br />
                <strong>Email:</strong> {user?.email}
              </p>
              <p>Shipping address would be collected here</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Header>Order Summary</Card.Header>
            <ListGroup variant="flush">
              {cart.map(item => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                  <span>
                    {item.title} <small>(x{item.quantity})</small>
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button 
                variant="primary" 
                className="w-100"
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Proceed to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;