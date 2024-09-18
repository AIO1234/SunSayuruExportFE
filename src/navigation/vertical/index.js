export default [
  {
    title: "Dashboard",
    route: "dashboard",
    icon: "HomeIcon",
    role: ["Super Admin", "Admin", "Staff"],
  },
  {
    title: "Users",
    icon: "UsersIcon",
    route: "users",
    role: ["Super Admin", "Admin"],
  },
  {
    title: "Packing & receiving",
    icon: "PackageIcon",
    route: "packinglist",
    role: ["Super Admin", "Admin", "Staff"],
  },
  {
    title: "Supplier Bills",
    icon: "UserIcon",
    role: ["Super Admin", "Admin", "Staff"],
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
    role: ["Super Admin", "Admin"],
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

  {
    title: "Airfreight Bills",
    route: "airfreightbill",
    icon: "FileTextIcon",
    role: ["Super Admin"],
  },

  {
    title: "Payments",
    icon: "DollarSignIcon",
    role: ["Super Admin"],
    children: [
      {
        title: "Out Going",
        route: "outgoingpayments",
      },
      {
        title: "Remittance",
        route: "incomming_payments",
      },
    ],
  },
];
