export default [
  {
    path: "/countries",
    name: "countries",
    component: () => import("@/views/MasterData/CountryManagement/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Countries",
      breadcrumb: [
        {
          text: "Countries",
          active: true,
        },
      ],
    },
  },
];
