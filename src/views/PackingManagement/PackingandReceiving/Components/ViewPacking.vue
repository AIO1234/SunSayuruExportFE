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
                <span class="col-5 shipment_summry_para">S-001</span>
              </div>
              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Country</span>
                <span class="col-5 shipment_summry_para">Taiwan</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Buyer</span>
                <span class="col-5 shipment_summry_para">Lee</span>
              </div>

              <br />
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Flight</span>
                <span class="col-5 shipment_summry_para">MH-178</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">ETA</span>
                <span class="col-5 shipment_summry_para">2024/01/20</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">AWB</span>
                <span class="col-5 shipment_summry_para">58963214587</span>
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
                  <span class="col-5 shipment_summry_para">02</span>
                </div>
                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total weight(Kg)</span
                  >
                  <span class="col-5 shipment_summry_para">03</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total no of suppliers</span
                  >
                  <span class="col-5 shipment_summry_para">Lee</span>
                </div>

                <br />
                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total Seafood cost</span
                  >
                  <span class="col-5 shipment_summry_para">678.00</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total material cost</span
                  >
                  <span class="col-5 shipment_summry_para">15850.00</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total additional cost</span
                  >
                  <span class="col-5 shipment_summry_para">9390.00</span>
                </div>

                <br />

                <div class="row d-flex justify-content">
                  <span class="col-7 shipment_summery_heading"
                    >Total shipment cost</span
                  >
                  <span class="col-5 shipment_summry_para">32020.00</span>
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
    <b-card>
      <span class="box_header">Box number - 01</span>
    <div class="pt-2"></div>
      <b-row>
        <b-col>
          <div>
            <b-container>
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Shipment no</span>
                <span class="col-5 shipment_summry_para">S-001</span>
              </div>
              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Country</span>
                <span class="col-5 shipment_summry_para">Taiwan</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Buyer</span>
                <span class="col-5 shipment_summry_para">Lee</span>
              </div>

              <br />
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Flight</span>
                <span class="col-5 shipment_summry_para">MH-178</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">ETA</span>
                <span class="col-5 shipment_summry_para">2024/01/20</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">AWB</span>
                <span class="col-5 shipment_summry_para">58963214587</span>
              </div>
            </b-container>
          </div>
        </b-col>

        <b-col>
          <div>
            <b-table
              sticky-header=""
              responsive="sm"
              :fields="suplier_feilds"
              :items="supliers"
            >
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <br />
    <br />
    <b-card>
      <span class="box_header">Box number - 02</span>
    <div class="pt-2"></div>
      <b-row>
        <b-col>
          <div>
            <b-container>
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Shipment no</span>
                <span class="col-5 shipment_summry_para">S-001</span>
              </div>
              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Country</span>
                <span class="col-5 shipment_summry_para">Taiwan</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Buyer</span>
                <span class="col-5 shipment_summry_para">Lee</span>
              </div>

              <br />
              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">Flight</span>
                <span class="col-5 shipment_summry_para">MH-178</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">ETA</span>
                <span class="col-5 shipment_summry_para">2024/01/20</span>
              </div>

              <br />

              <div class="row d-flex justify-content">
                <span class="col-5 shipment_summery_heading">AWB</span>
                <span class="col-5 shipment_summry_para">58963214587</span>
              </div>
            </b-container>
          </div>
        </b-col>

        <b-col>
          <div>
            <b-table
              sticky-header=""
              responsive="sm"
              :fields="suplier_feilds"
              :items="supliers"
            >
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-card>
  <div class="pt-2"></div>

    <span class="section_header">Material cost</span>
  <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :fields="materialcosts_feilds"
        :items="materialcosts"
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
        :items="additialcosts"
      >
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
    selectedPacking: Object,
  },
  data() {
    return {
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
          key: "rate",
          label: "Price rate",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "cost",
          label: "Cost",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
      supliers: [
        {
          suplier: "Namal Udugama",
          weight: "8",
          rate: "100",
          cost: "800",
        },
        {
          suplier: "Namal Udugama",
          weight: "8",
          rate: "100",
          cost: "800",
        },
        {
          suplier: "Namal Udugama",
          weight: "8",
          rate: "100",
          cost: "800",
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
          label: "Unit Price",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Amount",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
      materialcosts: [
        {
          description: "Box",
          quantity: "01",
          unitprice: "3250.00",
          amount: "3250.00",
        },
        {
          description: "Box",
          quantity: "01",
          unitprice: "3250.00",
          amount: "3250.00",
        },
        {
          description: "Box",
          quantity: "01",
          unitprice: "3250.00",
          amount: "3250.00",
        },
      ],

      additioalcosts_feilds: [
        {
          key: "description",
          label: "Description",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },

        {
          key: "amount",
          label: "Amount",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
      additialcosts: [
        {
          description: "Airport",

          amount: "3250.00",
        },
        {
          description: "Airport",

          amount: "3250.00",
        },
        {
          description: "Airport",

          amount: "3250.00",
        },
      ],
    };
  },
};
</script>
