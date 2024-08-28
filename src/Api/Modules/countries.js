import { api } from "../index";

export default {
  async allCountries() {
    return await api.get("/country/allcountries");
  },

  async allCountriesWitBuyers() {
    return await api.get("/country/allcountrieswithbuyers");
  },

  async storeCountry(payload) {
    return await api.post("/country/storecountry", payload);
  },

  async updateCountry(id, payload) {
    return await api.put(`/country/updatecountry/${id}`, payload);
  },

  async deleteCountry(id) {
    return await api.delete(`/country/deletecountry/${id}`);
  },
};
