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
        <div class="d-flex justify-content-end">
          <b-row>
            <b-col lg="5" cols="6">
              <b-button
                class="download_button"
                variant="none"
                @click="generate()"
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
        per-page="20"
        :current-page="currentPage"
      >
      </b-table>
      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="details.length"
              per-page="20"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <br />

    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="10" cols="6"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="6"
            ><span class="totaltext ml-0">
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
            ><span class="totaltext ml-0">
              {{ getPrice(totalearnings) }}</span
            ></b-col
          >
        </b-row>
      </div>
    </b-container>

    <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
      <EmailModal title="Send Suplier Bill" />
    </b-modal>

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="SuplierInvoice"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1100px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <!-- suplier invoice -->
          <div class="buyer_invoice">
            <div class="invoice_padding_one">
              <div class="text-center">
                <h2 class="invoice_heading">
                  SUN SAYURU SEA FOODS EXPORTS (PVT) LTD.
                </h2>
                <h5 class="invoice_sub_heading">
                  NO.1068/3, ALUTHKURUWA, PITIPANA, NEGOMBO, SRI LANKA.
                </h5>
                <h5 class="invoice_sub_heading">Tel : +94 772529262</h5>

                <div class="invoice_padding">
                  <span class="cost_sheet">Invoice</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-5 suplierearnings">
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
                    ><span class="totaltext ml-0">
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
          </div>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>
<script>
import VueHtml2pdf from "vue-html2pdf";
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
  BPagination,
} from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
import EmailModal from "@/Components/EmailModal.vue";
export default {
  components: {
    VueHtml2pdf,
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
    BPagination,
  },
  props: {
    selectedItem: Object,
  },
  data() {
    return {
      currentPage: 1,
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

    generate() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
