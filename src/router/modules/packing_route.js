export default [
  {
    path: "/packinglist",
    name: "packinglist",
    component: () => import("@/views/PackingManagement/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
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
    path: "/createshipment/:country/:buyer",
    name: "createshipment",
    component: () =>
      import(
        "@/views/PackingManagement/PackingandReceiving/createshipments.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Create Shipment",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/updateshipment/:shipment_id",
    name: "updateshipment",
    component: () =>
      import(
        "@/views/PackingManagement/PackingandReceiving/updateshipments.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Update Shipment",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/viewpacking/:shipment_id",
    name: "viewpacking",
    component: () =>
      import(
        "@/views/PackingManagement/PackingandReceiving/Components/ViewPacking.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Shipment summary",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/packinglistinner/:shipment_id/:invoice_no",
    name: "packinglistinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/PackingListInnerView.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Packing List",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/custominvoiceinner/:shipment_id/:invoice_no",
    name: "custominvoiceinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/CustomInvoiceView.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Custom Invoice",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/buyerinvoiceinner/:shipment_id/:invoice_no",
    name: "buyerinvoiceinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/BuyerInvoiceView.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Buyer Invoice",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/editcustominvoice/:shipment_id/:invoice_no",
    name: "editcustominvoice",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/EditCustomInvoice.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Edit Custom Invoice",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },

  {
    path: "/editbuyerinvoice/:shipment_id/:invoice_no",
    name: "editbuyerinvoice",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/EditBuyerInvoice.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Edit Buyer Invoice",
      breadcrumb: [
        {
          text: "Packing & receiving",
          active: true,
        },
      ],
    },
  },
];
