export default [
  {
    path: "/suplierearnings",
    name: "suplierearnings",
    component: () => import("@/views/SuplierEarningsManagement/suplierearnings.vue"),
    meta: {
      pageTitle: "Suplier Earnings",
      breadcrumb: [
        {
          text: "Suplier Earnings",
          active: true,
        },
      ],
    },
  },
];
