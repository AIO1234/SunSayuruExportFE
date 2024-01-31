<template>
  <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
    <template #cell(action)="data">
      <b-button variant="none">
        <feather-icon icon="Edit2Icon" class="mr-25"
          />
      </b-button>
    </template>
    <template #cell(status)="data">
      <b-badge
        v-if="data.value === 'Ongoing'"
        style="background-color: #cdf59b; color: #67b108"
        >{{ data.value }}</b-badge
      >
      <b-badge
        v-else-if="data.value === 'Done'"
        style="background-color: #ff8787; color: #de0000"
        >{{ data.value }}</b-badge
      >
    </template>

    <template #cell(costlist)="data">
     
        <div>Boxes - 5.00</div>
        
        <div>Ice - 5.00</div>
      
    </template>
  </b-table>
</template>

<script>
import {
  BModal,
  BCard,
  BTable,
  BBadge,
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
  name: "PriceRateTable",
  components: {
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
  },
  data() {
    return {
      show: false,
      selectedItem: {},
      fields: [
        {
          key: "boxnumber",
          label: "Box Number",
          sortable: true,
          //   thStyle: { width: "80%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "costlist",
          label: "Cost List",
          sortable: true,
          //   thStyle: { width: "80%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Amount",
          sortable: true,
          //   thStyle: { width: "80%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          boxnumber: "P001",
          amount: "20.00",
        },
        {
          boxnumber: "P001",
          amount: "20.00",
        },
        {
          boxnumber: "P001",
          amount: "20.00",
        },
      ],
    };
  },
  async created() {},

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
