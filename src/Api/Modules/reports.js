import { api } from "../index";

export default {
  async allShipements(payload) {
    return await api.post("/allsupliershipments" , payload);
  },

  async buyerShipements(payload) {
    return await api.post("/buyershipments", payload);
  },

  async buyerPackingList(payload) {
    return await api.post("/buyerpackinglist", payload);
  },

  async buyerInvoice(payload) {
    return await api.post("/buyerinvoice", payload);
  },

  async customInvoice(payload) {
    return await api.post("/custominvoice", payload);
  },

  async customInvoice(payload) {
    return await api.post("/custominvoice", payload);
  },

  async shipmentiseSupliers(payload) {
    return await api.post("/shipmentvisesupliers", payload);
  },

  async shipmentiseSupliersDetails(payload) {
    return await api.post("/shipmentvisesupliersinnerdetails", payload);
  },

  async suplierViseSuplierEarnings() {
    return await api.get("/supliervisesupliersmaindetails");
  },

  async suplierViseSuplierShipmentEarnings(payload) {
    return await api.post("/supliervisesupliersinnerdetails", payload);
  },
};
