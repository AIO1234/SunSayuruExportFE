<template>
  <div>
    <!-- additional payments table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="additionalpayments"
        :fields="fields"
        per-page="10"
        :current-page="currentPage"
      >
        <template #cell(amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(additionals_checks)="data">
          <span v-if="data.item.check_id !== null">
            {{ data.value.check_no }} - <b>{{ getPrice(data.value.amount) }}</b>
          </span>
          <span v-else> N/A </span>
        </template>

        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button
                variant="flat-none"
                @click="
                  $router.push(
                    `/addtional_payments_edit/${data.item.id}/${data.item.payment_no}`
                  )
                "
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

      <!-- pagination -->
      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="additionalpayments.length"
              per-page="10"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
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
  BPagination,
} from "bootstrap-vue";
export default {
  name: "AirfreightTable",
  components: {
    BPagination,
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
      currentPage: 1,
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
          key: "payment_description",
          label: "Payment description",
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
          key: "payment_method",
          label: "Payment Method",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "additionals_checks",
          label: "Check Number",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "amount",
          label: "Total Cost(LKR)",
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
    additionalpayments: Array,
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
