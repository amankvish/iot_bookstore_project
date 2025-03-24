import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
