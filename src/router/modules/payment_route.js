export default [
  {
    path: "/outgoing_payments",
    name: "outgoingpayments",
    component: () =>
      import("@/views/PaymentManagement/OutgoingPayments/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },
  {
    path: "/suplier_payments_add/:id/:name",
    name: "suplier_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/SuplierPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/suplier_payments_update/:payment_id/:suplier_name/:suplier_id/:payment_code",
    name: "suplier_payments_update",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/SuplierPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/airfreight_payments_add/:id/:name",
    name: "airfreight_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AirfreightPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/airfreight_payments_edit/:payment_id/:company_name/:airfreight_id/:payment_code",
    name: "airfreight_payments_edit",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AirfreightPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/addtional_payments_add",
    name: "addtional_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AdditionalPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/addtional_payments_edit/:payment_id/:payment_code",
    name: "addtional_payments_edit",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AdditionalPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin", "Staff"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/incomming_payments",
    name: "incomming_payments",
    component: () =>
      import("@/views/PaymentManagement/IncommingPayments/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "Incomming Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/buyer_payments_add/:buyer_id/:buyer_code/:country_name/:country_id",
    name: "buyer_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/IncommingPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "Incomming Payments",
          active: true,
        },
      ],
    },
  },

  {
    path: "/buyer_payments_update/:buyer_id/:buyer_code/:payment_code/:country_name/:payment_id/:country_id",
    name: "buyer_payments_update",
    component: () =>
      import(
        "@/views/PaymentManagement/IncommingPayments/Components/EditPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "Incomming Payments",
          active: true,
        },
      ],
    },
  },
];
