<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <div class="pt-3"></div>
    <b-row>
      <b-col lg="8">
        <h2 class="shipment_number">Namal’s receiving</h2>
      </b-col>
      <b-col lg="4" cols="12">
        <b-row class="margins">
          <b-col lg="6" cols="6">
            <b-button class="suplierearnings_download_button" variant="none"
              ><span class="suplierearnings_download_button_color"
                >Download</span
              ></b-button
            >
          </b-col>
          <b-col lg="6" cols="6">
            <b-button class="suplierearnings_sendemail_button" variant="none"
              ><span class="suplierearnings_sendemail_button_color"
                >Send Email</span
              ></b-button
            >
          </b-col>
        </b-row>
        <!-- <div class="row d-flex justify-content">
        
          
        </div> -->
      </b-col>
    </b-row>

    <div class="pt-5"></div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
    </b-table>
  </div>
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
  props: {
    selectedItem: Object,
  },
  data() {
    return {
      fields: [
        {
          key: "reveivedate",
          label: "Receive date",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "seafood",
          label: "Seafood type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "quality",
          label: "Quality",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "grading",
          label: "Grading (Kg)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },

        {
          key: "weight",
          label: "Weight(Kg)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "rate",
          label: "Price rate",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "cost",
          label: "Total cost",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          reveivedate: "2023/02/05",
          seafood: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          weight: "8",
          rate: "100.00",
          cost: "800.00",
        },
        {
          reveivedate: "2023/02/05",
          seafood: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          weight: "8",
          rate: "100.00",
          cost: "800.00",
        },
        {
          reveivedate: "2023/02/05",
          seafood: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          weight: "8",
          rate: "100.00",
          cost: "800.00",
        },
      ],
    };
  },
};
</script>
