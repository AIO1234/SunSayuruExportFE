import { api } from "../index";

export default {
  async seafoodGrading(payload) {
    return await api.post("/seafoodgradings", payload);
  },
};
