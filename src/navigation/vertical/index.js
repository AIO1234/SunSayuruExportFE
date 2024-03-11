export default [
  {
    title: "Dashboard",
    route: "dashboard",
    icon: "HomeIcon",
    // role: "Admin",
  },
  {
    title: "Users",
    icon: "UsersIcon",
    route: "users",
    // role: "Admin",
  },
  {
    title: "Packing & receiving",
    icon: "PackageIcon",
    route: "packinglist",
    // children: [

    //   {
    //     title: "Material Cost",
    //     route: "meterialcosts",
    //   },
    // ],
  },
  {
    title: "Supplier Bills",
    icon: "UserIcon",
    children: [
      {
        title: "Shipment wise",
        route: "shipmentwiseearnings",
      },
      {
        title: "Suplier wise",
        route: "suplierwiseearnings",
      },
    ],
  },
  // {
  //   title: "Price Rates",
  //   icon: "DollarSignIcon",
  //   route: "pricerates",
  //   // role: "Admin",
  // },
  // {
  //   title: "Shipments",
  //   icon: "ship",
  //   route: "shipments",
  //   // role: "Admin",
  // },
];
