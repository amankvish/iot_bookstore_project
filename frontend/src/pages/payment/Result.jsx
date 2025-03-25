import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const PaymentResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get('status');
  const isSuccess = status === 'success';

  return (
    <Container className="py-5 text-center">
      {isSuccess ? (
        <>
          <Alert variant="success" className="mb-4">
            <h4>Payment Successful!</h4>
            <p>Your order has been placed successfully.</p>
          </Alert>
          <p>You will receive a confirmation email shortly.</p>
        </>
      ) : (
        <>
          <Alert variant="danger" className="mb-4">
            <h4>Payment Failed</h4>
            <p>There was an issue processing your payment.</p>
          </Alert>
          <p>Please try again or contact support.</p>
        </>
      )}
      
      <Button as={Link} to="/books" variant="primary" className="mt-3">
        Continue Shopping
      </Button>
    </Container>
  );
};

export default PaymentResult;