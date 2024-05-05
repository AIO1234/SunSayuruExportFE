<template>
  <div class="buyer_invoice">
    <h2 class="shipment_number text-right">
      Shipment no - {{ $route.params.shipment_no }}
    </h2>

    <div
      style="background-color: #fffef8; padding-top: 17px; border-radius: 10px"
    >
      <div class="d-flex justify-content-end">
        <b-row>
          <b-col lg="5" cols="6">
            <b-button class="download_button" variant="none" @click="generate()"
              ><span class="download_button_color">Download</span></b-button
            >
          </b-col>
          <b-col lg="7" cols="6">
            <b-button
              class="sendemail_button"
              variant="none"
              @click="openEmailModal()"
              ><span class="sendemail_button_color">Send Email</span></b-button
            >
          </b-col>
        </b-row>
      </div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="Invoice"
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
          <CustomInvoice />
        </section>
      </vue-html2pdf>
      <div class="pt-3">
        <CustomInvoice />
      </div>

      <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
        <EmailModal title="Send Custom Invoice" />
      </b-modal>
    </div>
  </div>
</template>
<script>
import VueHtml2pdf from "vue-html2pdf";
import CustomInvoice from "../Components/Invoices/CustomInvoice.vue";
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
export default {
  components: {
    VueHtml2pdf,
    CustomInvoice,
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
  methods: {
    openEmailModal() {
      this.$refs.EmailModal.show();
    },
    generate() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
