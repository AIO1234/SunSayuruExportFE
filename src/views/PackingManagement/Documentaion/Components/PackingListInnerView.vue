<template>
  <div>
    <h2 class="packing-list-innerview-heading">View packing list</h2>

    <div class="pt-4">
      <b-row>
        <b-col lg="6"
          ><span class="shipment_number_heading">Shipment Number - S001</span>
        </b-col>
        <b-col lg="6" class="d-flex justify-content-end mobile_paddings">
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
        </b-col>
      </b-row>
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
          <tbody v-for="item in items" :key="item.boxnumber">
            <tr
              style="height: 50px"
              v-for="(seafood, seafoodindex) in item.seafood"
              :key="seafood.seafoodtype"
            >
              <th scope="row" v-if="!seafoodindex > 0">{{ item.boxnumber }}</th>
              <td scope="row" v-if="seafoodindex > 0"></td>
              <td>{{ seafood.seafoodtype }}</td>
              <td>{{ seafood.quality }}</td>
              <td>{{ seafood.grading }}</td>
              <td>{{ seafood.weight }}</td>
            </tr>

            <!-- <tr>
            <th scope="row"></th>
            <th>Prawns</th>
            <td>A+</td>
            <td>50 - 60</td>
            <td>90kg</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <th>Prawns</th>
            <td>A+</td>
            <td>50 - 60</td>
            <td>90kg</td>
          </tr> -->
          </tbody>
        </table>
      </b-card>
      <!-- <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
        <template #cell(action)="data">
          <b-button variant="none" @click="$router.push('/packinglistinner')">
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 117855.png"
            ></b-img>
          </b-button>
        </template>

        <template #cell(boxnumber)="data"> {{ data.value }} </template>
        <template #cell(seafoo)="data"
          >{{ data.item.seafood[data.item.seafood.length - 1].seafoodtype }}
        </template>
        <template #cell(quality)="data"
          >{{ data.item.seafood[data.item.seafood.length - 1].quality }}
        </template>
        <template #cell(grading)="data"> </template>
        {{ data.item.seafood[data.item.seafood.length - 1].grading }}
        <template #cell(weight)="data">
          {{ data.item.seafood[data.item.seafood.length - 1].weight }}
        </template>
      </b-table> -->
    </div>
    <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
      <EmailModal title="Send Packing List" />
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
import EmailModal from "@/Components/EmailModal.vue";
export default {
  name: "PriceRateTable",
  components: {
    EmailModal,
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
      // fields: [
      //   {
      //     key: "boxnumber",
      //     label: "Box Number",
      //     sortable: true,

      //     // tdClass: "custom-cell-padding",
      //   },
      //   {
      //     key: "seafood",
      //     label: "Seafood type",
      //     sortable: true,

      //     // tdClass: "custom-cell-padding",
      //   },

      //   {
      //     key: "quality",
      //     label: "Quality",
      //     sortable: true,
      //     // thStyle: { width: "2%" },
      //     // tdClass: "custom-cell-padding",
      //   },

      //   {
      //     key: "grading",
      //     label: "Grading (Kg)",
      //     sortable: true,
      //     // thStyle: { width: "2%" },
      //     // tdClass: "custom-cell-padding",
      //   },
      //   {
      //     key: "weight",
      //     label: "Weight(Kg)",
      //     sortable: true,
      //     // thStyle: { width: "2%" },
      //     // tdClass: "custom-cell-padding",
      //   },
      // ],
      items: [
        {
          boxnumber: "01",
          seafood: [
            {
              seafoodtype: "Prawns",
              quality: "A+",
              grading: "50 - 60",
              weight: "8",
            },
            {
              seafoodtype: "Prawns",
              quality: "A+",
              grading: "50 - 60",
              weight: "8",
            },
          ],
        },
        {
          boxnumber: "02",
          seafood: [
            {
              seafoodtype: "Prawns",
              quality: "A+",
              grading: "50 - 60",
              weight: "8",
            },
          ],
        },

        // {
        //   seafoodtype: "Kelawalla",
        //   quality: "A+",
        //   grading: "50 - 60",
        //   weight: "8",
        // },
        // {
        //   seafoodtype: "Thalapatha",
        //   quality: "A+",
        //   grading: "50 - 60",
        //   weight: "8",
        // },
      ],
    };
  },
  async created() {},

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    openEmailModal() {
      this.$refs.EmailModal.show();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
