export default [
  {
    path: "/packinglist",
    name: "packinglist",
    component: () => import("@/views/PackingManagement/packings.vue"),
    meta: {
      pageTitle: "Packing & receiving",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/meterialcosts",
    name: "meterialcosts",
    component: () => import("@/views/MeterialCostManagement/meterialcosts.vue"),
    meta: {
      pageTitle: "Material Costs",
      breadcrumb: [
        {
          text: "Material Costs",
          active: true,
        },
      ],
    },
  },
];
