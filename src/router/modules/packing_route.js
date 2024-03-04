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
    path: "/packinglistinner",
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
    path: "/buyerinvoiceinner",
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
];
