<template>
  <div>
    <!-- buyer payments table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="buyerpayments"
        :fields="fields"
      >
        <template #cell(country)="data">
          {{ country }}
        </template>

        <template #cell(amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(buyer_payment_invoices)="data">
          <div v-for="item in data.value" :key="item">
            {{ item.invoice_no }} - <b>{{ item.pivot.status }}</b>
            <div class="pt-1"></div>
          </div>
        </template>

        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button
                variant="flat-none"
                @click="$router.push('/buyer_payments_update')"
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="4"> </b-col>
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
  name: "BuyerPaymentsTable",
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
          key: "country",
          label: "Country",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "payment_currency",
          label: "Payment Currency",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "amount",
          label: "Amount(usd)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "buyer_payment_invoices",
          label: "Invoice Number/s",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },
      ],
    };
  },
  props: {
    buyerpayments: Array,
    country: String,
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedPayment = item;
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
