import { api } from "./api";

/**
 * Fetch all orders for the current user.
 */
export const getOrders = async () => {
  try {
    const response = await api.get("orders/");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

/**
 * Create a new order.
 */
export const createOrder = async (orderData) => {
  try {
    const response = await api.post("orders/", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
