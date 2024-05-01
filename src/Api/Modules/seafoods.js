import { api } from "../index";

export default {
  async allSeafoods() {
    return await api.get("/allseafoods")
  },
};
