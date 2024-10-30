import { api } from "../index";

export default {
  async storeSuplierPayment(payload) {
    return await api.post("/suplier_payment/storepayment", payload);
  },

  async getSuplierPendingShipments(payload) {
    return await api.post("/suplier_payment/pendingsuplierpayments", payload);
  },
};
