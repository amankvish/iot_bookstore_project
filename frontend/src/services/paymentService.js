import { api } from "./api";

export const createPayment = async (amount) => {
  const response = await api.post("payments/create-payment/", { amount });
  return response.data;
};
