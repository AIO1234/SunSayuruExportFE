import { toast } from "@/ApiConstance/toast";

export default {
  init(router, store) {
    router.beforeEach(async (to, _, next) => {
      await store.dispatch("autoLogin");

      const { isLogedIn } = store.getters;
      const { getRole } = store.getters;
      console.log(isLogedIn);
      if (
        to.meta.authReuire &&
        isLogedIn &&
        to.meta.role.includes(getRole) === true
      ) {
        next();
      } else if (to.meta.authReuire && isLogedIn && to.meta.role !== getRole) {
        toast("You Dont Have Permissions To Access This", "error");
      } else if (to.meta.authReuire && !isLogedIn) {
        next({
          path: "/",
          replace: true,
        });
      } else if (!to.meta.authReuire && isLogedIn) {
        next({
          path: "/dashboard",
          replace: true,
        });
      } else {
        next();
      }

      return next();
    });
  },
};
