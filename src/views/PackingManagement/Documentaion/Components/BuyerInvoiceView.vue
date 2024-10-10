<template>
  <div>
    <div class="buyer_invoice">
      <h2 class="shipment_number text-right">
        Invoice No - {{ $route.params.invoice_no }}
      </h2>

      <div
        style="
          background-color: #fffef8;
          padding-top: 17px;
          border-radius: 10px;
        "
      >
        <div class="d-flex justify-content-end">
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
        </div>

        <!-- buyer invoice -->

        <div class="pt-3">
          <BuyerInvoice :buyerinvoice="buyerinvoice" />
        </div>

        <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
          <EmailModal
            title="Send Buyer Invoice"
            :invoice="buyerinvoice"
            @closemodal="closeEmailModal"
          />
        </b-modal>
      </div>
    </div>

    <!-- generate pdf for buyer invoice  -->

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="50000"
        :filename="$route.params.invoice_no + '' + ' Invoice'"
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
          <!-- buyer invoice -->
          <div class="buyer_invoice">
            <div class="mt-0">
              <!-- header details -->
              <div class="text-center">
                <h2 class="invoice_heading">
                  SUN SAYURU SEA FOODS EXPORTS (PVT) LTD.
                </h2>
                <h5 class="invoice_sub_heading">
                  NO.1068/3, ALUTHKURUWA, PITIPANA, NEGOMBO, SRI LANKA.
                </h5>
                <h5 class="invoice_sub_heading">Tel : +94 772529262</h5>

                <div class="mt-0">
                  <span class="cost_sheet">Invoice</span>
                </div>
              </div>

              <!-- sub details -->
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
                              buyerinvoice.invoice_no
                            }}</span>
                          </b-col>
                          <div></div>
                          <b-col lg="5" cols="8" class="mobile_paddings">
                            <span class="inoice_number"> Consignee </span>
                            <br /><br />
                            <span class="ivoice_numbr_value">
                              {{ buyerinvoice.consignee }}</span
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
                                    {{ buyerinvoice.awb }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> A.W.B. </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ buyerinvoice.awb }}</span
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
                                    {{ buyerinvoice.flight }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> Flight </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ buyerinvoice.flight }}</span
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
                                    {{ buyerinvoice.eta }}</span
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="mobile_only_view">
                              <span class="inoice_number"> ETA </span>
                              <br /><br />
                              <span class="ivoice_numbr_value">
                                {{ buyerinvoice.eta }}</span
                              >
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-container>
                  </b-card>
                </b-container>

                <!-- table details -->
                <div style="margin-top: -33px" class="mt-0 mr-3 ml-4">
                  <div class="pt-0">
                    <!-- table -->
                    <table class="table table-sm" sortable>
                      <thead>
                        <tr>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Seafood type
                          </th>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Quality
                          </th>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Grading(Kg)
                          </th>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Rate per Kg ($)
                          </th>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Weight(Kg)
                          </th>
                          <th class="buyer_invoice_font_pdf" scope="col">
                            Total cost ($)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          style="page-break-inside: avoid"
                          v-for="seafood in buyerinvoice.boxes.seafoods"
                          :key="seafood.seafoodtype"
                        >
                          <td class="buyer_invoice_font_pdf">
                            {{ seafood.seafoodtype }}
                          </td>
                          <td class="buyer_invoice_font_pdf">
                            {{ seafood.quality }}
                          </td>
                          <td class="buyer_invoice_font_pdf">
                            {{ seafood.grading }}
                          </td>
                          <td class="buyer_invoice_font_pdf">
                            {{ getPriceWithOutCurrency(seafood.price_rate) }}
                          </td>
                          <td class="buyer_invoice_font_pdf">
                            {{ getWeight(seafood.weight) }}
                          </td>
                          <td class="buyer_invoice_font_pdf">
                            {{ getPriceWithOutCurrency(seafood.total_amount) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- table end -->
                  </div>
                  <b-container>
                    <div class="web_only_view">
                      <b-row>
                        <b-col lg="8" cols="8"
                          ><span class="total ml-1">Total</span></b-col
                        >
                        <b-col lg="2" cols="2"
                          ><span class="total" style="padding-left: 10px">
                            {{
                              getWeight(buyerinvoice.boxes.total_weight)
                            }}</span
                          ></b-col
                        >
                        <b-col lg="2" cols="2"
                          ><span class="total" style="padding-right: 10px">{{
                            getPriceWithOutCurrency(
                              buyerinvoice.boxes.total_amount
                            )
                          }}</span>
                        </b-col>
                      </b-row>
                    </div>
                    <div class="mobile_only_view">
                      <br />
                      <b-row>
                        <b-col lg="8" cols="8"
                          ><span class="total ml-1">Total Weight</span></b-col
                        >
                        <b-col lg="2" cols="2"
                          ><span class="total ml-1">
                            {{
                              getWeight(buyerinvoice.boxes.total_weight)
                            }}</span
                          ></b-col
                        >
                      </b-row>
                      <br />
                      <b-row>
                        <b-col lg="8" cols="8"
                          ><span class="total ml-1">Total Cost</span></b-col
                        >
                        <b-col lg="2" cols="2"
                          ><span class="total ml-1">{{
                            getPriceWithOutCurrency(
                              buyerinvoice.boxes.total_amount
                            )
                          }}</span></b-col
                        >
                      </b-row>
                    </div>
                  </b-container>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>
<script>
import BuyerInvoice from "../Components/Invoices/BuyerInvoice.vue";
import VueHtml2pdf from "vue-html2pdf";
import EmailModal from "@/Components/EmailModal.vue";
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
export default {
  components: {
    BuyerInvoice,
    VueHtml2pdf,
    EmailModal,
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
  },
  data() {
    return {
      buyerinvoice: {},
    };
  },
  async created() {
    await this.getBuyerInvoice();
  },
  methods: {
    openEmailModal() {
      this.$refs.EmailModal.show();
    },
    closeEmailModal() {
      this.$refs.EmailModal.hide();
    },
    generate() {
      this.$refs.html2Pdf.generatePdf();
    },

    async getBuyerInvoice() {
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.buyerInvoice(payload);
      this.buyerinvoice = res.data.data;

      this.$vs.loading.close();
    },
  },
};
</script>
