import { api } from "../index";

export default {
  async allAirfreids() {
    return await api.get("/airfreight/allairfreights");
  },

  async storeAirefreid(payload) {
    return await api.post("/airfreight/storeairfreight", payload).then(() => {
      window.location.href = "/airfreights";
    });
  },

  async updateAirefreid(id, payload) {
    return await api.put(`/airfreight/updateairfreight/${id}`, payload);
  },

  async deleteAirefreid(id) {
    return await api.delete(`/airfreight/deleteairfreight/${id}`);
  },
};
