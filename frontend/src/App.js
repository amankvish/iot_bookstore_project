import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext"; // Add this import
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import DashboardPage from "./pages/dashboard/Dashboard";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// Import new components
import BookStore from "./pages/books/BookStore"; // Adjust the import path as needed
import BookDetail from "./pages/books/BookDetail"; // Adjust the import path as needed
import Checkout from "./pages/payment/Checkout"; // Adjust the import path as needed
import PaymentResult from "./pages/payment/Result"; // Adjust the import path as needed
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="app-layout">
            <Header />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                {/* Add new routes here */}
                <Route path="/books" element={<BookStore />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route path="/payment/result" element={<PaymentResult />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
