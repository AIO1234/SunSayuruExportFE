<template>
  <div class="suplierearnings">
    <!-- suplier by report -->
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <h2 class="shipment_number">Invoice No - {{ $route.params.invoice_no }}</h2>
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
    <br />
    <!-- suplier summary -->
    <span class="section_header d-flex justify-content-center"
      >View supplier Summary</span
    >
    <br />
    <div class="text-right">
      <b-button class="download_button" variant="none" @click="generate()"
        ><span class="download_button_color">Download</span></b-button
      >
    </div>
    <br />
    <b-card>
      <b-table
        responsive="sm"
        :items="supliersummary"
        :fields="summaryfields"
        sort-by="seafoodtype"
        sort-desc="true"
        per-page="20"
        :current-page="currentPage"
      >
        <template #cell(amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
        <template #cell(weight)="data">
          {{ getWeight(data.value) }}
        </template>
      </b-table>

      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="supliersummary.length"
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
    <!-- totals -->
    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="6" cols="6"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-0">
              {{ getWeight(totalweight) }} kg</span
            ></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-4">
              {{ getPrice(totalearnings) }}</span
            ></b-col
          >
        </b-row>
      </div>
      <div class="mobile_only_view">
        <br />
        <b-row>
          <b-col cols="8"><span class="totaltext ml-1">Total Cost</span></b-col>
          <b-col cols="4"
            ><span class="totaltext ml-0">
              {{ getPrice(totalearnings) }}</span
            ></b-col
          >
        </b-row>
        <br /><br />
        <b-row>
          <b-col cols="8"
            ><span class="totaltext ml-1">Total Weight</span></b-col
          >
          <b-col cols="4"
            ><span class="totaltext ml-0">
              {{ getWeight(totalweight) }}kg</span
            ></b-col
          >
        </b-row>
      </div>
    </b-container>

    <!-- download pdf of the summary -->
    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="50000"
        :filename="$route.params.invoice_no + '' + ' SuplierSummary'"
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
          <div class="suplierearnings">
            <span class="section_header d-flex justify-content-center"
              >View supplier Summary</span
            >

            <br />
            <b-card>
              <b-table
                responsive="sm"
                :items="supliersummary"
                :fields="summaryfields"
                sort-by="seafoodtype"
                sort-desc="true"
              >
                <template #cell(amount)="data">
                  {{ getPriceWithOutCurrency(data.value) }}
                </template>
                <template #cell(weight)="data">
                  {{ getWeight(data.value) }}
                </template>
              </b-table>
            </b-card>

            <b-container>
              <div class="web_only_view">
                <b-row>
                  <b-col lg="6" cols="6"
                    ><span class="totaltext ml-1">Total</span></b-col
                  >
                  <b-col lg="3" cols="6"
                    ><span class="totaltext ml-0">
                      {{ getWeight(totalweight) }} kg</span
                    ></b-col
                  >
                  <b-col lg="3" cols="6"
                    ><span class="totaltext ml-4">
                      {{ getPrice(totalearnings) }}</span
                    ></b-col
                  >
                </b-row>
              </div>
              <div class="mobile_only_view">
                <br />
                <b-row>
                  <b-col cols="8"
                    ><span class="totaltext ml-1">Total Cost</span></b-col
                  >
                  <b-col cols="4"
                    ><span class="totaltext ml-0">
                      {{ getPrice(totalearnings) }}</span
                    ></b-col
                  >
                </b-row>
                <br /><br />
                <b-row>
                  <b-col cols="8"
                    ><span class="totaltext ml-1">Total Weight</span></b-col
                  >
                  <b-col cols="4"
                    ><span class="totaltext ml-0">
                      {{ getWeight(totalweight) }}kg</span
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
import reportApi from "@/Api/Modules/reports";
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
  BPagination,
  BContainer,
} from "bootstrap-vue";

export default {
  components: {
    VueHtml2pdf,
    BPagination,
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
      currentPage: 1,
      totalearnings: "",
      totalweight: "",
      supliersummary: [],
      summaryfields: [
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
    generate() {
      this.$refs.html2Pdf.generatePdf();
    },
    async shipmentViseSupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      const res = await reportApi.shipmentiseSupliers(payload);
      this.supliers = res.data.data.main_suplier_report;
      this.supliersummary = res.data.data.suplier_report.results_data;
      this.totalearnings = res.data.data.suplier_report.total_earnings;
      this.totalweight = res.data.data.suplier_report.total_weight;
      this.$vs.loading.close();
    },
  },
};
</script>
