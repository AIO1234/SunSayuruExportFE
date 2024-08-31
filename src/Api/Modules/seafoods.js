import { api } from "../index";

export default {
  async allSeafoods() {
    return await api.get("/seafood/allseafoods");
  },

  async allSeafoodsWithGradings() {
    return await api.get("/seafood/allseafoodsWithGradings");
  },

  async storeSeafood(payload) {
    return await api.post("/seafood/storeseafood", payload).then(() => {
      window.location.href = "/seafoods";
    });
  },

  async updateSeafood(payload) {
    return await api.post("/seafood/updateseafood", payload);
  },

  async allSeafoods(id) {
    return await api.delete(`/seafood/deleteseafood/${id}`);
  },
};
