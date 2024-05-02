import { api } from "../index";

export default {
  async buyerShipements(payload) {
    return await api.post("/buyershipments", payload);
  },
};
