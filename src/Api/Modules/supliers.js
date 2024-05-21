import { api } from "../index";

export default {
  async allSupliers() {
    return await api.get("/suplier/allsupliers")
  },
};
