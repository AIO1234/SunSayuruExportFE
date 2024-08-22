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
        title: "Supplier wise",
        route: "suplierwiseearnings",
      },
    ],
  },
  {
    title: "Master Data",
    icon: "DatabaseIcon",
    children: [
      {
        title: "Manage Countries",
        route: "countries",
      },
      {
        title: "Manage Buyers",
        route: "buyers",
      },
      {
        title: "Manage Qualities",
        route: "qualities",
      },
      {
        title: "Manage Seafoods",
        route: "seafoods",
      },
      {
        title: "Manage Gradings",
        route: "gradings",
      },
      {
        title: "Manage Suppliers",
        route: "allsupliers",
      },
      {
        title: "Manage Arifreids",
        route: "airfreights",
      },
    ],
  },
];
