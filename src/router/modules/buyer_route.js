export default [
    {
      path: "/buyers",
      name: "buyers",
      component: () => import("@/views/MasterData/BuyerManagement/index.vue"),
      meta: {
        authReuire: true,
        role: ["Super Admin", "Admin", "Staff"],
        pageTitle: "Manage Buyers",
        breadcrumb: [
          {
            text: "Buyers",
            active: true,
          },
        ],
      },
    },
  ];
  