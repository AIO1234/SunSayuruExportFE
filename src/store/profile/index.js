import profile from "@/Api/Modules/auth";

export default {
  state: {
    current_user_profile: null,
    current_user_data: null,
    current_user_name: null,
    current_user_permission: null,
    logged_role: null,
    logged_role: null,

    current_selected_ongoing_payment_tab: null,

    selected_suplier_name_for_payment: null,
    selected_suplier_id_for_payment: null,

    selected_airfreight_name_for_payment: null,
    selected_airfreight_id_for_payment: null,

    selected_buyer_code_for_payment: null,
    selected_buyer_id_for_payment: null,
    selected_buyer_country_id_for_payment: null,
    selected_buyer_country_name_for_payment: null,
  },
  mutations: {
    CLEAR_CURRENT_USER: (state) => {
      state.current_user_data = undefined;
      state.current_user_permission = undefined;
      state.logged_role = undefined;
      localStorage.removeItem("sunsayuruauthtoken");
      localStorage.removeItem("sunsayuruauthrole");
      localStorage.removeItem("sunsayurucacheuser");
    },

    SET_CURRENT_USER_PERMISSION: (state, value) => {
      state.current_user_permission = value;
    },

    SET_LOGGED_ROLE: (state, value) => {
      state.logged_role = value;
    },

    SET_CURRENT_USER: (state, value) => {
      state.current_user_data = value;
    },

    SET_CURRENT_USER_NAME: (state, value) => {
      state.current_user_name = value;
    },

    SET_CURRENT_USER_PROFILE: (state, value) => {
      state.current_user_profile = value;
    },
    UPDATE_USER_INFO: (state, { displayName, photoURL }) => {
      state.current_user_data.user.name = displayName;
      state.current_user_data.user.image = photoURL;
    },

    SET_SELECTED_ONGOING_PAYMENT_TAB: (state, tab) => {
      state.current_selected_ongoing_payment_tab = tab;
    },

    SET_SELECTED_SUPLIER_FOR_PAYMENT: (state, suplierdata) => {
      state.selected_suplier_id_for_payment = suplierdata.id;
      state.selected_suplier_name_for_payment = suplierdata.name;
    },

    SET_SELECTED_AIRFREIGHT_FOR_PAYMENT: (state, airfreightdata) => {
      state.selected_airfreight_id_for_payment = airfreightdata.id;
      state.selected_airfreight_name_for_payment = airfreightdata.company_name;
    },

    SET_SELECTED_BUYER_FOR_PAYMENT: (state, buyertdata) => {
      state.selected_buyer_id_for_payment = buyertdata.id;
      state.selected_buyer_code_for_payment = buyertdata.code;
      state.selected_buyer_country_id_for_payment = buyertdata.country.id;
      state.selected_buyer_country_name_for_payment = buyertdata.country.name;
    },
  },
  getters: {
    isLogedIn: (state) =>
      state.logged_role !== null && state.current_user_name !== null,

    getRole: (state) => state.logged_role,

    getUserName: (state) => state.current_user_name,

    getselectedsuplierforpayment(state) {
      return {
        suplier_id: state.selected_suplier_id_for_payment,
        suplier_name: state.selected_suplier_name_for_payment,
      };
    },

    getselectedairfreightforpayment(state) {
      return {
        airfreight_id: state.selected_airfreight_id_for_payment,
        company_name: state.selected_airfreight_name_for_payment,
      };
    },

    getselectedbuyerforpayment(state) {
      return {
        buyer_id: state.selected_buyer_id_for_payment,
        buyer_code: state.selected_buyer_code_for_payment,
        country_id: state.selected_buyer_country_id_for_payment,
        country_name: state.selected_buyer_country_name_for_payment,
      };
    },

    getselectedongoingpaymenttab: (state) =>
      state.current_selected_ongoing_payment_tab,

    // permissions: state => state.current_user_permission
  },
  actions: {
    setCurrentUser: ({ commit }, payload) => {
      commit("SET_CURRENT_USER", payload);
    },
    // eslint-disable-next-line no-unused-vars
    async afterLogin({ commit }, fromLogin) {
      if (!fromLogin) {
        router.replace("/");
      }
    },
    // async profile({ commit }) {
    //   const profileData = (await profile.profile()).data.data;
    //   commit("SET_CURRENT_USER_PROFILE", profileData);
    //   return profileData;
    //   // await this.dispatch('afterLogin')
    // },
    async autoLogin({ commit, getters }) {
      try {
        const cacheUserToken = localStorage.getItem("sunsayuruauthtoken");
        const cacheUserRole = localStorage.getItem("sunsayuruauthrole");
        const cacheUser = localStorage.getItem("sunsayurucacheuser");

        if (cacheUserToken && cacheUserRole && cacheUser) {
          if (!getters.getRole && !getters.getUserName) {
            commit("SET_CURRENT_USER_NAME", cacheUser);
            commit("SET_LOGGED_ROLE", cacheUserRole);
          } else if (
            getters.getRole !== cacheUserRole ||
            getters.getUserName !== cacheUser
          ) {
            await this.dispatch("logout");
          }
        }
      } catch (e) {
        // console.log(e)
        await this.dispatch("logout");
      }
    },

    async logout({ commit }) {
      try {
        await profile.logout();
      } catch (error) {
        await commit("CLEAR_CURRENT_USER");
      }
      await commit("CLEAR_CURRENT_USER");
      window.location.href = "/";
    },
    async updateCurrentUserPhotoUrl({ commit }, newUrl) {
      commit("UPDATE_USER_INFO", {
        photoURL: newUrl,
      });
    },
  },
};
