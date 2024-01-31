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
];
