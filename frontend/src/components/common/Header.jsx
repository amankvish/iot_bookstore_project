// frontend/src/components/common/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import '../../assets/styles/shared.css';

const Header = () => {
  const { user, logout } = useAuth();
  const { cartItems = [] } = useCart(); // Default empty array if undefined

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          IoT Books
        </Link>

        <nav className="nav-menu">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/books" className="nav-link">Books</NavLink>
          <NavLink to="/categories" className="nav-link">Categories</NavLink>
          {user && <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>}
        </nav>

        <div className="user-actions">
          <NavLink to="/cart" className="cart-icon">
            🛒 {cartItems?.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>
          
          {user ? (
            <div className="user-profile">
              <div className="avatar">{user?.name?.charAt(0) || 'U'}</div>
              <button onClick={logout} className="auth-btn login-btn">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="auth-btn login-btn">Login</Link>
              <Link to="/register" className="auth-btn register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;