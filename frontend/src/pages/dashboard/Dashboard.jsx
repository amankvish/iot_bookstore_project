// frontend/src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboard.css';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome Back, {user?.name}</h1>
        <p className="dashboard-subtitle">Here's what's happening with your reading</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">Currently Reading</h2>
          <div className="current-book">
            <div className="book-cover"></div>
            <div className="book-info">
              <h3 className="book-title">The Midnight Library</h3>
              <p className="book-author">By Matt Haig</p>
              <div className="progress-container">
                <div className="progress-text">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
              <Link to="/books/the-midnight-library" className="auth-btn register-btn" style={{ padding: '0.5rem 1rem' }}>
                Continue Reading
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <Link to="/books" className="action-btn">
              <span className="action-icon">🔍</span>
              Browse Books
            </Link>
            <Link to="/wishlist" className="action-btn">
              <span className="action-icon">❤️</span>
              Wishlist
            </Link>
            <Link to="/cart" className="action-btn">
              <span className="action-icon">🛒</span>
              Your Cart
            </Link>
            <Link to="/settings" className="action-btn">
              <span className="action-icon">⚙️</span>
              Settings
            </Link>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Recent Activity</h2>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-icon">📖</div>
              <div className="activity-text">
                Started reading "Atomic Habits"
                <div className="activity-date">2 days ago</div>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon">⭐</div>
              <div className="activity-text">
                Rated "The Alchemist" 4 stars
                <div className="activity-date">1 week ago</div>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-text">
                Purchased "Dune"
                <div className="activity-date">2 weeks ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;