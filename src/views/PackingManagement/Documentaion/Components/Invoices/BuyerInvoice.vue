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
          <span class="cost_sheet">COST SHEET</span>
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
                    <span class="ivoice_numbr_value">SNS-TWN-551-2023</span>
                  </b-col>
                  <div></div>
                  <b-col lg="5" cols="8" class="mobile_paddings">
                    <span class="inoice_number"> Consignee </span>
                    <br /><br />
                    <span class="ivoice_numbr_value"
                      >HONG BENG ENTERPRISE CO. LTD, 6FL NO 56,316 LANE,<br />RUEIGUANG
                      RD, NEIHU DISTRICT 114, TAIPEI, TAIWAN, ROC.</span
                    >
                  </b-col>

                  <b-col lg="4" class="mobile_paddings">
                    <!-- A.W.B -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number"> A.W.B. </span>
                          <span class="col ivoice_numbr_value">
                            232 5443 6351</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> A.W.B. </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">232 5443 6351</span>
                    </div>

                    <br />

                    <!-- Flight -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number"> Flight </span>
                          <span class="col ivoice_numbr_value margin_flight">
                            MH 178 // MH 366</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> Flight </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">MH 178 // MH 366</span>
                    </div>

                    <br />

                    <!-- ETA -->
                    <div class="web_only_view">
                      <div class="row d-flex justify-content">
                        <div>
                          <span class="col inoice_number">ETA </span>
                          <span class="col ivoice_numbr_value margin_eta">
                            2024.01.08</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mobile_only_view">
                      <span class="inoice_number"> ETA </span>
                      <br /><br />
                      <span class="ivoice_numbr_value">2024.01.08</span>
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
              :items="items"
              :fields="fields"
            >
              <template #cell(action)="data">
                <b-button
                  variant="none"
                  @click="$router.push('/packinglistinner')"
                >
                  <b-img
                    width="17px"
                    src="@/assets/images/icons/Group 117855.png"
                  ></b-img>
                </b-button>
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
                  ><span class="total ml-1"> 20.5</span></b-col
                >
                <b-col lg="2" cols="2"
                  ><span class="total ml-1">385.00</span>
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
                  ><span class="total ml-1"> 20.5(kg)</span></b-col
                >
              </b-row>
              <br />
              <b-row>
                <b-col lg="8" cols="8"
                  ><span class="total ml-1">Total Cost</span></b-col
                >
                <b-col lg="2" cols="2"
                  ><span class="total ml-1">385.00($)</span></b-col
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
  data() {
    return {
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
          key: "rate",
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
          key: "total",
          label: "Total cost ($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          seafoodtype: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          rate: "16.5",
          total: "198.00",
          weight: "8",
        },
        {
          seafoodtype: "Kelawalla",
          quality: "A+",
          grading: "50 - 60",
          rate: "16.5",
          total: "198.00",
          weight: "8",
        },
        {
          seafoodtype: "Thalapatha",
          quality: "A+",
          grading: "50 - 60",
          rate: "16.5",
          total: "198.00",
          weight: "8",
        },
      ],
    };
  },
};
</script>
