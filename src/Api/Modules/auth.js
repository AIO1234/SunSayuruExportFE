import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async login(payload) {
    return await api.post("/login", payload).then((res) => {
      const token = res.data.data.token;
      const role = res.data.data.roles[0].name;
      localStorage.setItem("sunsayuruauthrole", role);
      localStorage.setItem("sunsayuruauthtoken", token);
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
