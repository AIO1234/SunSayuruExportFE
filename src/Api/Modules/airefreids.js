import { api } from "../index";

export default {
  async allAirfreids() {
    return await api.get("/airfreight/allqualities");
  },

  async storeAirefreids(payload) {
    return await api.post("/airfreight/storeairefreid", payload);
  },

  async updateAirefreid(id, payload) {
    return await api.put(`/airfreight/updateairefreid/${id}`, payload);
  },

  async deleteAirefreid(id) {
    return await api.delete(`/airfreight/deleteairefreid/${id}`);
  },
};
