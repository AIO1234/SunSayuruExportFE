<template>
  <div>
    <!-- suplier payments table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="suplierpayments"
        :fields="fields"
      >
        <template #cell(amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(suplier_checks)="data">
          <span v-if="data.item.check_id !== null">
            {{ data.value.check_no }} - <b>{{ getPrice(data.value.amount) }}</b>
          </span>
          <span v-else> N/A </span>
        </template>

        <template #cell(suplier_payment_invoices)="data">
          <div v-for="item in data.value" :key="item">
            {{ item.invoice_no }} - <b>{{ item.pivot.status }}</b>
            <div class="pt-1"></div>
          </div>
        </template>

        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="2">
              <b-button
                variant="flat-none"
                @click="
                  $router.push(
                    `/suplier_payments_update/${data.item.id}/${suplier.name}/${suplier.id}/${data.item.payment_no}`
                  )
                "
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="2"> </b-col>
          </b-row>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
export default {
  name: "SuplierPaymentsTable",
  components: {
    BFormInput,
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      selectedPayment: {},
      show: false,
      fields: [
        {
          key: "payment_no",
          label: "Payment No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "payment_date",
          label: "Date",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "amount",
          label: "Amount(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "payment_method",
          label: "Payment Method",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "suplier_checks",
          label: "Check Number",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "suplier_payment_invoices",
          label: "Invoice Number/s",
          sortable: true,
          thStyle: { width: "20%" },
          // tdClass: "td-style",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          // thStyle: { width: "15%" },
          // tdClass: "td-style",
        },
      ],
    };
  },
  props: {
    suplierpayments: Array,
    suplier: Object,
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedAirfreight = item;
    },

    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
