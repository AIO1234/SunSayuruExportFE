import { api } from "../index";

export default {
  async seafoodGrading(payload) {
    return await api.post("/grading/seafoodgradings", payload);
  },

  async allGradings() {
    return await api.get("/grading/allgradings");
  },

  async storeGrading(payload, status) {
    if (status === true) {
      return await api.post("/grading/storegrading", payload).then(() => {
        window.location.href = "/gradings";
      });
    } else {
      return await api.post("/grading/storegrading", payload);
    }
  },

  async updateGrading(id, payload) {
    return await api.put(`/grading/updategrading/${id}`, payload);
  },

  async deleteGrading(id) {
    return await api.delete(`/grading/deletegrading/${id}`);
  },
};
