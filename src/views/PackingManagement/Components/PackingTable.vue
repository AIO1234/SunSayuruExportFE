<template>
  <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
    <template #cell(supliers)="data">
     
        <div>Namal - 6kg</div>
      
        <div>Kasun - 6kg</div>
      
    </template>
    <template #cell(materialcost)="data">
   
        <div>Boxes - 5.00</div>
    
        <div>Ice - 5.00</div>
    
    </template>
    <template #cell(status)="data">
      <b-badge style="background-color:#CDF59B ; color: #67B108;">{{ data.value }}</b-badge>
    </template>
    <template #cell(action)="data">
      <b-row no-gutters >
        <b-col lg="6" >
          <b-button variant="none">
            <feather-icon icon="Edit2Icon" class="mr-25"
          /></b-button>
        </b-col>
        <b-col lg="6">
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
  name: "UserTable",
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
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "seafoodtype",
          label: "SeaFood Type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "quality",
          label: "Quality",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "grading",
          label: "Grading",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "totalweight",
          label: "Total Weight",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "supliers",
          label: "Supliers",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "materialcost",
          label: "Material Cost",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "status",
          label: "Status ",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          boxnumber: "P001",
          seafoodtype: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          status: "Ongoing",
        },
        {
          boxnumber: "U002",
          seafoodtype: "Sithum Perera",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          status: "Ongoing",
        },
        {
          boxnumber: "U003",
          seafoodtype: "Sithum Perera",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          status: "Ongoing",
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
