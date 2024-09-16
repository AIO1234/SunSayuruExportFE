<template>
  <div>
    <!-- Airfreight payments table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="airfreightpayments"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button
                variant="flat-none"
                @click="$router.push('/airfreight_payments_edit')"
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
  name: "AirfreightPaymentTable",
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
          key: "date",
          label: "Date",
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
          key: "lkr_amount",
          label: "Amount(Lkr)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "usd_amount",
          label: "Amount(usd)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "check_no",
          label: "Check Number",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "bills",
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
      airfreightpayments: [
        {
          payment_no: "p13",
          date: "p13",
          lkr_amount: "230.00",
          usd_amount: "230.00",
          payment_currency: "LKR",
          check_no: "123444ghf",
          bills: "SDA-144 - Continue",
        },
        {
          payment_no: "p13",
          date: "p13",
          lkr_amount: "230.00",
          usd_amount: "230.00",
          payment_currency: "LKR",
          check_no: "123444ghf",
          bills: "SDA-144 - Continue",
        },
        {
          payment_no: "p13",
          date: "p13",
          lkr_amount: "230.00",
          usd_amount: "230.00",
          payment_currency: "LKR",
          check_no: "123444ghf",
          bills: "SDA-144 - Continue",
        },
        {
          payment_no: "p13",
          date: "p13",
          lkr_amount: "230.00",
          usd_amount: "230.00",
          payment_currency: "LKR",
          check_no: "123444ghf",
          bills: "SDA-144 - Continue",
        },
      ],
    };
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
