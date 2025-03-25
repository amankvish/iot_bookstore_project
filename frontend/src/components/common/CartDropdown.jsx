import React from 'react';
import { Dropdown, ListGroup, Badge } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  // This will now work because the component is wrapped in CartProvider
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="outline-light" id="dropdown-cart">
        <i className="fas fa-shopping-cart"></i>
        {cart.length > 0 && (
          <Badge pill bg="danger" className="ms-1">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </Badge>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-3" style={{ minWidth: '300px' }}>
        {cart.length === 0 ? (
          <Dropdown.ItemText>Your cart is empty</Dropdown.ItemText>
        ) : (
          <>
            <ListGroup variant="flush">
              {cart.map(item => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <div className="me-3">
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">
                      ${item.price} × {item.quantity}
                    </small>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="d-flex justify-content-between mt-3">
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
              <Link to="/checkout" className="btn btn-sm btn-primary">
                Checkout
              </Link>
            </div>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropdown;