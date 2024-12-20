export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Home.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Home",
      breadcrumb: [
        {
          text: "Dashboard",
          active: true,
        },
      ],
    },
  },

  {
    path: "/",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "full",
      authReuire: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
    meta: {
      layout: "full",
      authReuire: false,
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      authReuire: false,
      layout: "full",
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];
