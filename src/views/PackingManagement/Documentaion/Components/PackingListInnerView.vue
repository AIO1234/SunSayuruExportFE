<template>
  <div>
    <h2 class="packing-list-innerview-heading">View packing list</h2>

    <div class="pt-4">
      <b-row>
        <b-col lg="6"
          ><span class="shipment_number_heading"
            >Shipment Number - {{ $route.params.invoice_no }}</span
          >
        </b-col>
        <b-col lg="6" class="d-flex justify-content-end mobile_paddings">
          <b-row>
            <b-col lg="6" cols="6">
              <b-button
                class="download_button"
                variant="none"
                @click="generate()"
                ><span class="download_button_color">Download</span></b-button
              >
            </b-col>
            <b-col lg="6" cols="6">
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
        </b-col>
      </b-row>
    </div>
    <div class="pt-4"></div>
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
            <span class="cost_sheet">Packing List</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buyer_invoice">
      <div class="invoice_padding">
        <b-container>
          <b-card style="border-radius: 12px; box-shadow: 30">
            <b-container class="margin-card">
              <div>
                <b-row>
                  <b-col lg="3" cols="12">
                    <span class="inoice_number"> Invoice no </span>
                    <br /><br />
                    <span class="ivoice_numbr_value">{{
                      shipmentdetails.invoice_no
                    }}</span>
                  </b-col>
                  <div></div>
                  <b-col lg="5" cols="8" class="mobile_paddings">
                    <span class="inoice_number"> Consignee </span>
                    <br /><br />
                    <span class="ivoice_numbr_value">
                      {{ shipmentdetails.consignee }}</span
                    >
                  </b-col>

                  <b-col lg="4" class="mobile_paddings">
                    <!-- A.W.B -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number"> A.W.B. </span>
                          <span class="col ivoice_numbr_value">
                            {{ shipmentdetails.awb }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> A.W.B. </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">
                        {{ shipmentdetails.awb }}</span
                      >
                    </div>

                    <br />

                    <!-- Flight -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number"> Flight </span>
                          <span class="col ivoice_numbr_value margin_flight">
                            {{ shipmentdetails.flight }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> Flight </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">
                        {{ shipmentdetails.flight }}</span
                      >
                    </div>

                    <br />

                    <!-- ETA -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number">ETA </span>
                          <span class="col ivoice_numbr_value margin_eta">
                            {{ shipmentdetails.eta }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> ETA </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">
                        {{ shipmentdetails.eta }}</span
                      >
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-container>
          </b-card>
        </b-container>
      </div>
    </div>
    <div class="pt-4">
      <b-card>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Box Number</th>
              <th scope="col">Seafood type</th>
              <th scope="col">Quality</th>
              <th scope="col">Grading</th>
              <th scope="col">Weight(Kg)</th>
            </tr>
          </thead>

          <tbody v-for="item in boxes" :key="item.box_no">
            <tr
              style="height: 50px"
              v-for="(seafood, seafoodindex) in item.seafoods"
              :key="seafood.seafoodtype"
            >
              <th scope="row" v-if="!seafoodindex > 0">{{ item.box_no }}</th>
              <td scope="row" v-if="seafoodindex > 0"></td>
              <td>{{ seafood.seafoodtype }}</td>
              <td>{{ seafood.quality }}</td>
              <td>{{ seafood.grading }}</td>
              <td>{{ seafood.weight }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
      <EmailModal title="Send Packing List" :invoice="invoice" />
    </b-modal>

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="50000"
        :filename="$route.params.invoice_no + '' + ' PackingList'"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <!-- packing invoice -->
          <!-- headings -->
          <div class="pt-0">
            <div class="buyer_invoice">
              <div class="pt-0">
                <div class="text-center">
                  <h2 class="invoice_heading">
                    SUN SAYURU SEA FOODS EXPORTS (PVT) LTD.
                  </h2>
                  <h5 class="invoice_sub_heading">
                    NO.1068/3, ALUTHKURUWA, PITIPANA, NEGOMBO, SRI LANKA.
                  </h5>
                  <h5 class="invoice_sub_heading">Tel : +94 772529262</h5>

                  <div class="mt-0">
                    <span class="cost_sheet">Packing List</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- sub details(eta,shipment no) -->
            <div class="buyer_invoice">
              <div class="mt-0">
                <b-container>
                  <b-card style="border-radius: 12px; box-shadow: 30">
                    <b-container class="margin-card">
                      <div>
                        <b-row>
                          <b-col lg="3" cols="12">
                            <span class="inoice_number"> Invoice no </span>
                            <br /><br />
                            <span class="ivoice_numbr_value">{{
                              shipmentdetails.invoice_no
                            }}</span>
                          </b-col>
                          <div></div>
                          <b-col lg="5" cols="8" class="mobile_paddings">
                            <span class="inoice_number"> Consignee </span>
                            <br /><br />
                            <span class="ivoice_numbr_value">
                              {{ shipmentdetails.consignee }}</span
                            >
                          </b-col>

                          <b-col lg="4" class="mobile_paddings">
                            <!-- A.W.B -->
                            <div class="web_only_view">
                              <div class="row d-flex justify-content">
                                <div>
                                  <span class="col inoice_number">
                                    A.W.B.
                                  </span>
                                  <span class="col ivoice_numbr_value">
                                    {{ shipmentdetails.awb }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> A.W.B. </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ shipmentdetails.awb }}</span
                              >
                            </div>

                            <br />

                            <!-- Flight -->
                            <div class="web_only_view">
                              <div class="row d-flex justify-content">
                                <div>
                                  <span class="col inoice_number">
                                    Flight
                                  </span>
                                  <span
                                    class="col ivoice_numbr_value margin_flight"
                                  >
                                    {{ shipmentdetails.flight }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> Flight </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ shipmentdetails.flight }}</span
                              >
                            </div>

                            <br />

                            <!-- ETA -->
                            <div class="web_only_view">
                              <div class="row d-flex justify-content">
                                <div>
                                  <span class="col inoice_number">ETA </span>
                                  <span
                                    class="col ivoice_numbr_value margin_eta"
                                  >
                                    {{ shipmentdetails.eta }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> ETA </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ shipmentdetails.eta }}</span
                              >
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-container>
                  </b-card>
                </b-container>
              </div>
            </div>
            <!-- table -->
            <b-card style="margin-top: -53px;">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th class="packing_list_font_pdf" scope="col">
                      Box Number
                    </th>
                    <th class="packing_list_font_pdf" scope="col">
                      Seafood type
                    </th>
                    <th class="packing_list_font_pdf" scope="col">Quality</th>
                    <th class="packing_list_font_pdf" scope="col">Grading</th>
                    <th class="packing_list_font_pdf" scope="col">
                      Weight(Kg)
                    </th>
                  </tr>
                </thead>

                <tbody v-for="item in boxes" :key="item.box_no">
                  <tr
                    style="page-break-inside: avoid"
                    v-for="(seafood, seafoodindex) in item.seafoods"
                    :key="seafood.seafoodtype"
                  >
                    <th
                      scope="row"
                      v-if="!seafoodindex > 0"
                      class="packing_list_font_pdf"
                    >
                      {{ item.box_no }}
                    </th>
                    <td scope="row" v-if="seafoodindex > 0"></td>
                    <td class="packing_list_font_pdf">
                      {{ seafood.seafoodtype }}
                    </td>
                    <td class="packing_list_font_pdf">{{ seafood.quality }}</td>
                    <td class="packing_list_font_pdf">{{ seafood.grading }}</td>
                    <td class="packing_list_font_pdf">{{ seafood.weight }}</td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </div>
        </section>
      </vue-html2pdf>
    </div>
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
import EmailModal from "@/Components/EmailModal.vue";
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "PriceRateTable",
  components: {
    EmailModal,
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
    BLink,
  },
  data() {
    return {
      show: false,
      selectedItem: {},
      invoice: {},
      boxes: [],
      shipmentdetails: {},
    };
  },
  async created() {
    await this.getBuyerPackingList();
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    openEmailModal() {
      this.$refs.EmailModal.show();
    },
    async getBuyerPackingList() {
      this.invoice.invoice_no = this.$route.params.invoice_no;
      this.invoice.buyer_name = localStorage.currentSelectedBuyercode;
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.buyerPackingList(payload);
      this.boxes = res.data.data.boxes;
      this.shipmentdetails = res.data.data.shhipment_details;
      this.$vs.loading.close();
    },
    generate() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
