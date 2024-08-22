export default [
    {
      path: "/seafoods",
      name: "seafoods",
      component: () => import("@/views/MasterData/SeafoodManagement/index.vue"),
      meta: {
        authReuire: true,
        role: ["Super Admin", "Admin", "Staff"],
        pageTitle: "Manage Seafoods",
        breadcrumb: [
          {
            text: "Seafoods",
            active: true,
          },
        ],
      },
    },
  ];
  