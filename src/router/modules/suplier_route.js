export default [
  {
    path: "/shipmentwiseearnings",
    name: "shipmentwiseearnings",
    component: () =>
      import("@/views/SuplierEarningsManagement/ShipmentWise/index.vue"),

    meta: {
      pageTitle: "Shipment wise",
      breadcrumb: [
        {
          text: "Suplier Bills",
          active: true,
        },
      ],
    },
  },

  {
    path: "/suplierwiseearnings",
    name: "suplierwiseearnings",
    component: () =>
      import("@/views/SuplierEarningsManagement/SuplierWise/index.vue"),
    meta: {
      pageTitle: "Suplier wise",
      breadcrumb: [
        {
          text: "Suplier Bills",
          active: true,
        },
      ],
    },
  },
];
