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
        pdf-orientation="landscape"
        pdf-content-width="1200px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <BuyerInvoice :buyerinvoice="buyerinvoice" />
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
