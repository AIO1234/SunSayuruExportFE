import { api } from "../index";

export default {
  async buyerQualities(payload) {
    return await api.post("/quality/buyerqualities", payload);
  },
};
