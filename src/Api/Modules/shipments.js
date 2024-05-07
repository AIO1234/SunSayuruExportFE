import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {

  async allShipments(payload) {
    return await api.post("/allshipments", payload);
  },

  async showShipment(payload) {
    return await api.post("/showshipment", payload);
  },

  async addShipment(payload) {
    return await api.post("/addshipment", payload);
  },

  async addShipmentBox(payload) {
    return await api.post("/addshipmentbox", payload);
  },

  async addShipmentMaterials(payload) {
    return await api.post("/addshipmentmaterials", payload);
  },

  async addShipmentAditionalCosts(payload) {
    return await api.post("/addshipmentadditionalcosts", payload);
  },

  async updateBuyerInvoice(payload) {
    return await api.post("/updatebuyerinvoice", payload);
  },

  async updateCustomInvoice(payload) {
    return await api.post("/updatecustominvoice", payload);
  },
};
