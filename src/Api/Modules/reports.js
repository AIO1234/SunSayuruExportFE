import { api } from "../index";

export default {
  async allShipements(payload) {
    return await api.post("/report/allsupliershipments", payload);
  },

  async buyerShipements(payload) {
    return await api.post("/report/buyershipments", payload);
  },

  async buyerPackingList(payload) {
    return await api.post("/report/buyerpackinglist", payload);
  },

  async buyerInvoice(payload) {
    return await api.post("/report/buyerinvoice", payload);
  },

  async customInvoice(payload) {
    return await api.post("/report/custominvoice", payload);
  },

  async customInvoice(payload) {
    return await api.post("/report/custominvoice", payload);
  },

  async shipmentiseSupliers(payload) {
    return await api.post("/report/shipmentvisesupliers", payload);
  },

  async shipmentiseSupliersDetails(payload) {
    return await api.post("/report/shipmentvisesupliersinnerdetails", payload);
  },

  async suplierViseSuplierEarnings() {
    return await api.get("/report/supliervisesupliersmaindetails");
  },

  async suplierViseSuplierShipmentEarnings(payload) {
    return await api.post("/report/supliervisesupliersinnerdetails", payload);
  },

  async airfreightMainBills() {
    return await api.get("/airfreightmainbill");
  },

  async airfreightInnerShipments(payload) {
    return await api.post("/airfreightshipmntwisebill", payload);
  },
};
