import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async allShipments(payload) {
    return await api.post("/shipment/allshipments", payload);
  },

  async showShipment(payload) {
    return await api.post("/shipment/showshipment", payload);
  },

  async addShipment(payload) {
    return await api.post("/shipment/addshipment", payload);
  },

  async addShipmentBox(payload) {
    return await api.post("/shipment/addshipmentbox", payload);
  },

  async addShipmentMaterials(payload) {
    return await api.post("/shipment/addshipmentmaterials", payload);
  },

  async addShipmentAditionalCosts(payload) {
    return await api.post("/shipment/addshipmentadditionalcosts", payload);
  },

  async updateBuyerInvoice(payload) {
    return await api.post("/shipment/updatebuyerinvoice", payload);
  },

  async updateCustomInvoice(payload) {
    return await api.post("/shipment/updatecustominvoice", payload);
  },
  async sendEmailInvoice(payload) {
    return await api.post("/shipment/sendemailinvoice", payload);
  },

  async deleteShipment(id) {
    return await api.delete(`/shipment/deleteshipment/${id}`);
  },
};
