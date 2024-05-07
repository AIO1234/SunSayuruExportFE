<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <div class="pt-3"></div>
    <b-row>
      <b-col lg="8">
        <h2 class="shipment_number">
          {{ $route.params.suplier_name }}’s receiving
        </h2>
      </b-col>
      <b-col lg="4" cols="12">
        <!-- <b-row class="margins">
          <b-col lg="6" cols="6">
            <b-button class="suplierearnings_download_button" variant="none"
              ><span class="suplierearnings_download_button_color"
                >Download</span
              ></b-button
            >
          </b-col>
          <b-col lg="6" cols="6">
            <b-button
              @click="openEmailModal()"
              class="suplierearnings_sendemail_button"
              variant="none"
              ><span class="suplierearnings_sendemail_button_color"
                >Send Email</span
              ></b-button
            >
          </b-col>
        </b-row> -->
        <!-- <div class="row d-flex justify-content">
        
          
        </div> -->
        <div class="d-flex justify-content-end">
          <b-row>
            <b-col lg="5" cols="6">
              <b-button class="download_button" variant="none"
                ><span class="download_button_color">Download</span></b-button
              >
            </b-col>
            <b-col lg="7" cols="6">
              <b-button
                class="sendemail_button"
                variant="none"
                @click="openEmailModal()"
                ><span class="sendemail_button_color"
                  >Send Email</span
                ></b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <div class="pt-5"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="details"
        :fields="fields"
      >
      </b-table>
    </b-card>
    <br />
    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="10" cols="6"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="6"
            ><span class="totaltext ml-4">
              {{ getPrice(totalearnings) }}</span
            ></b-col
          >
        </b-row>
      </div>
      <div class="mobile_only_view">
        <br />
        <b-row>
          <b-col lg="8" cols="8"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="2"
            ><span class="totaltext ml-1">
              {{ getPrice(totalearnings) }}</span
            ></b-col
          >
        </b-row>
      </div>
    </b-container>

    <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
      <EmailModal title="Send Suplier Bill" />
    </b-modal>
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
import reportApi from "@/Api/Modules/reports";
import EmailModal from "@/Components/EmailModal.vue";
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
    EmailModal,
    BLink,
  },
  props: {
    selectedItem: Object,
  },
  data() {
    return {
      fields: [
        {
          key: "receiving_date",
          label: "Receive date",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "seafoodtype",
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
          key: "price_rate",
          label: "Price rate(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Total cost(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
      ],
      details: [],
      totalearnings: "",
    };
  },
  async created() {
    await this.shipmentViseSuplierDetails();
  },
  methods: {
    openEmailModal() {
      this.$refs.EmailModal.show();
    },

    async shipmentViseSuplierDetails() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const payload = {
        shipment_id: parseInt(this.$route.params.shipment_id),
        suplier_id: this.$route.params.suplier_id,
      };
      const res = await reportApi.shipmentiseSupliersDetails(payload);
      this.details = res.data.data.results_data;
      this.totalearnings = res.data.data.total_earning;
      this.$vs.loading.close();
    },
  },
};
</script>
