export default [
    {
      path: "/gradings",
      name: "gradings",
      component: () => import("@/views/MasterData/GradingManagement/index.vue"),
      meta: {
        authReuire: true,
        role: ["Super Admin", "Admin", "Staff"],
        pageTitle: "Manage Gradings",
        breadcrumb: [
          {
            text: "Gradings",
            active: true,
          },
        ],
      },
    },
  ];
  