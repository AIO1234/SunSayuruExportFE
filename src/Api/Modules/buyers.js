import { api } from "../index";

export default {
  async buyers(payload) {
    return await api.post("/buyer/countrybuyers", payload);
  },

  async buyerswithqualities() {
    return await api.get("/buyer/allbuyerswithqualities");
  },

  async storeBuyer(payload) {
    return await api.post("/buyer/storebuyer", payload).then(() => {
      window.location.href = "/buyers";
    });
  },

  async updateBuyer(payload) {
    return await api.post("/buyer/updatebuyer", payload);
  },

  async deleteBuyer(id) {
    return await api.delete(`/buyer/deletebuyer/${id}`);
  },
};
