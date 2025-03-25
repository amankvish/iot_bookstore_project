import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/shared.css';

const Footer = () => {
  return (
    <footer className="auth-footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} IoT Books. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;