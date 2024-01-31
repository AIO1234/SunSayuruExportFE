export default [
    {
      path: "/pricerates",
      name: "pricerates",
      component: () => import("@/views/PriceRateManagement/pricerates.vue"),
      meta: {
        pageTitle: "Price Ratings",
        breadcrumb: [
          {
            text: "Price List",
            active: true,
          },
        ],
      },
    },
  ];
  