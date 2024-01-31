export default [
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/UserManagement/users.vue"),
      meta: {
        pageTitle: "User Management",
        breadcrumb: [
          {
            text: "User List",
            active: true,
          },
        ],
      },
    },
  ];
  