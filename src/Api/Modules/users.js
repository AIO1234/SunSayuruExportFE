import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async addUser(payload) {
    return await api.post("/adduser", payload);
  },

  async getRoles() {
    return await api.get("/roles");
  },

  async allUsers() {
    return await api.get("/allusers");
  },
  async updateUser(id, payload) {
    return await api.put(`/updateuser/${id}`, payload);
  },

  async deleteUser(id) {
    return await api.delete(`/deleteuser/${id}`);
  },
};
