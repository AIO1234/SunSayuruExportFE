<template>
  <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
    <template #cell(action)="data">
      <b-row>
        <b-col lg="2">
          <b-button variant="none">
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 117855.png"
            ></b-img>
          </b-button>
        </b-col>
        <b-col lg="2">
          <b-button variant="none">
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 59.png"
            ></b-img>
          </b-button>
        </b-col>
      </b-row>
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
  name: "EarningTable",
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
          key: "suplierid",
          label: "Supplier ID",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "supliername",
          label: "Supplier name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "uptodate",
          label: "Up to date",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "totalearnings",
          label: "Total earning($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "totalweight",
          label: "Total weight(Kg)",
          sortable: true,
          // thStyle: { width: "2%" },
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
          suplierid: "Sup001",
          supliername: "Kasun Perera",
          uptodate: "2024.02.11",
          totalearnings: "1000",
          totalweight: "200",
        },
        {
          suplierid: "Sup001",
          supliername: "Kasun Perera",
          uptodate: "2024.02.11",
          totalearnings: "1000",
          totalweight: "200",
        },
        {
          suplierid: "Sup001",
          supliername: "Kasun Perera",
          uptodate: "2024.02.11",
          totalearnings: "1000",
          totalweight: "200",
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
