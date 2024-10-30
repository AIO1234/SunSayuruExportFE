import { api } from "../index";

export default {
  async storeCheck(payload) {
    return await api.post("/check_book/storecheck", payload);
  },

  async continuChecks(payload) {
    return await api.post("/check_book/getcontinuechecks", payload);
  },
};
