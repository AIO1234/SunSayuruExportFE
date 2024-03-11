<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <h2 class="shipment_number">Shipment no - S001</h2>
    <div class="pt-2"></div>
    <b-card>
      <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button
                variant="none"
                @click="$router.push('/shipmentwiseearnings/supliers/eranings')"
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
                ></b-img>
              </b-button>
            </b-col>
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
