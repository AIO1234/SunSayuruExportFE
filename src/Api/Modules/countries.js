import { api } from "../index";

export default {
  async allCountries() {
    return await api.get("/allcountries")
  },
};
