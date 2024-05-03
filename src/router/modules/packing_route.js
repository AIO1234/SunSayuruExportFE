export default [
  {
    path: "/packinglist",
    name: "packinglist",
    component: () => import("@/views/PackingManagement/index.vue"),
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
    path: "/createshipment/:country/:buyer",
    name: "createshipment",
    component: () =>
      import(
        "@/views/PackingManagement/PackingandReceiving/createshipments.vue"
      ),
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

  {
    path: "/viewpacking",
    name: "viewpacking",
    component: () => import("@/views/PackingManagement/PackingandReceiving/Components/ViewPacking.vue"),
    meta: {
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
    path: "/packinglistinner/:shipment_id/:shipment_no",
    name: "packinglistinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/PackingListInnerView.vue"
      ),
    meta: {
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
    path: "/custominvoiceinner",
    name: "custominvoiceinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/CustomInvoiceView.vue"
      ),
    meta: {
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
    path: "/buyerinvoiceinner/:shipment_id/:shipment_no",
    name: "buyerinvoiceinner",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/BuyerInvoiceView.vue"
      ),
    meta: {
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
    path: "/editcustominvoice",
    name: "editcustominvoice",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/EditCustomInvoice.vue"
      ),
    meta: {
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
    path: "/editbuyerinvoice",
    name: "editbuyerinvoice",
    component: () =>
      import(
        "@/views/PackingManagement/Documentaion/Components/EditBuyerInvoice.vue"
      ),
    meta: {
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
