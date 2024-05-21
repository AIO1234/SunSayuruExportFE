import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async addUser(payload) {
    return await api.post("/user/adduser", payload);
  },

  async getRoles() {
    return await api.get("/user/roles");
  },

  async allUsers() {
    return await api.get("/user/allusers");
  },
  async updateUser(id, payload) {
    return await api.put(`/user/updateuser/${id}`, payload);
  },

  async deleteUser(id) {
    return await api.delete(`/user/deleteuser/${id}`);
  },
};
