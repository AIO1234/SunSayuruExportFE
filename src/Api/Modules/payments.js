import { api } from "../index";

export default {
  // store payment functions
  async storeSuplierPayment(payload) {
    return await api.post("/suplier_payment/storepayment", payload);
  },

  async storeAirfreightPayment(payload) {
    return await api.post("/airfreight_payment/storerpayment", payload);
  },

  async storeBuyerPayment(payload) {
    return await api.post("/buyer_payment/storerpayment", payload);
  },

  async storeAdditionalPayment(payload) {
    return await api.post("/additional_payment/storerpayment", payload);
  },

  // get pending shipment functions

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

  // get all data functions

  async getSuplierPayments(payload) {
    return await api.post("/suplier_payment/allsuplierpayments", payload);
  },

  async getAirfreightPayments(payload) {
    return await api.post("/airfreight_payment/allairfreightpayments", payload);
  },

  async getAdditionalPayments() {
    return await api.post("/additional_payment/alladditionalpayments");
  },

  async getBuyerPayments(payload) {
    return await api.post("/buyer_payment/allbuyerpayments", payload);
  },

  // show payment

  async showSuplierPayment(payload) {
    return await api.post("/suplier_payment/editpayment", payload);
  },

  async showAirfreightPayment(payload) {
    return await api.post("/airfreight_payment/editpayment", payload);
  },

  async shoBuyerPayment(payload) {
    return await api.post("/buyer_payment/editpayment", payload);
  },

  async shoAdditionalPayment(payload) {
    return await api.post("/additional_payment/editpayment", payload);
  },

  // update payment

  async updateSuplierPayment(payload) {
    return await api.post("/suplier_payment/updatepayment", payload);
  },

  async updateAirfreightPayment(payload) {
    return await api.post("/airfreight_payment/updatepayment", payload);
  },

  async updateBuyerPayment(payload) {
    return await api.post("/buyer_payment/updatepayment", payload);
  },

  async updateAdditionalPayment(payload) {
    return await api.post("/additional_payment/updatepayment", payload);
  },
};
