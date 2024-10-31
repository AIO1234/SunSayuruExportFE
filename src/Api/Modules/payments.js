import { api } from "../index";

export default {
  async storeSuplierPayment(payload) {
    return await api.post("/suplier_payment/storepayment", payload);
  },

  async storeAirfreightPayment(payload) {
    return await api.post("/airfreight_payment/storerpayment", payload);
  },

  async storeBuyerPayment(payload) {
    return await api.post("/buyer_payment/storerpayment", payload);
  },

  async getSuplierPendingShipments(payload) {
    return await api.post("/suplier_payment/pendingsuplierpayments", payload);
  },

  async getAirfreightPendingShipments(payload) {
    return await api.post(
      "/airfreight_payment/pendingairfreightpayments",
      payload
    );
  },

  async getBuyerPendingShipments(payload) {
    return await api.post("/buyer_payment/pendingbuyerpayments", payload);
  },
};
