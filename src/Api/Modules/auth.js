import { api } from "../index";
import notification from "@/ApiConstance/toast";
import store from "@/store";

export default {
  async login(payload) {
    return await api.post("/login", payload).then((res) => {
      const token = res.data.data.token;
      const role = res.data.data.roles[0].name;
      localStorage.setItem("sunsayuruauthrole", role);
      localStorage.setItem("sunsayuruauthtoken", token);
      localStorage.setItem("sunsayurucacheuser", res.data.data.data.name);
      store.commit("SET_CURRENT_USER_NAME", res.data.data.data.name);
      store.commit("SET_LOGGED_ROLE", role);

      if (
        localStorage.role === "Super Admin" ||
        localStorage.role === "Admin"
      ) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/packinglist";
      }
    });
  },
  async profile() {
    return await api.get("/profile");
  },
  async logout() {
    return await api.post("/logout").then((res) => {
      notification.toast("SuccessFully Log Out", "success");
    });
  },
};
