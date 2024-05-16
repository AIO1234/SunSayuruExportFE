import profile from "@/Api/Modules/auth";

export default {
  state: {
    current_user_profile: null,
    current_user_data: null,
    current_user_name: null,
    current_user_permission: null,
    logged_role: null,
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
  },
  getters: {
    isLogedIn: (state) =>
      state.logged_role !== null && state.current_user_name !== null,

    getRole: (state) => state.logged_role,

    getUserName: (state) => state.current_user_name,
    // currentUser: state => state.current_user_data,
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
