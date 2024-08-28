import { api } from "../index";

export default {
  async buyerQualities(payload) {
    return await api.post("/quality/buyerqualities", payload);
  },

  async allQualities() {
    return await api.get("/grading/allqualities");
  },

  async storeQuality(payload) {
    return await api.post("/grading/storequality", payload);
  },

  async updateQuality(id, payload) {
    return await api.put(`/grading/updatequality/${id}`, payload);
  },

  async deleteQuality(id) {
    return await api.delete(`/grading/deletequality/${id}`);
  },
};
