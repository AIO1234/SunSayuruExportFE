<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >

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
    <div class="pt-2"></div>
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
          key: "suplier",
          label: "Suplier",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "cost",
          label: "Total Cost ($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          suplier: "Namal",
          cost: "1350",
        },
        {
          suplier: "Kausn",
          cost: "1500",
        },
        {
          suplier: "Rangana",
          cost: "1700",
        },
      ],
    };
  },
};
</script>
