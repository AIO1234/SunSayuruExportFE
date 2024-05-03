<template>
  <div class="buyer_invoice">
    <h2 class="shipment_number text-right">Shipment no - {{ $route.params.shipment_no }}</h2>

    <div
      style="background-color: #fffef8; padding-top: 17px; border-radius: 10px"
    >
      <div class="d-flex justify-content-end">
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
              ><span class="sendemail_button_color">Send Email</span></b-button
            >
          </b-col>
        </b-row>
      </div>
      <div class="pt-3">
        <BuyerInvoice />
      </div>

      <b-modal ref="EmailModal" title-class="modal_title_color" hide-footer>
        <EmailModal title="Send Buyer Invoice" />
      </b-modal>
    </div>
  </div>
</template>
<script>

import BuyerInvoice from "../Components/Invoices/BuyerInvoice.vue";
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
    BuyerInvoice,
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
  },
};
</script>
