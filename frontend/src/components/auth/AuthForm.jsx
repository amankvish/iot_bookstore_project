// frontend/src/components/auth/AuthForm.jsx
import React from 'react';
import { Alert } from 'react-bootstrap';
import '../../assets/styles/auth.css';

const AuthForm = ({ 
  type, 
  onSubmit, 
  error, 
  loading 
}) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    ...(type === 'register' && {
      name: '',
      confirmPassword: ''
    })
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {error && (
        <Alert variant="danger" className="auth-alert fade-in">
          {error}
        </Alert>
      )}
      
      {type === 'register' && (
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>
      )}

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your password"
        />
      </div>

      {type === 'register' && (
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Confirm your password"
          />
        </div>
      )}

      <button 
        type="submit" 
        className="auth-button"
        disabled={loading}
      >
        {loading ? (
          <span className="spinner"></span>
        ) : type === 'login' ? (
          'Sign In'
        ) : (
          'Register'
        )}
      </button>
    </form>
  );
};

export default AuthForm;