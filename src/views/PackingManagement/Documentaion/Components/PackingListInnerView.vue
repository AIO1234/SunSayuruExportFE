<template>
  <div>
    <h2 class="packing-list-innerview-heading">View packing list</h2>

    <div class="pt-4">
      <b-row>
        <b-col lg="6"
          ><span class="shipment_number_heading"
            >Shipment Number - {{ $route.params.shipment_no }}</span
          >
        </b-col>
        <b-col lg="6" class="d-flex justify-content-end mobile_paddings">
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
      <EmailModal title="Send Packing List" />
    </b-modal>

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="PackingList"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1200px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <!-- packing invoice -->
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
                    <th scope="row" v-if="!seafoodindex > 0">
                      {{ item.box_no }}
                    </th>
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

      boxes: [],
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
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.buyerPackingList(payload);
      this.boxes = res.data.data;
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
