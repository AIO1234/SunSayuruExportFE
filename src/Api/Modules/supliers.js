import { api } from "../index";

export default {
  async allSupliers() {
    return await api.get("/suplier/allsupliers");
  },

  async storeSuplier(payload) {
    return await api.post("/suplier/storesuplier", payload).then(
      () => {
        window.location.href = '/allsupliers'
      }
    );
  },

  async updateSuplier(id, payload) {
    return await api.put(`/suplier/updatesuplier/${id}`, payload);
  },

  async deleteSuplier(id) {
    return await api.delete(`/suplier/deletesuplier/${id}`);
  },
};
