// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/styles/home.css';
import '../assets/styles/home.css'

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Favorite Book</h1>
          <p className="hero-subtitle">
            Explore our vast collection of books across all genres. From bestsellers to hidden gems, we have something for every reader.
          </p>
          <Link to="/books" className="hero-btn">Browse Books</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Collections</h2>
        <div className="collections">
          <div className="collection-card">
            <div 
              className="collection-bg" 
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}
            ></div>
            <div className="collection-overlay">
              <h3 className="collection-title">Fiction</h3>
              <Link to="/books/fiction" className="collection-link">
                Explore Collection →
              </Link>
            </div>
          </div>

          <div className="collection-card">
            <div 
              className="collection-bg" 
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}
            ></div>
            <div className="collection-overlay">
              <h3 className="collection-title">Non-Fiction</h3>
              <Link to="/books/nonfiction" className="collection-link">
                Explore Collection →
              </Link>
            </div>
          </div>

          <div className="collection-card">
            <div 
              className="collection-bg" 
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}
            ></div>
            <div className="collection-overlay">
              <h3 className="collection-title">Bestsellers</h3>
              <Link to="/books/bestsellers" className="collection-link">
                Explore Collection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Readers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              The best selection of books I've found online! Fast shipping and great customer service.
            </p>
            <p className="testimonial-author">- Sarah Johnson</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              I love the personalized recommendations. Found so many great books I wouldn't have discovered otherwise.
            </p>
            <p className="testimonial-author">- Michael Chen</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              As an avid reader, I appreciate the quality of books and the frequent sales. My go-to bookstore!
            </p>
            <p className="testimonial-author">- David Wilson</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;