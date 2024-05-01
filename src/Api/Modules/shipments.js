import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async addShipment(payload) {
    return await api.post("/addshipment", payload);
  },

  async addShipmentBox(payload) {
    return await api.post("/addshipmentbox", payload);
  },
};


