import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async register(payload) {
    return await api.post("/register", payload).then(() => {
      notification.toast("SuccessFully Registered", "success");
      window.location.href = "/login";
    });
  },
  async login(payload) {
    return await api.post("/login", payload).then((res) => {
      notification.toast("SuccessFully Logged In", "success");
      const token = res.data.data.token;
      const role = res.data.data.roles[0].name;

      localStorage.setItem("role", role);
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    });
  },
  async profile() {
    return await api.get("/profile");
  },
  async logout() {
    return await api.get("/logout").then((res) => {
      notification.toast("SuccessFully Log Out", "success");
   
    });
  },
};
