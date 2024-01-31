export default [
  {
    title: "Dashboard",
    route: "home",
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
    title: "Packings",
    icon: "PackageIcon",
    // role: "Admin",
    children: [
      {
        title: "Packing List",
        route: "packinglist",
      },
      {
        title: "Material Cost",
        route: "meterialcosts",
      },
    ],
  },
  {
    title: "Supplier Earnings",
    icon: "UserIcon",
    // role: "Admin",
    route: "suplierearnings",
  },
  {
    title: "Price Rates",
    icon: "DollarSignIcon",
    route: "pricerates",
    // role: "Admin",
  },
  {
    title: "Shipments",
    icon: "ship",
    route: "shipments",
    // role: "Admin",
  },
];
