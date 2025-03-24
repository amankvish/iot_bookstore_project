import React from "react";
import { createPayment } from "../services/paymentService";

function PaymentPage() {
  const handlePayment = async () => {
    const response = await createPayment(1000); // Amount in paise
    const options = {
      key: "your-razorpay-key-id",
      amount: response.amount,
      currency: "INR",
      name: "IoT Bookstore",
      description: "Payment for Book",
      order_id: response.id,
      handler: function (response) {
        alert("Payment Successful");
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default PaymentPage;
