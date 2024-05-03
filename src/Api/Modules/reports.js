import { api } from "../index";

export default {
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
 
};
