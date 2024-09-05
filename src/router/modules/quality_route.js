export default [
  {
    path: "/qualities",
    name: "qualities",
    component: () => import("@/views/MasterData/Qualitymnagement/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Qualities",
      breadcrumb: [
        {
          text: "Qualities",
          active: true,
        },
      ],
    },
  },
];
