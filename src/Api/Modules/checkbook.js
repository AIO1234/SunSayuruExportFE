import { api } from "../index";

export default {
  async allChecks(payload) {
    return await api.post("/check_book/allchecks" , payload);
  },

  async storeCheck(payload) {
    return await api.post("/check_book/storecheck", payload);
  },

  async continuChecks(payload) {
    return await api.post("/check_book/getcontinuechecks", payload);
  },

  async updateCheck(payload) {
    return await api.post("/check_book/updatecheck" , payload);
  },
};
