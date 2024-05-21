import { api } from "../index";

export default {
  async buyers(payload) {
    return await api.post("/buyer/countrybuyers", payload);
  },
};
