<template>
  <div>
    <br />
    <b-container>
      <b-row>
        <b-col lg="3" cols="3">
          <span class="table_headings">Date</span>
        </b-col>
        <b-col lg="3" cols="4">
          <span class="table_headings">Seafood Type</span>
        </b-col>
        <b-col lg="3" cols="3">
          <span class="table_headings">Total Weight</span>
        </b-col>
        <b-col lg="3" cols="2">
          <span class="table_headings">Cost($)</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3" cols="3">
          <span class="detailed_modal_content">2024.01.2</span>
        </b-col>
        <b-col lg="3" cols="4">
          <span class="detailed_modal_content">Kelawalla</span>
        </b-col>
        <b-col lg="3" cols="3">
          <span class="detailed_modal_content">100kg</span>
        </b-col>

        <b-col lg="3" cols="2">
          <span class="detailed_modal_content">600</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3" cols="3">
          <span class="detailed_modal_content">2024.01.3</span>
        </b-col>
        <b-col lg="3" cols="4">
          <span class="detailed_modal_content">Thalapath</span>
        </b-col>
        <b-col lg="3" cols="3">
          <span class="detailed_modal_content">3000kg</span>
        </b-col>

        <b-col lg="3" cols="2">
          <span class="detailed_modal_content">500</span>
        </b-col>
      </b-row>
    </b-container>

    <div class="pt-5 mobile_only_view">
      <b-row>
        <div class="pt-5"></div>
        <b-col lg="6" cols="12" sm="12">
          <b-button variant="none" style="background-color: #0052ba" block>
            <span class="button_text_styles"> Genarate Invoice</span></b-button
          >
        </b-col>

        <div class="pt-5"></div>
        <b-col lg="6" cols="12" sm="12">
          <b-button variant="none" style="background-color: #0052ba" block>
            <span class="button_text_styles">
              Send Invoice To Suplier</span
            ></b-button
          >
        </b-col>
      </b-row>
    </div>

    <div class="pt-5 web_only_view">
      <div class="pt-3"></div>
      <b-container>
        <b-row >
          <b-col lg="6" cols="12">
            <b-button variant="none" class="form_submit_button_shipment_view">
              <span class="button_text_styles">
                Genarate Invoice</span
              ></b-button
            >
          </b-col>

          <b-col lg="6" cols="12">
            <b-button variant="none" class="form_submit_button_shipment_view text-end text-end">
              <span class="button_text_styles">
                Send Invoice To Suplier</span
              ></b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br /><br />
    <br /><br />
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
    selectedItem: Object,
  },
};
</script>
