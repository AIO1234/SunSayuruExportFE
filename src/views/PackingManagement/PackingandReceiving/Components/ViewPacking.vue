<template>
  <div class="packing_view">
    <div class="pt-2"></div>
    <b-card style="width: 70%">
      <b-row>
        <b-col>
          <div>
            <b-container>
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Shipment no</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.shipment_no
                }}</span>
              </div>
              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Country</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.shipment_no
                }}</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Buyer</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.shipment_no
                }}</span>
              </div>

              <br />
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Flight</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.flight
                }}</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">ETA</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.eta
                }}</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">AWB</span>
                <span class="col-5 shipment_summry_para">{{
                  shipment.shipmentdetails.awb
                }}</span>
              </div>
            </b-container>
          </div>
        </b-col>

        <b-col>
          <div>
            <b-container>
              <div>
                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total Boxes</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    shipment.shipmentdetails.total_boxes
                  }}</span>
                </div>
                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total weight(Kg)</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    shipment.shipmentdetails.total_weight
                  }}</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total no of suppliers</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    shipment.shipmentdetails.total_supliers
                  }}</span>
                </div>

                <br />
                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total Seafood cost</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    getPrice(shipment.shipmentdetails.total_seafood_amount)
                  }}</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total material cost</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    getPrice(shipment.shipmentdetails.total_material_costs)
                  }}</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total additional cost</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    getPrice(shipment.shipmentdetails.total_additional_costs)
                  }}</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total shipment cost</span
                  >
                  <span class="col-5 shipment_summry_para">{{
                    getPrice(shipment.shipmentcost)
                  }}</span>
                </div>
              </div>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <div class="pt-2"></div>
    <span class="section_header">Boxes & suppliers</span>
    <div class="pt-2"></div>
    <b-card v-for="box in shipment.boxes" :key="box.box_no">
      <span class="box_header">Box number - {{ box.box_no }}</span>
      <div class="pt-2"></div>
      <b-row v-for="seafood in box.seafoods" :key="seafood.seafood">
        <b-col>
          <div>
            <b-container>
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Seafood Type</span>
                <span class="col-5 shipment_summry_para">{{
                  seafood.seafood
                }}</span>
              </div>
              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Quality</span>
                <span class="col-5 shipment_summry_para">{{
                  seafood.quality
                }}</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Grading</span>
                <span class="col-5 shipment_summry_para">{{
                  seafood.grading
                }}</span>
              </div>

              <br />
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading"
                  >Total Weight(Kg)</span
                >
                <span class="col-5 shipment_summry_para">{{
                  seafood.total_weight
                }}</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading"
                  >Seafood Cost(Rs)</span
                >
                <span class="col-5 shipment_summry_para">{{
                  getPriceWithOutCurrency(seafood.seafood_amount)
                }}</span>
              </div>

              <br /><br /><br />
            </b-container>
          </div>
        </b-col>

        <b-col>
          <div>
            <b-table
              sticky-header=""
              responsive="sm"
              :fields="suplier_feilds"
              :items="seafood.supliers"
            >
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <br />
    <br />

    <div class="pt-2"></div>

    <span class="section_header">Material cost</span>
    <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :fields="materialcosts_feilds"
        :items="shipment.material_costs"
      >
      </b-table>
    </b-card>
    <div class="pt-2"></div>
    <span class="section_header">Additional cost</span>
    <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :fields="additionalcosts_feilds"
        :items="shipment.additional_costs"
      >
      </b-table>
    </b-card>
  </div>
</template>
<script>
import shipmentApi from "@/Api/Modules/shipments.js";
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
    selectedPacking: Object,
  },
  data() {
    return {
      shipment: {},
      suplier_feilds: [
        {
          key: "suplier",
          label: "Suplier",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "weight",
          label: "Weight(kg)",
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
          label: "Cost(Rs)",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],

      materialcosts_feilds: [
        {
          key: "description",
          label: "Description",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "quantity",
          label: "Quantity",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "unitprice",
          label: "Unit Price(Rs)",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Amount(Rs)",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
      materialcosts: [],

      additioalcosts_feilds: [
        {
          key: "description",
          label: "Description",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },

        {
          key: "amount",
          label: "Amount(Rs)",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
      additialcosts: [],
    };
  },
  async created() {
    await this.showShipment();
  },
  methods: {
    async showShipment() {
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await shipmentApi.showShipment(payload);
      this.shipment = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>
