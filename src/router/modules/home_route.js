export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Home.vue"),
    meta: {
      pageTitle: "Home",
      breadcrumb: [
        {
          text: "Home",
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
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];
