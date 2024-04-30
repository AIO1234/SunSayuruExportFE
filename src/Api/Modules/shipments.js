import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async addShipment(payload) {
    return await api.post("/addshipment", payload).then(() => {
      notification.toast("SuccessFully Added", "success");
      // window.location.href = "/login";
    });
  },
};
