<template>
  <div class="custom_invoice">
    <h2 class="shipment_number text-right">Shipment no - S001</h2>

    <div style="background-color: #fffef8; border-radius: 10px">
      <div class="d-flex justify-content-end">
        <b-button class="download_button mr-2 mt-2" variant="none"
          ><span class="download_button_color">Download</span></b-button
        >
      </div>
      <CustomInvoice />
    </div>
  </div>
</template>
<script>
import CustomInvoice from "../Components/Invoices/CustomInvoice.vue";
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
    CustomInvoice,
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
};
</script>
