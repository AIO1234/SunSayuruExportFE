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
];
