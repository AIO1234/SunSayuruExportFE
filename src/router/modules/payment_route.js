export default [
  {
    path: "/outgoing_payments",
    name: "outgoingpayments",
    component: () =>
      import("@/views/PaymentManagement/OutgoingPayments/index.vue"),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
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
    path: "/suplier_payments_add",
    name: "suplier_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/SuplierPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
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
    path: "/suplier_payments_update",
    name: "suplier_payments_update",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/SuplierPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
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
    path: "/airfreight_payments_add",
    name: "airfreight_payments_add",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AirfreightPayments/Components/AddPayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
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
    path: "/airfreight_payments_edit",
    name: "airfreight_payments_edit",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AirfreightPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
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
      role: ["Super Admin", "Admin"],
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
    path: "/addtional_payments_edit",
    name: "addtional_payments_edit",
    component: () =>
      import(
        "@/views/PaymentManagement/OutgoingPayments/AdditionalPayments/Components/UpdatePayment.vue"
      ),
    meta: {
      authReuire: true,
      role: ["Super Admin", "Admin"],
      pageTitle: "Manage Payments",
      breadcrumb: [
        {
          text: "OutGoing Payments",
          active: true,
        },
      ],
    },
  },
];
