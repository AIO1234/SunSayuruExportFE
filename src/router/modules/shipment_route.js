export default [
  {
    path: "/shipments",
    name: "shipments",
    component: () => import("@/views/ShipmentManagement/shipments.vue"),
    meta: {
      pageTitle: "Shipments",
      breadcrumb: [
        {
          text: "Shipment List",
          active: true,
        },
      ],
    },
  },

  {
    path: "/createshipment",
    name: "createshipment",
    component: () => import("@/views/PackingManagement/PackingandReceiving/createshipments.vue"),
    meta: {
      pageTitle: "Create Shipment",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },
];
