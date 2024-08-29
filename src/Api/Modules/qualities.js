import { api } from "../index";

export default {
  async buyerQualities(payload) {
    return await api.post("/quality/buyerqualities", payload);
  },

  async allQualities() {
    return await api.get("/quality/allqualities");
  },

  async storeQuality(payload) {
    return await api.post("/quality/storequality", payload).then(() => {
      window.location.href = "/qualities";
    });
  },

  async updateQuality(id, payload) {
    return await api.put(`/quality/updatequality/${id}`, payload);
  },

  async deleteQuality(id) {
    return await api.delete(`/quality/deletequality/${id}`);
  },
};
