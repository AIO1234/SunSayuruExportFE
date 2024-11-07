export default [
  {
    path: "/checkbook",
    name: "checkbook",
    component: () => import("@/views/CheckBook/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Checks",
      breadcrumb: [
        {
          text: "CheckBook",
          active: true,
        },
      ],
    },
  },
];
