import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async addUser(payload) {
    return await api.post("/adduser", payload).then(() => {
      notification.toast("SuccessFully User Added", "success");
    });
  },

  async getRoles() {
    return await api.get("/roles");
  },
};
