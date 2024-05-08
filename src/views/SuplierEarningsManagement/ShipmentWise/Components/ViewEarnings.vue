<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <h2 class="shipment_number">
      Shipment no - {{ $route.params.invoice_no }}
    </h2>
    <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="supliers"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button
                variant="none"
                @click="
                  $router.push(
                    `/shipmentwiseearnings/${$route.params.shipment_id}/supliers/${data.item.id}/${data.item.name}/eranings`
                  )
                "
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
                ></b-img>
              </b-button>
            </b-col>
          </b-row>
        </template>

        <template #cell(total_amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
import reportApi from "@/Api/Modules/reports";
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
  // props: {
  //   selectedItem: Object,
  // },
  async created() {
    await this.shipmentViseSupliers();
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Suplier",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_amount",
          label: "Total Cost (Rs)",
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
      supliers: [],
    };
  },

  methods: {
    async shipmentViseSupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      const res = await reportApi.shipmentiseSupliers(payload);
      this.supliers = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>
