<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="bills" :fields="fields">
      <template #cell(total_company_lkr_cost)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(total_company_usd_cost)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(lkr_received_payments)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(usd_received_payments)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(lkr_due_balance)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(usd_due_balance)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="2">
            <b-button
              variant="flat-none"
              @click="
                $router.push(
                  `/shipmentwiseairfreightbill/${data.item.id}/${data.item.company_name}`
                )
              "
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 117855.png"
              ></b-img>
            </b-button>
          </b-col>
          <b-col lg="2"> </b-col>
        </b-row>
      </template>
    </b-table>
  </div>
</template>
<script>
import { BTable, BRow, BCard, BImg, BCol, BButton } from "bootstrap-vue";
export default {
  components: {
    BTable,
    BRow,
    BCard,
    BImg,
    BCol,
    BButton,
  },
  data() {
    return {
      fields: [
        {
          key: "company_name",
          label: "Company Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_company_lkr_cost",
          label: "Total Cost(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_company_usd_cost",
          label: "Total Cost($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "lkr_received_payments",
          label: "Total Paid Payments(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usd_received_payments",
          label: "Total Paid Payments($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "lkr_due_balance",
          label: "Total Due Payments(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usd_due_balance",
          label: "Total Due Payments($)",
          sortable: true,
          // thStyle: { width: "2%" },
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
    bills: Array,
  },
};
</script>
