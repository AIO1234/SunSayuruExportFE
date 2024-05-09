<template>
  <div class="buyer_invoice">
    <div class="invoice_padding_one">
      <div class="text-center">
        <h2 class="invoice_heading">SUN SAYURU SEA FOODS EXPORTS (PVT) LTD.</h2>
        <h5 class="invoice_sub_heading">
          NO.1068/3, ALUTHKURUWA, PITIPANA, NEGOMBO, SRI LANKA.
        </h5>
        <h5 class="invoice_sub_heading">Tel : +94 772529262</h5>

        <div class="invoice_padding">
          <span class="cost_sheet">Invoice</span>
        </div>
      </div>
      <div class="invoice_padding mr-3 ml-4">
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
                          <span class="col inoice_number"> A.W.B. </span>
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
                          <span class="col inoice_number"> Flight </span>
                          <span class="col ivoice_numbr_value margin_flight">
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
                          <span class="col ivoice_numbr_value margin_eta">
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

        <div>
          <div class="pt-4">
            <b-table
              sticky-header=""
              responsive="sm"
              :items="buyerinvoice.boxes.seafoods"
              :fields="fields"
            >
              <template #cell(total_amount)="data">
                {{ getPriceWithOutCurrency(data.value) }}
              </template>
              <template #cell(price_rate)="data">
                {{ getPriceWithOutCurrency(data.value) }}
              </template>
            </b-table>
          </div>
          <b-container>
            <div class="web_only_view">
              <b-row>
                <b-col lg="8" cols="8"
                  ><span class="total ml-1">Total</span></b-col
                >
                <b-col lg="2" cols="2"
                  ><span class="total" style="padding-left: 40px">
                    {{ buyerinvoice.boxes.total_weight }}</span
                  ></b-col
                >
                <b-col lg="2" cols="2"
                  ><span class="total" style="padding-left: 15px">{{
                    getPriceWithOutCurrency(buyerinvoice.boxes.total_amount)
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
                    {{ buyerinvoice.total_weight }}</span
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
                    getPriceWithOutCurrency(buyerinvoice.total_amount)
                  }}</span></b-col
                >
              </b-row>
            </div>
          </b-container>
        </div>
      </div>
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
export default {
  components: {
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
  async created() {
    await this.getBuyerInvoice();
  },
  data() {
    return {
      buyerinvoice: {},
      fields: [
        {
          key: "seafoodtype",
          label: "Seafood type",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },

        {
          key: "quality",
          label: "Quality ",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "grading",
          label: "Grading (Kg)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "price_rate",
          label: "Rate per Kg ($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "weight",
          label: "Weight(Kg)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "total_amount",
          label: "Total cost ($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [],
    };
  },

  methods: {
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
