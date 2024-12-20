export default [
  {
    path: "/airfreights",
    name: "airfreights",
    component: () =>
      import("@/views/MasterData/AirfreightManagement/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Airfreights",
      breadcrumb: [
        {
          text: "Airfreights",
          active: true,
        },
      ],
    },
  },

  {
    path: "/airfreightbill",
    name: "airfreightbill",
    component: () => import("@/views/AirfreightBills/index.vue"),
    meta: {
      pageTitle: "Airfreight Bills",
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      breadcrumb: [
        {
          text: "Airfreight Bills",
          active: true,
        },
      ],
    },
  },

  {
    path: "/shipmentwiseairfreightbill/:id/:company_name",
    name: "shipmentwiseairfreightbill",
    component: () =>
      import("@/views/AirfreightBills/Components/ShipmentWiseView.vue"),
    meta: {
      pageTitle: "Airfreight Bills",
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      breadcrumb: [
        {
          text: "Shipment Wise",
          active: true,
        },
      ],
    },
  },
];
