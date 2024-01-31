<template>
  <div></div>
</template>

<script>
import {
  BCard,
  BTable,
  BCol,
  BRow,
  BCardText,
  BLink,
  BContainer,
} from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCol,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  data() {
    return {
      fields: [
        {
          key: "reference",
          label: "Reference",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "date",
          label: "Date",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "customer",
          label: "Customer",
          sortable: true,
          thStyle: { width: "5%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "sub_cat",
          label: "Sub_Category",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "service",
          label: "Service",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "offer",
          label: "Offer",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          thStyle: { width: "2%" },
          tdClass: "custom-cell-padding",
        },
      ],

      items: [
        {
          reference: "RDV-3967371",
          date: "14/05/23",
          customer: "Leveque Marc ",
          sub_cat: "Sub-cat A",
          service: "Serv 3+5",
          offer: "36€",
          status: "Pending",
        },
        {
          reference: "RDV-5788906",
          date: " 11/05/23",
          customer: "Dubeau François",
          sub_cat: "Sub-cat E",
          service: "Serv 7",
          offer: " 52€",
          status: "Confirmed",
        },
        {
          reference: "RDV-5788906",
          date: " 11/05/23",
          customer: "Dubeau Helene",
          sub_cat: "Sub-cat E",
          service: "Serv 7",
          offer: " 52€",
          status: "Confirmed",
        },
      ],
    };
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
