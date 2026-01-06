import { api } from "../index";
import globleFilter from "/globleFilter";

export default {
  async allChecks(query) {
    return await api.get(`/check_book/allchecks?${globleFilter.returnParams(query)}`);
  },

  async storeCheck(payload) {
    return await api.post("/check_book/storecheck", payload).then(() => {
      window.location.href = "/checkbook";
    });;
  },

  async continuChecks() {
    return await api.get("/check_book/getcontinuechecks");
  },

  async updateCheck(payload) {
    return await api.post("/check_book/updatecheck" , payload);
  },


  async changeCheckStatus(payload) {
    return await api.post("/check_book/changecheckstatus", payload);
     
   }

};
