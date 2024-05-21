import { api } from "../index";

export default {
  async allSeafoods() {
    return await api.get("/seafood/allseafoods")
  },
};
