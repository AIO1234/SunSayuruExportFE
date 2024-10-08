export default [
    {
      path: "/airfreights",
      name: "airfreights",
      component: () => import("@/views/MasterData/AirfreightManagement/index.vue"),
      meta: {
        authReuire: true,
        role: ["Super Admin", "Admin"],
        pageTitle: "Manage Airfreights",
        breadcrumb: [
          {
            text: "Airfreights",
            active: true,
          },
        ],
      },
    },
  ];
  