import React, { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - Total: ${order.total_amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderPage;
