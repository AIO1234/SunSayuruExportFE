export default [
  {
    path: "/shipment_profit",
    name: "shipment_profit",
    component: () => import("@/views/Reports/ShipmentProfitReport.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Profit & Loss Reports",
      breadcrumb: [
        {
          text: "Shipment Wise",
          active: true,
        },
      ],
    },
  },

  {
    path: "/monthly_profit",
    name: "monthly_profit",
    component: () => import("@/views/Reports/MonthlyWiseProfitReport.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Profit & Loss Reports",
      breadcrumb: [
        {
          text: "Monthly Wise",
          active: true,
        },
      ],
    },
  },

  {
    path: "/shipments_wise_monthly_profit_inner/:year/:month",
    name: "shipments_wise_monthly_profit_inne",
    component: () =>
      import("@/views/Reports/MonthlyWiseShipmenrProfitReport.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Profit & Loss Reports",
      breadcrumb: [
        {
          text: "Monthly Profit - Shipment Wise",
          active: true,
        },
      ],
    },
  },
   {
    path: "/shipments_wise_profit_loss/:shipment_id",
    name: "shipments_wise_profit_loss",
    component: () =>
      import("@/views/Reports/ShipmentWiseProfitLossReport.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Profit & Loss Reports",
      breadcrumb: [
        {
          text: "Profit Loss - Shipment Wise",
          active: true,
        },
      ],
    },
  },
   {
    path: "/shipment_wise_cost",
    name: "shipment_wise_cost",
    component: () => import("@/views/Reports/ShipmentWiseCostReport.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Shipment Wise Cost Reports",
      breadcrumb: [
        {
          text: "Shipment Wise Cost",
          active: true,
        },
      ],
    },
  },

];
