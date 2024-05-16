export default [
  {
    path: "/shipmentwiseearnings",
    name: "shipmentwiseearnings",
    component: () =>
      import("@/views/SuplierEarningsManagement/ShipmentWise/index.vue"),

    meta: {
      authReuire: true,
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
    path: "/shipmentwiseearnings/:shipment_id/:invoice_no/supliers",
    name: "shipmentwisesupliers",
    component: () =>
      import(
        "@/views/SuplierEarningsManagement/ShipmentWise/Components/ViewEarnings.vue"
      ),

    meta: {
      authReuire: true,
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
    path: "/shipmentwiseearnings/:shipment_id/supliers/:suplier_id/:suplier_name/eranings",
    name: "shipmentwisesupliereranings",
    component: () =>
      import(
        "@/views/SuplierEarningsManagement/ShipmentWise/Components/AllSingleSuplierEarnings.vue"
      ),

    meta: {
      authReuire: true,
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
      authReuire: true,
      pageTitle: "Suplier wise",
      breadcrumb: [
        {
          text: "Suplier Bills",
          active: true,
        },
      ],
    },
  },

  {
    path: "/suplierwiseearnings/supliers/:suplier_id/:suplier_name/earnings",
    name: "suplierwisesupliereranings",
    component: () =>
      import(
        "@/views/SuplierEarningsManagement/SuplierWise/Components/ViewEarnings.vue"
      ),
    meta: {
      authReuire: true,
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
