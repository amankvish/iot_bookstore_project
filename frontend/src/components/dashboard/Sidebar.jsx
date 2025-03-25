import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ logout }) => {
    return (
        <Nav className="flex-column p-3 text-white">
            <Nav.Item className="mb-4">
                <h4 className="text-white">Bookstore</h4>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Link to="/dashboard" className="nav-link text-white">
                    <i className="bi bi-house-door me-2"></i>Dashboard
                </Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Link to="/profile" className="nav-link text-white">
                    <i className="bi bi-person me-2"></i>Profile
                </Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Link to="/books" className="nav-link text-white">
                    <i className="bi bi-book me-2"></i>Books
                </Link>
            </Nav.Item>
            <Nav.Item className="mt-auto">
                <button 
                    onClick={logout}
                    className="nav-link text-white btn btn-link text-start w-100"
                >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                </button>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;