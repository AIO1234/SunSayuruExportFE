import Vue from "vue";
import VueRouter from "vue-router";
import mainRoute from "./modules/home_route";
import packingRoute from "./modules/packing_route";
import pricerateRoute from "./modules/pricerate_route";
import suplierRoute from "./modules/suplier_route";
import userRoute from "./modules/user_route";
import countryRoute from "./modules/country_route";
import buyerRoute from "./modules/buyer_route";
import qualityRoute from "./modules/quality_route";
import gradingRoute from "./modules/gradings_route";
import seafoodRoute from "./modules/seafood_route";
import airfreightsRoute from "./modules/airfreights_route";
import paymentRoute from "./modules/payment_route";
import profitRoute from "./modules/profits";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    ...mainRoute,
    ...packingRoute,
    ...pricerateRoute,
    ...suplierRoute,
    ...userRoute,
    ...countryRoute,
    ...buyerRoute,
    ...qualityRoute,
    ...gradingRoute,
    ...seafoodRoute,
    ...airfreightsRoute,
    ...paymentRoute,
    ...profitRoute,
  ],
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
